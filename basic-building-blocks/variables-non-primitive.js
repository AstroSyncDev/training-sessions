// sharing complex data in a single string
var name = 'softy'
const age = 24
const salary = 25
const gender = 'male'

name = 'bishoy'
console.log('employee is', name, age, salary, gender)
// student is softy 24 25 male
// confusing to tell which value represents which attribute

// object is a non-primitive data type, makes it easier to represent data
// called struct in cpp
// called object/json (javascript object notation) in javascript
// called map in dart
// called dictionary in python



const employee = {
    name: 'softy',
    age: 24,
    salary: 25,
    gender: 'male'
} // called an object, also refered to as json by programmers

console.log(employee)

// nested-object

var person = {
    name: 'squil',
    age: 22,
    gender: 'female',
    car: {
        type: 'BMW',
        Model: '2019',
        color: 'red',
        engine: {
            type: 'v8',
            model: '2019',
        }
    }
}
console.log(person)