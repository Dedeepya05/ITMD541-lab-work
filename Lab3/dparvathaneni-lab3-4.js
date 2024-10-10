// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Convert the input to a number if it's a string
    const celsiusValue = parseFloat(celsius);

    // Check if the value is a valid number
    if (isNaN(celsiusValue)) {
        console.log(`Invalid input: ${celsius}. Please provide a valid number.`);
        return;
    }

    // Apply the conversion formula
    const fahrenheit = (celsiusValue * 9 / 5) + 32;

    // Output the result with one decimal place
    console.log(`${celsiusValue.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test the function with three numerical values
const testValue1 = 15;      // New test value
const testValue2 = 30;      // New test value
const testValue3 = -5;      // New test value

celsiusToFahrenheit(testValue1);  // 15.0 Celsius = 59.0 Fahrenheit
celsiusToFahrenheit(testValue2);  // 30.0 Celsius = 86.0 Fahrenheit
celsiusToFahrenheit(testValue3);  // -5.0 Celsius = 23.0 Fahrenheit

// Test the function with string values
const testStringValue1 = "50";
const testStringValue2 = "15.5";

celsiusToFahrenheit(testStringValue1);  // 50.0 Celsius = 122.0 Fahrenheit
celsiusToFahrenheit(testStringValue2);  // 15.5 Celsius = 59.9 Fahrenheit

