class User_creator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increament() {
    this.score++;
  }
}

let user1 = new User_creator("salman", 10);
console.log(user1.__proto__); // { increament: [Function: increament], login: [Function: login] }

class paid_user_creator extends User_creator {
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
console.log(paid_user_1.__proto__.__proto__);
