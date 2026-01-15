function User_creator(name, score) {
  this.name = name;
  this.score = score;
}

User_creator.prototype.increament = function () {
  this.score++;
};

let user1 = new User_creator("aamir", 1);
user1.increament();
console.log(user1);

function paidUser_creator(
  paidUser_name,
  paidUser_score,
  paidUser_amount_balance
) {
  User_creator.call(this, paidUser_name, paidUser_score);
  this.paidUser_amount_balance = paidUser_amount_balance;
}

paidUser_creator.prototype = Object.create(User_creator.prototype);

paidUser_creator.prototype.amount_increase = function () {
  this.paidUser_amount_balance++;
};

let paid_user_1 = new paidUser_creator("shaharukh", 10, 21001002102012);
console.log(paid_user_1);
paid_user_1.increament();
paid_user_1.amount_increase();
console.log(paid_user_1);
