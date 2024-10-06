// Function to calculate and log the min, max, and average of an array of numbers
function minMaxAverage(numbers) {
    if (numbers.length === 0) {
        console.log("The array is empty");
        return;
    }

    // Calculate the total number of elements
    const totalNumbers = numbers.length;

    // Find the minimum and maximum values in the array
    const minValue = Math.min(...numbers);
    const maxValue = Math.max(...numbers);

    // Calculate the sum and then the average of the array elements
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / totalNumbers;

    // Output the results to the console
    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average.toFixed(2)}`);
}

// Test the function with the given array
const testArray1 = [2, 5, 23, 6, 9, 4, 30, 1];
minMaxAverage(testArray1);

// Test the function with a different array
const testArray2 = [10, 20, 30, 40, 50];
minMaxAverage(testArray2);
