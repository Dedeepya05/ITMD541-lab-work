// Function to sort an array of numbers from smallest to largest
function sortNumbers(numbers) {
    // Use the built-in sort method with a compare function to sort the numbers
    return numbers.sort((a, b) => a - b);
}

// Test the function with three arrays and log the original and sorted arrays

// Test case 1
const testArray1 = [5, 2, 9, 1, 5, 6];
console.log(`Original Array: [${testArray1}] Sorted Array: [${sortNumbers([...testArray1])}]`);

// Test case 2
const testArray2 = [12, 45, 7, 23, 19];
console.log(`Original Array: [${testArray2}] Sorted Array: [${sortNumbers([...testArray2])}]`);

// Test case 3
const testArray3 = [100, 20, 45, 60, 15];
console.log(`Original Array: [${testArray3}] Sorted Array: [${sortNumbers([...testArray3])}]`);
