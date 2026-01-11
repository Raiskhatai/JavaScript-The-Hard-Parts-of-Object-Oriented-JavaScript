// new : new keyword 3 kaam karta hey .
// 1 = object creation.
// 2 = __proto__    // yani object ko hidden method and propeties se connect karna.
// 3 = object ko return karna.

// function creating_objects(name, score) {
//   this.name = name;
//   this.score = score;
// }

// creating_objects.prototype.increament = function () {
//   this.score++;
// };
// creating_objects.prototype.login = function () {
//   console.log(this.name + " is login");
// };

// let user1 = new creating_objects("aamir", 1);
// console.log(user1.name);    // aamir
// console.log(user1.score);   // 1
// user1.increament();
// console.log(user1.score);   // 2
// user1.login();  // aamir is login

/*  */

function creating_objects(name, score) {
  this.name = name;
  this.score = score;
}

creating_objects.prototype.increament = function () {
  function add() {
    this.score++;
  }
  add();

  // const add = () => {
  //   this.score++;
  // };
  // add();
};
creating_objects.prototype.login = function () {
  console.log(this.name + " is login");
};

let user1 = new creating_objects("aamir", 1);
user1.increament();
console.log(user1.score) // agar arrow function ka use hua to 2 nhi to 1;


// jab bhi hum method call karte hey tab call ke left mey jo object hota hey wahi this ka name hota hey.
// user1.increament --> this = user1.
// kyu ki increament ke andar add function call hua or add function ke andar this.score++ hua usko pata nhi chala ki add() call hua but left mey koi object name nhi the. is liye undefined.
// iski jagah hum arrow function ka use kar sakte hey tab kaam ho jayega.
