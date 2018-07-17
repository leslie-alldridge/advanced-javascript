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

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartRate(el){
//     if (el >= 18 && el <= 81){
//     return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);

//functions returning functions (first class functions)

// function interviewQuestion(job){
//     if (job === 'designer'){
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + ' ?');
//         }
//     } else {
//         return function(name){
//             console.log('Hello, ' + name + ' what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');

// interviewQuestion('teacher')('Mark');

//IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function () {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function (goodLuck){
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);


//closures

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2018 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }   
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementIceland(1990);
// retirementUS(1990);

// function interviewQuestion(job) {
//     var a = ', your questions are referring to: ';
//     return function(name) {
//         console.log(name + a + job);
//     }
// }

// var john = interviewQuestion('teacher');
// var mark = interviewQuestion('butcher');

// john('John');
// mark('Mark');


//bind call and apply!

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay) {
//         if (style === 'formal'){
//             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' 
//             + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         } else if (style === 'friendly') {
//             console.log('Sup everyone! I\'m ' 
//             + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a chill ' + timeOfDay + '.');
//         }
//     }
   
// };

// var emily = {
//     name: 'Emily',
//     age: 25,
//     job: 'designer'
// };

// john.presentation('formal', 'morning');

// john.presentation.call(emily, 'friendly', 'afternoon');  //borrowing johns method to use it on emily. 

// var johnFriendly = john.presentation.bind(john, 'friendly');

// johnFriendly('morning');
// johnFriendly('night');

// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');



// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2016 - el;
// }

// function isFullAge(limit, el){
//     return el >= limit;
// }

// var ages = arrayCalc(years, calculateAge);

// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

// console.log(ages);
// console.log(fullJapan);

// coding challenge console log quiz 
 
// function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
// }

// var questionArray = [
//     'What is my fave color?',
//     'How old am I?'
// ];

// var howOldAnswers = [
//     '13',
//     '15',
//     '26',
//     '28'
// ];

// function questionSelect () {
//     var selector = parseInt((Math.random() * 2));
//     console.log(questionArray[selector]);
//     writeAnswer(questionArray[selector], selector);

    
//         var userAnswer = prompt("Please enter your answer", name);
//         if (userAnswer == '26' && selector === 1){
//             console.log("correct answer" + userAnswer);
//         } else {
//             console.log("incorrect");
//         }
        
// }

// function writeAnswer(answer, selector){
//     console.log('The question is "' + selector + ': ' + answer + '" Please choose an answer.');
// }

// questionSelect();

//got basic functionality working but due to time constraints will continue to move on as bootcamp is looming. 

(function (){



function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++){
        console.log(i + ':' + this.answers[i]);
    }
}

Question.prototype.checkAnswer = 
function(ans, callback) {
    var sc;
    if (ans === this.correct) {
        console.log('Correct answer!');
        sc = callback(true);

    } else {
        console.log('Incorrect answer!');
        sc = callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
    console.log('Your current score is: ' + score);
    console.log('-------------------------------------------');
}

var q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No'], 0);

var q2 = new Question('What is the name of the bootcamp I will attend in August?', ['Bootcamp Blitz', 'DevAcademy', 'Dev Now NZ'], 1);

var q3 = new Question('What best desribes coding?', ['boring', 'repetitive', 'impossible', 'fun'], 3);

function score () {
    var sc = 0;
    return function(correct) {
        if(correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion() {

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = prompt('Please select the correct answer and view the console.');




if (answer !== 'exit'){
    questions[n].checkAnswer(parseInt(answer), keepScore);
    nextQuestion();
}
}
nextQuestion();
})();