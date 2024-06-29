// The Asynchronous Shopper:
// Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Asynchronous function to place an order
async function placeOrder(orderDetails) {
    return new Promise((resolve) => {
        // Generate a random delay between 1 and 3 seconds
        const delay = getRandomDelay(1000, 3000);
        
        // Simulate placing an order with a random delay
        setTimeout(() => {
            const confirmationMessage = `Order for ${orderDetails.item} placed successfully. Order ID: ${Date.now()}`;
            resolve(confirmationMessage);
        }, delay);
    });
}

// Example usage
placeOrder({ item: 'Laptop', quantity: 1 }).then((confirmation) => {
    console.log(confirmation);
    // Example output: "Order for Laptop placed successfully. Order ID: 1652364913871"
});
