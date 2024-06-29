// The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(numbers) {
  let total = 0;
  for (let number of numbers) {
    if (number < 0) {
      break;
    }
    total += number;
  }
  return total;
}

console.log(sumUntilNegative([1, 2, 3, 4, 32, -1, 11]));
