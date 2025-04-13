//Function

//function declaration
function a() {
  console.log("function called");
}
a();

//function expression
var b = function () {
  console.log("Called");
};

b();

var flag = false;
var number = 100;
var a;
if (flag == true) {
  a = function () {
    console.log("Do this.");
  };
} else {
  a = function () {
    console.log("Don't do this");
  };
}

a();
//console.log(a()); // undefine

if (number % 2 === 0) {
  a = function () {
    return number * 2;
  };
} else {
  a = function () {
    return number * 3;
  };
}
console.log(a());

function abc(a) {
  console.log(a());
}

abc(function () {
  return 5;
});

function abcd() {
  return function () {
    console.log("1");
  };
}

var a = abcd();
a();

//return json

function foo1() {
  return {
    bar: "hello",
  };
}

// function foo2(){
//   return {
//     bar: "hello";
//   }
// }

//objects

var obj = {
  a: 10,
  b: 20,
};

var obj1 = new Object();

var dog = {
  name: "Hush",
  breed: "Pom",
  bark: function () {
    console.log("woof! woof!");
  },
};
var key = "name";
console.log(dog.name);
console.log(dog["name"]);
console.log(dog[key]);
console.log(dog.bark);

function cat(name, gender) {
  this.name = name;
  this.gender = gender;
}

var d1 = new cat("mini", "female");
console.log(d1);
