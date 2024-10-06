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
const testValue1 = 0;
const testValue2 = 25;
const testValue3 = -10;

celsiusToFahrenheit(testValue1);  // 0.0 Celsius = 32.0 Fahrenheit
celsiusToFahrenheit(testValue2);  // 25.0 Celsius = 77.0 Fahrenheit
celsiusToFahrenheit(testValue3);  // -10.0 Celsius = 14.0 Fahrenheit

// Test the function with string values
const testStringValue1 = "100";
const testStringValue2 = "37.5";

celsiusToFahrenheit(testStringValue1);  // 100.0 Celsius = 212.0 Fahrenheit
celsiusToFahrenheit(testStringValue2);  // 37.5 Celsius = 99.5 Fahrenheit
