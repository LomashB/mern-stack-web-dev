// The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function brewcoffee() {
  return new Promise((resolve) => {
    const delay = getRandomDelay(1000, 3000);

    setTimeout(() => {
      const confirmationMessage = `you coffee is brewed!!`;
      resolve(confirmationMessage);
    }, delay);
  });
}

brewcoffee().then((confirmation) => {
  console.log(confirmation);
});
