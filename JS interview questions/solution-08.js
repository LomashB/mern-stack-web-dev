// Async Array Mapping:
// Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function multiplyByTwoAfterDelay(number, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = number * 2;
            console.log(`Result for ${number}: ${result}`);
            resolve(result);
        }, delay);
    });
}


async function asyncArrayMappingWithDelay(numbers) {
    const results = [];

    for (let number of numbers) {
        // Await the multiplication with delay for each number
        const result = await multiplyByTwoAfterDelay(number, 2000);
        results.push(result);
    }

    return results;
}


asyncArrayMappingWithDelay([1, 2, 3, 4, 5]).then(result => {
    console.log('Final result:', result); 
});
