// Function to sort an array of people by age and return introduction strings
function introducePeople(peopleArray) {
    // Sort the array by age (youngest to oldest)
    const sortedPeople = peopleArray.sort((a, b) => a.age - b.age);

    // Create a new array of introduction strings
    return sortedPeople.map(person => `${person.name} is ${person.age} and from ${person.city}`);
}

// Test case 1: An array of 5 people
const peopleTest1 = [
    {name: 'Aarav', age: 23, city: 'Mumbai'},
    {name: 'Vihaan', age: 29, city: 'Bengaluru'},
    {name: 'Reva', age: 21, city: 'Delhi'},
    {name: 'Saanvi', age: 27, city: 'Hyderabad'},
    {name: 'Kabir', age: 34, city: 'Chennai'}
];

// Test case 2: Another array of 5 people from India
const peopleTest2 = [
    {name: 'Anaya', age: 19, city: 'Pune'},
    {name: 'Rohan', age: 32, city: 'Ahmedabad'},
    {name: 'Tara', age: 24, city: 'Kolkata'},
    {name: 'Dev', age: 28, city: 'Jaipur'},
    {name: 'Meera', age: 26, city: 'Gurgaon'}
];

// Output the sorted introductions for both test cases
console.log('Test Case 1:');
console.log(introducePeople(peopleTest1));

console.log('Test Case 2:');
console.log(introducePeople(peopleTest2));
