function bankAccount(balance) {
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      balance -= amount;
      return balance;
    }
  };
}

const account = bankAccount(1000);

console.log(account.deposit(500));  // 1500
console.log(account.withdraw(200)); // 1300