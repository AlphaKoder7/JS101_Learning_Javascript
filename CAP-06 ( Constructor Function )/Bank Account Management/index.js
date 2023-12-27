function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.active = true; 

  this.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
      console.log("Invalid deposit amount.");
    }
  };

  this.withdraw = function(amount) {
    if (this.active && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
      console.log("Invalid withdrawal amount or insufficient balance.");
    }
  };

  this.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  };

  this.isActive = function() {
    return this.active;
  };
}

const account1 = new BankAccount(1, "John Doe", "Savings", 1000);
const account2 = new BankAccount(2, "Jane Doe", "Checking", 500);

account1.deposit(200);
account1.checkBalance();
account1.withdraw(100);
account1.checkBalance();

account2.deposit(300);
account2.checkBalance();
account2.withdraw(200);
account2.checkBalance();

console.log(`Account 1 active: ${account1.isActive()}`);
console.log(`Account 2 active: ${account2.isActive()}`);

function getTotalBalance(accounts) {
  let totalBalance = 0;
  for (const account of accounts) {
    if (account.isActive()) {
      totalBalance += account.balance;
    }
  }
  return totalBalance;
}

const accounts = [account1, account2];
const totalBalance = getTotalBalance(accounts);
console.log(`Total balance of all active accounts: ${totalBalance}`);
