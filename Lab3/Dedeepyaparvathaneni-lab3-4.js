// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Convert Celsius to Fahrenheit using the formula F = (C * 9/5) + 32
    const fahrenheit = (celsius * 9/5) + 32;
    // Return the Fahrenheit value rounded to one decimal place
    return fahrenheit.toFixed(1);
}

// Test the function with three test values and log the results

// Test case 1
const temp1 = 0;
console.log(`${temp1.toFixed(1)} Celsius = ${celsiusToFahrenheit(temp1)} Fahrenheit`);

// Test case 2
const temp2 = 25.5;
console.log(`${temp2.toFixed(1)} Celsius = ${celsiusToFahrenheit(temp2)} Fahrenheit`);

// Test case 3
const temp3 = -10;
console.log(`${temp3.toFixed(1)} Celsius = ${celsiusToFahrenheit(temp3)} Fahrenheit`);
