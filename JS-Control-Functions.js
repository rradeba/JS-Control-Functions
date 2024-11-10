// Exploring Conditional Statements and Loops

// Task 1  
let isLoggedIn = null; 
let addItems = null; 

isLoggedIn = true; 

if (isLoggedIn) {
    addItems = true;
}

// Task 2
let allProducts = ['paint', 'wood', 'hardware', 'plants', 'tools', 'appliances', 'garden supplies'];
let cart = [];
let userCartItem = 'paint'; 

for (let i = 0; i < allProducts.length; i++) {
    console.log(allProducts[i]);
    if (userCartItem === allProducts[i]) {
        cart.push(allProducts[i]);
    }
}

// Task 3
let productCost = [3.99, 15.99, 12.99, 18.99, 10.99, 9.99];
let cartPrice = []; 
let totalPrice = 0; 

for (let ind = 0; ind < cart.length; ind++) {
    for (let i = 0; i < allProducts.length; i++) {
        if (cart[ind] === allProducts[i]) {
            cartPrice.push(productCost[i]);
        }
    }
}

for (let i = 0; i < cartPrice.length; i++) {
    totalPrice += cartPrice[i]; 
}

console.log('Cart Total: $' + totalPrice);

// Exploring Functions in JavaScript

// Task 1 
let balance = 0;

function deposit(depositAmount) {
    balance += depositAmount; 
    return balance;
}

// Test deposit function
deposit(100);
console.log('Balance after deposit: $' + balance);

// Task 2 
function withdrawal(withdrawalAmount) {
    if (balance >= withdrawalAmount) {
        balance -= withdrawalAmount; 
        return balance;
    } 
    console.log('Insufficient funds for withdrawal');
    return balance;
}

// Test withdrawal function
withdrawal(50);
console.log('Balance after withdrawal: $' + balance);

// Task 3
function checkBalance(balance) {
    console.log('Amount: $' + balance); 
}

// Test checkBalance function
checkBalance(balance);
