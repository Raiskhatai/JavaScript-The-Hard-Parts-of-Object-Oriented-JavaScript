// Object.setPrototypeOf() JavaScript ka ek built-in method hai
// jo ek object ka prototype dusre object se change kar deta hai.
// Object.setPrototypeOf(targetObject, prototypeObject)

function userCraetor(name, score) {
  const user = Object.create(user_obj); // Object.create empty object banata hey or uske andar __proto__link set kar deta hey.
  user.name = name;
  user.score = score;
  return user;
}

const user_obj = {
  increament: function () {
    this.score++;
  },
  login: function () {
    console.log(`${this.name} is login`);
  },
};

let user1 = userCraetor("will", 1);
console.log(user1); // { name: 'will', score: 1 }
user1.increament();
console.log(user1); // { name: 'will', score: 2 }

function paid_user_creator(paid_name, paid_score, amount_balance) {
  let paid_user = userCraetor(paid_name, paid_score);
  // paid user ka direct __proto__ linked usercreator se ho jata jisse kaam nhi hota to hume link chahiye the paiduser_obj se Object.setPrototypeOf() se link kar diye user_obj se.
  Object.setPrototypeOf(paid_user, paiduser_obj);
  paid_user.amount_balance = amount_balance;
  return paid_user;
}

const paiduser_obj = {
  amount_balance_increse: function () {
    this.amount_balance++;
  },
};

// paiduser_obj ka __proto__ link kar diya user_obj se ab paid user paiduser prototype se ke method access kar sakta hey or user_obj ke bhi.
Object.setPrototypeOf(paiduser_obj, user_obj);

let paid_user_1 = paid_user_creator("huge", 1, 1000);
console.log(paid_user_1); // { name: 'huge', score: 1, amount_balance: 1000 }
paid_user_1.increament();
paid_user_1.amount_balance_increse();
console.log(paid_user_1); // { name: 'huge', score: 2, amount_balance: 1001 }
paid_user_1.login();

// Object.setPrototypeOf() object ka prototype set karne ke liye use hota hey.
