## Utility types
To facilitate common type trarnsformations (e.g. create we want to create a 
subtype that has all but one property of a supertype), 
we can use Utility types.
These types accept our object type as a generic, and create a new type from it.

### Commonly used

For creating a subtype where all properties are set to optional, we can use `Partial<Type>`.
This essentially represents all subsets of our original type. 
By using it, we allow for any and all properties of the obj to be set.

The exact opposite of this is `Partial<Type>`, whcih sets all fields to required.

To only keep specific properties of a type, use `Pick<Type, Keys>`, 
where keys is a type representing the keys to be kept in the new type. 
Keys could be something like `'title' | 'completed'`, defined in the angled brackets themselves or outside.

To keep all but a few specific properties, we can use `Omit<Tpye, Keys>`. 
Works similarly to Pick, but removes Keys.

It is also possible to create types from functions and Constructors, with `Parameters<Type>` where Type is a function declaration.
Same thing goes for `ConstructorParameters<Type>` and `ReturnType<Type>`.

## Array methods
### shift(), unshift(), push(), pop()
`unshift()` Inserts new elements at the start of the array
`push()` Inserts new elements at the end of the array.

`shift()` Removes the first element of an array and returns that element. Useful for queues.
`pop()` Removes and returns the last element of an array.