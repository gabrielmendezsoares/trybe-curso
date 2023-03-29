let balance = 0;

function addBalance (amount) {
  balance += amount;
}

function removeBalance (amount) {
  balance -= amount;
}

function multiplyBalance (amount) {
  balance *= amount;
}

function splitBalance (amount) {
  balance /= amount;
}

addBalance(15);
removeBalance(5);
multiplyBalance(10);
splitBalance(2);
console.log(balance);
