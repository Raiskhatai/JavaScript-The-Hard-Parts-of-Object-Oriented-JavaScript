class creating_objects {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increament() {
    this.score++;
  }
  login() {
    console.log(this.name + " is logined already"); // the login and increament will automatically store in the prototype of creating objects
  }
}

let user2 = new creating_objects("aamir", 1);
console.log(user2);

/* under the hood yeh ese kaam karta hey  */
/*  // There is noooo change in the syntactic sugar(under the hood working.) between this function and the class. */

// function creating_objects(name, scope) {
//   this.name = name;
//   this.scope = scope;
// }

// creating_objects.prototype.increament = function () {
//   this.scope++;
// };
// creating_objects.prototype.login = function () {
//   console.log(this.name + " is logined");
// };

// const user1 = new creating_objects("salman", 1);
// console.log(user1);