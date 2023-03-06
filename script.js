// Practice 1
var shoutIt = function (name) {
  var shout = `Hello ${name}, nice to meet you!`.toUpperCase();
  return `${shout}`;
};
console.log(shoutIt("Janet"));
console.log(shoutIt("Fred"));
console.log(shoutIt("Dandy"));

// Practice 2
var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return "Please enter a number.";
  } else if (typeof num2 !== "number") {
    return "Please enter a number.";
  }
  return num1 * num2;
};

//multiply(3, 5);
console.log(multiply(3, 5));
console.log(multiply("dog", "cat"));
console.log(multiply(69, 2));
