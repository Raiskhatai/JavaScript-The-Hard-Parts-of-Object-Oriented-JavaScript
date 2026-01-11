// JavaScript me har object ke paas ek hidden reference hota hai jise hum [[Prototype]] bolte hain
// practical me isse hum __proto__ se access karte hain.

// Jab JS kisi object me property/method nahi milti, to wo uske prototype me dhundta hai,
// fir prototype ke prototype me…
// jab tak null na mil jaye.

function creating_objects(name, score) {
  let users = Object.create(user_function_store) // prototype;
  users.name = name;
  users.score = score;
  return users;
}

const user_function_store = {
  increament: function () {
    this.score++;
  },
};

let user1 = creating_objects("salman", 1);
let user2 = creating_objects("sharukh", 10);
let user3 = creating_objects("aamir", 1);

console.log(user1.name); // salman
console.log(user1.score); // 1
user1.increament();

console.log(user2.name); // sharukh
console.log(user2.score); // 10
user2.increament();
