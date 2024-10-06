// Function to count the number of vowels in a given string
function countVowels(inputString) {
    // Convert the input string to lowercase for easier matching
    const lowerCaseString = inputString.toLowerCase();

    // Define the vowels we're looking for
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Initialize a count to track the number of vowels
    let vowelCount = 0;

    // Loop through each character in the string and check if it's a vowel
    for (let char of lowerCaseString) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Return the number of vowels found
    return vowelCount;
}

// Test the function with three words and log the results
const testWord1 = "Hello";
console.log(`word: ${testWord1}, vowels: ${countVowels(testWord1)}`);

const testWord2 = "JavaScript";
console.log(`word: ${testWord2}, vowels: ${countVowels(testWord2)}`);

const testWord3 = "Programming";
console.log(`word: ${testWord3}, vowels: ${countVowels(testWord3)}`);
