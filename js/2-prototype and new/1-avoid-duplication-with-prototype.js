function creating_object(name, score) {
  let users = Object.create(link_with_hidden_method);
  users.name = name;
  users.score = score;
  return users;
}

const link_with_hidden_method = {
  increament: function () {
    this.score++;
    // users.score++; yeh kaam nhi karega kyuki konse object ne call kiya kisko score ko increament karna hey isse pata nhi chalega is liye "this" key word ka use karenge
  },
  login: function () {
    console.log(`${this.name} is logined`);
  },
};

const user1 = creating_object("salman", 1);
const user2 = creating_object("shahrukh", 1);
const user3 = creating_object("aamir", 1);

user1.increament(); //{ name: 'salman', score: 1 }
console.log(user1); //{ name: 'salman', score: 2 }
console.log(user1); //shahrukh
user1.login(); //salman is logined

console.log(user2.name);

// user1.__proto__
// console.log(user1.__proto__); op : { increament: [Function: increament], login: [Function: login] }

// increament function us object mey nhi hey feer bhi score icrease ho gaya kyu yeh linked hey connect hey hidden object se jiska name humne diye hey "link_with_hidden_method" .
// pahle wale function jisse hum object create karte they usi mey icreament function banate they jisse har object ko same function milta the or memory west hoti thi
// isme hum sabhi object ko ek duse object se link connect karte hey jisse memory wast nhi hoti.connct karne ke liye __proto__ ka use hota hey yeh javascript auto matically karti hey job hum Object.create() ka use karte hey usme jis object se link create karna ho usko argument mey dete hey example:- Object.create(link_with_hidden_method).
