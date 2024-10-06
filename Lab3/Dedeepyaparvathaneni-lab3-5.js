// Function to sort an array of people by age and return introduction strings
function introducePeople(peopleArray) {
    // Sort the array by age (youngest to oldest)
    const sortedPeople = peopleArray.sort((a, b) => a.age - b.age);

    // Create a new array of introduction strings
    return sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
}

// Test case 1: An array of 5 people
const peopleTest1 = [
    {name: 'Alice', age: 25, city: 'Chicago'},
    {name: 'Bob', age: 30, city: 'New York'},
    {name: 'Charlie', age: 22, city: 'San Francisco'},
    {name: 'Diana', age: 28, city: 'Los Angeles'},
    {name: 'Eve', age: 35, city: 'Miami'}
];

// Test case 2: Another array of 5 people
const peopleTest2 = [
    {name: 'Frank', age: 40, city: 'Seattle'},
    {name: 'Grace', age: 18, city: 'Boston'},
    {name: 'Heidi', age: 27, city: 'Austin'},
    {name: 'Ivan', age: 33, city: 'Denver'},
    {name: 'Judy', age: 21, city: 'Dallas'}
];

// Output the sorted introductions for both test cases
console.log('Test Case 1:');
console.log(introducePeople(peopleTest1));

console.log('Test Case 2:');
console.log(introducePeople(peopleTest2));
