// dot notation : we can set or get properties(object variables) or method(object function) using dot notation (.)

const user1 = {}; // create an empty object

user1.name = "shahrukh"; // assign properties(object variable) to that object
user1.score = 1;
user1.increament = function () {
  user1.score++;
};

console.log(user1.name);
console.log(user1.score);
user1.increament();
console.log(user1.score);
