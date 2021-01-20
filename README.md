## What is redux ?

In simple words Redux is just a container of state of your application .
Redux is used to manage and update the state of the application , the whole idea of using redux is to centralize the state of the application .

In short Redux is a small standalone javascript library and can integrate with any UI framework.

## When to use redux ?

Not every application needs to be built using redux , redux is more useful when ,

- When the application has large state , that is needed in many places of the application
- The state of the application is updated frequently over time

## Principles of react :

- The whole state of the application is represented as a single javascript Object
- The state is read-only , the only way to change the state is by dispatching an action ( An action is a plain javascript object , that describes what has changed in the minimal way )

## Pure and Impure Functions

- **Pure ->** These are the functions whose return value , solely depends upon the value of the argument .
- **Impure ->** They are functions whose return values does not soley depends upn the value of argument , they might perform network requests , read-write into the database or even modify the values passed into them .
