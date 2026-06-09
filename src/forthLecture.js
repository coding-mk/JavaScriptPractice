//import "./styles.css";

// __proto__
// prototype
// prototype is an object which is available in a constructor function(function)
// utilised for inhertience in js

// function Foo(y) {
//   this.y = y;
// }

// Foo.prototype.calculate = function (z) {
//   return this.x + this.y + z;
// };

// Foo.prototype.x = 10;
// var b = new Foo(10);

// console.log(b.calculate(20));
// console.log(b.x);

// b.x = 50;
// console.log(b.x);
// console.log(b);

//b.__proto__.x =

//event in javascript
// DOM - document object model
// Tree like structure
// so that you can access any html element in js
// var btn = document.getElementById("btn");

// console.log(btn);

// btn.addEventListener("click", function () {
//   console.log("button clicked");
// });

// html which processed into a tree like structure is know  as your dom

//bubbling and capturing

//useCapture byy default set to false
// if set to true it would cause capturing

// var a = document.getElementById("a");

// var f = document.getElementById("frm");
// var d = document.getElementById("div");
// var p = document.getElementById("p");

// f.addEventListener(
//   "click",
//   function (e) {
//     console.log(e.target.id);
//     if (e.target.id === "p") {
//       console.log("form");
//     }
//   },
//   false,
// );

// a.addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     console.log("hi");
//   },
//   true,
// );
// d.addEventListener(
//   "click",
//   function (e) {
//     e.stopPropagation();
//     console.log("div");
//   },
//   true,
// );
// p.addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();

//     console.log("p");
//   },
//   true,
// );

// var btn = document.getElementById("btn2");

// btn.addEventListener("click", () => {
//   if (btn.textContent === "OFF") {
//     btn.textContent = "ON";
//   } else {
//     btn.textContent = "OFF";
//   }
// });

//event delegation

// setTimeout

// setTimeout(function () {
//   console.log("log");
// }, 2000);

// function abc() {
//   console.log("1");
//   setTimeout(function () {
//     console.log("2");
//   }, 1000);
//   setTimeout(function () {
//     console.log("3");
//   }, 0);
//   console.log("4");
// }

// abc();

// event loop
// heap memory // var declarations would go into heap
// event stack / call stack
// anything in js if it has to be exeuted would go inside the call stack

// event queue
// a holding place for any event to be exeecuted which has come from the async cycle
// this would hold the call back function comming form setTimeout
// browser api
// anything that is async would be taken care by your browser api
// js is single threaded
// js is async as well

// when call stack is empty only then the function would be passed from queue to stack

// closure in js
// function makeWorker() {
//   var name = "Peter";

//   return function () {
//     console.log(name); // var name is trapped or closed inside this function
//   };
// }

// var name = "John";

// var work = makeWorker();

// work();
// closuer is retaining the scope of a variable even after a function has returned

// after a sunction has returned

// closure scope
// when a varibale because of a function being returned or being passed
// is closed that is known as closure scope

// two scopes of a varibale
// function makeCounter() {
//   var count = 0;
//   debugger;
//   return function () {
//     return count++; // count is trapped in closure scope
//   };
// }

// var counter = makeCounter();
// var counter2 = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter2());
// console.log(counter2());

// var obj = {
//   first: function () {
//     console.log("first");
//     return obj;
//   },
//   second: function () {
//     console.log("second");
//     return obj;
//   },
//   third: function () {
//     console.log("third");
//     return obj;
//   },
// };

// obj.first().second().third();

// var a = (function () {
//   var privatefunction = function () {
//     console.log("hello");
//   };
//   return {
//     publicfunction: function () {
//       privatefunction();
//     },
//   };
// })();

// a();
//console.log(a);
//console.log(NaN + NaN);

// var a = [2, 3, 4];

// a.push(5);
// console.log(a);

// //a.double();
// // 4,6,8

// Array.prototype.double = function () {
//   console.log(this);
//   return this;
// };
// a.double();

//let const and var
// let a = 10;

// let a = 20;

// let cannot be redeclared

// const can also not be redeclared
// let and const are block scoped
// var is function scoped
// const cannot be reinitialised

// hoisting doesn't happen like it happens in the case of var

// arrow functions
// arrow function cannot be used as constructor function
// the value of this in arrow functions is different from a normal function

// this -> current obj
// arrow
// this -> parent scope

// let a = [1, 2, 3];

// let b = [...a];

// let x = [1, 3, 4];
// let y = [2, 4, 5];

// let z = [...x, ...y];

//rest operator
//take the value of the params passed to it which are not yet assigned

function abc(a, b, ...rest) {
  console.log(rest);
}

abc(1, 2, 3, 4, 5, 6, 7, 8, 9);

abc(...[1, 2, 3, 4, 5, 6]);
//max();
console.log(Math.max(...[1, 2, 3]));

const obj1 = { foo: "bar", x: 42 };

const obj2 = { ...obj1 };
console.log(...obj1);
console.log(obj2);
