// function add(a, b) {
//     return a + b;
// }

// console.log(add(3, 1));

// // spread operator is useful when we want to call a function with a set of variables 
// // that are stored in an array
// //var toAdd = [9, 5];
// //console.log(add(...toAdd));
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// use spread operator to combine arrays
// var groupA = ['Chris', 'Jen'];
// var groupB = ['Vesi'];

// var final = [...groupB, 3, ...groupA]
// console.log(final);

var person1 = ['Andrew', 25];
var person2 = ['Rally', 38];

function greeting(name, age) {
    return "Hi " + name + " you are " + age;
}

console.log(greeting(...person1));
console.log(greeting(...person2));

var names = ['Mike', 'Ben'];
var final = ['Rally', ...names];

final.forEach(function(name) {
    console.log("Hi " + name);
});