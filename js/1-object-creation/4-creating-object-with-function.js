function creating_object(name, score) {
  let users = {};
  users.name = name;
  users.score = score;
  users.increament = function () {
    users.score++;
  };
  return users; // yeh return object return karti hey {}
}

let user1 = creating_object("salman", 1);
let user2 = creating_object("shahrukh", 1);
let user3 = creating_object("aamir", 1);

console.log(user1.name);    // salman
console.log(user2.name);    // shahrukh
console.log(user3.name);    // aamir

// this function is also called as factory function.