// hoisting in javascript
// var a = 10;
// function abc() {
//   var a = 20;
//   console.log(a);
// }

// abc();

// var a = 10;
// function abc() {
//   console.log(a);
//   var a = 20;
// }

// abc();
//variable can be redeclared
//local scope has higher priorty over global scope

// hoisting comes into picture
// any variable that has been declared would be hoisted to the top of the function
// function abc() {
//   var a;
//   console.log(a);
//   a = 20;
// }

// abc();

// var b = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     b++;
//     var b = 3;
//     console.log(b);
//   }
//   inner();
// }
// outer();
// var b;
// console.log(b++);
// var b = "abc";
// console.log(+b);
// Not a number

// call bind and apply

// what does this refer to in js
// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu",
//   getPokemonName: function () {
//     var fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   },
// };

// var pokemonName = function (snack, hobby) {
//   console.log(this.getPokemonName() + " loves " + snack + " and " + hobby);
// };

// //pokemonName("sushi", "algos");

// pokemonName.call(pokemon, "sushi", "algos");

// pokemonName.apply(pokemon, ["sushi", "algos"]);

// call
// I would help you change the current calling object
// I would let you point the this to something else

// call(newReference, list of parameters to be passed)
// apply(newReference, [parameters]);

// it used to be difficult to convert comma separated values arrays

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Math.max.apply(null, a));

// bind is very much similer to call
// just that difference is that you would store the reference of the binded function for future access

// var pokemon = {
//   firstname: "Pika",
//   lastname: "Chu",
//   getPokemonName: function () {
//     var fullname = this.firstname + " " + this.lastname;
//     return fullname;
//   },
// };

// var pokemonName = function (snack, hobby) {
//   console.log(this.getPokemonName() + " loves " + snack + " and " + hobby);
// };

// // var pokemonNameNew = pokemonName.bind(pokemon, "sushi", "algos");
// var pokemonNameNew = pokemonName.bind(pokemon);
// pokemonNameNew("sushi", "algos");

// var monica = {
//   name: "Monica Geller",
//   total: 400,
//   deductMontlyFee: function (fee) {
//     this.total = this.total - fee;
//     return this.name + " remaining balance is " + this.total;
//   },
// };

// var rachel = { name: "Rachel Green", total: 1500 };

// var rachelDeductor = monica.deductMontlyFee.bind(rachel);

// console.log(rachelDeductor(200));
// var markDeductor = monica.deductMontlyFee.bind({
//   name: "Mark Bhau",
//   total: 2000,
// });
// console.log(markDeductor(500));

// console.log(monica.deductMontlyFee.call());

// self invoking function
// IIFE
// Imediately invoke function expression
// function expression

var a = function () {
  console.log("a");
};
a();

(function () {
  console.log("iife");
})();

// anything that is created is added into the window
// you are keeping the global namespace clean
// you could wrap the whole code of the file intot this iife
// you wouuld never polute the global space

// __proto__
// proto
var a = {
  x: 10,
  calculate: function (z) {
    return this.x + this.y + z;
  },
};

var b = {
  y: 20,
  __proto__: a,
};

var c = {
  y: 30,
  __proto__: b,
};

// if you referrence a value in an object
// it checks for the value in its own key value pairs
// then goes down the proto chain to look for the value if not found in its own keys
