// normal way to create a object .
// isme object agar se jayda hoto to create banane mey mushkil hoti hey.
// jabki sab kuch same hey bus data diffrent hey.

const user1 = {
  name: "salman",
  score: 1,
  increament: function () {
    user1.score++;
  },
};

const user2 = {
  name: "shahrukh",
  score: 1,
  increament: function () {
    user1.score++;
  },
};

console.log(user1.name); // salman
console.log(user1.score); // 1
user1.increament();
console.log(user1.score); // 2
