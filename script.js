// function constructors 

// var john = {
//     name: 'John',
//     yearOfBirth: 1992,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function () {
//     console.log(2016 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');

// john.calculateAge();

// var jane = new Person ('Jane', 1990, 'teacher');
// var mark = new Person ('mark', 1880, 'butcher');
// jane.calculateAge();
// mark.calculateAge();

// console.log(mark.lastName);
// console.log(jane.lastName);
// console.log(john.lastName);

// object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: {value: 'Jane'},
//     yearOfBirth: {value: 1969},
//     job: {value: 'designer'}
// });

//Primatives vs Objects

// var a = 23;
// var b = a;
// a = 46;
// console.log(a, b);

// var obj1 = {
//     name: 'john',
//     age: 20
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// //functions

// var age = 29;
// var obj = {
//     name: 'Leslie',
//     city: 'Wellington'
// };

// function change(a, b){
//     a = 30;
//     b.city = 'New Plymouth';
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

//passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];