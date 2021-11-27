# Design Patterns

## Builder

Builder pattern builds a complex object using simple objects and using a step by step approach.

Example of bad implementation

`var sue = new Person('Sue', true, true, 60);`

Improved with Builder Pattern

`var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();`
