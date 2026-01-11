// Object.create() empty object create karta hey .
// Object.create() ke argument mey null ya other object diya jata hey taki usse link create ho jaye.

const user3 = Object.create(null);
user3.name = "aamir";
user3.score = 1;
user3.increament = function () {
  user3.score++;
};

console.log(user3.name);
console.log(user3.score);
user3.increament();
console.log(user3.score);

/* in break ground of Object.create(null) // object.create() empty object banate hey or uske argument mey koi null ya other object dena jaruri yeh prototype hote hey hidden property or method of this object. background mey javascript ese create krata hey link us object ka hidden object se __proto__ link creation ka kaam karta hey. */
// user3.__proto__ = null;
// console.log(user3.__proto__);    // null
