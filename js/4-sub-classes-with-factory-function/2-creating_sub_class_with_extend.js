function user_creator(name, score) {
  let user = Object.create(user_obj);
  user.name = name;
  user.score = score;
  return user;
}

let user_obj = {
  increament: function () {
    this.score++;
  },
  login: function () {
    console.log(` ${this.name} is logined`);
  },
};

let user1 = user_creator("salman", 10);
console.log(user1.__proto__); // { increament: [Function: increament], login: [Function: login] }

class paid_user_creator extends user_creator {
  constructor(paid_name, paid_score, amount_balance) {
    super(paid_name, paid_score);
    this.amount_balance = amount_balance;
  }

  amount_increase() {
    this.amount_balance++;
  }
}

let paid_user_1 = new paid_user_creator("shahrukh", 1, 210000);
console.log(paid_user_1);
paid_user_1.amount_increase();
console.log(paid_user_1);
console.log(paid_user_1.__proto__);
