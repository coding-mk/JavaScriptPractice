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

var a = document.getElementById("a");

var f = document.getElementById("frm");
var d = document.getElementById("div");
var p = document.getElementById("p");

f.addEventListener(
  "click",
  function (e) {
    console.log(e.target.id);
    if (e.target.id === "p") {
      console.log("form");
    }
  },
  false,
);

a.addEventListener(
  "click",
  function (e) {
    e.preventDefault();
    console.log("hi");
  },
  true,
);
d.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("div");
  },
  true,
);
p.addEventListener(
  "click",
  function (e) {
    e.preventDefault();

    console.log("p");
  },
  true,
);

var btn = document.getElementById("btn2");

btn.addEventListener("click", () => {
  if (btn.textContent === "OFF") {
    btn.textContent = "ON";
  } else {
    btn.textContent = "OFF";
  }
});

//event delegation
