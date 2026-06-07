import "./styles.css";

// __proto__
// prototype
// prototype is an object which is available in a constructor function(function)
// utilised for inhertience in js

function foo(y) {
  this.y = y;
}

Foo.prototype.calculate = function (z) {
  return this.x + this.y + z;
};
