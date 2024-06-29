//  The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(products) {
    let totalCost = 0;

    for (let product of products) {
        if (product && typeof product === 'object' && 'price' in product && 'quantity' in product) {
            totalCost += product.price * product.quantity;
        }
    }

    return totalCost;
}

const shoppingCart = [
    { name: 'Laptop', price: 999, quantity: 1 },
    { name: 'Smartphone', price: 699, quantity: 2 },
    { name: 'Tablet', price: 399, quantity: 1 }
];

const totalCost = calculateTotal(shoppingCart);
console.log('Total cost:', totalCost); 
