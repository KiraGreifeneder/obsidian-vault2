# Typescript
##  types
- use null for fields that are allowed to be empty.
- vars should only ever be undefined if something is wrong, i.e. not intentional.
- functions that should have a return value should return either that, or undefined when uncertain (like js array.find())

Example
- Return null if we are iterating through a list and there is no next item
- Return undefined if a name doesn't exist in the place we're trying to get it from... although we could just return an exception. idk man.

## exceptions
- avoid them by returning null or undefined

## interfaces
- use interfaces only if we want to extend them (e.g. ScheduleEntry extends Script)
- use types everywhere else
