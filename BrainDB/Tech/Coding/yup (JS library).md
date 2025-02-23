Yup is a javascript libaray for creating schemas for runtime value validation.

## `when` conditions

`Schema.when(keys: string | string[], builder: object | (values: any[], schema) => Schema): Schema`

`when` conditions are additive, and adjust the schema based on a sibling or sibling children fields.
The key `is` can be a value or a matcher function, `then` provides the true schema.

Prefixing properties with `$` specifies a property that is dependent on the `context` passed in by `validate()`.

## `ref` getter

`ref(path: string, options: { contextPrefix: string }): Ref`

Creates a reference to another sibling or sibling descendant field, i.e. properties of the same level.
Refs are resolved at validation/cast time.

## `date` `min` and `max`

`date.min(limit: Date | string | Ref, message?: string | function): Schema`

Sets the minimum date that is allowed in the schema. When a string is provided,
it will attempt to cast it to a date first, and uses the result as a limit.

### Issues

When using min/max in combination with a when() that calls another min/max,
it 'overwrites' the original min/max.
This is because something like `.when("$to", (to, schema) => schema.max(to, "Darf nicht nach Besuch sein"))`
will set the max() rule _dynamically_, effectively overwriting the original max rule whenever validation is called.

The reason we did this in the first place is that $to refers to a value of a different context/schema,
which was passed in by formik.
So to mimic this, I came up with a weird workaround.

``` ts
.when("$from", (from, schema) => schema.test('isAfterFrom', 'Darf nicht vor Besuch sein', (tourFromVal) => {
            return !from || moment(tourFromVal).isAfter(from[0]);
        }))
```

Don't ask me why the from is passed as an array. I have no clue.

I believe what you SHOULD do is write a custom validate function for formik and pass the from/to values of the
other schema in as part of the context. That wouldn't need the .when just to access it.
But we can't do that through formik cleanly, as it alawys passes an undefined context!
It's a feature that has been requested since 2022.
So for now we are left without this ability. Sad.
