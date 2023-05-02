'use strict'
// Coding Steps:

// All questions should be printed to your Browser’s console using console.log()

// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // declares ages variable and gives it an initial value
console.log(`1. ages: ${ages}`);
// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
//     Do not use numbers to reference the last element, find it programmatically.
//     ages[7] – ages[0] is not allowed!
const difference_first_and_last = a => a.slice(-1) - a[0]; // function written with arrow notation to get the difference between the first and last element of an array
console.log(`1a. Difference Between first and last in ages: ${difference_first_and_last(ages)}`);

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
let new_age = 26;
console.log(`1b. new_age: ${new_age}`);
ages.push(new_age); // appending new_age to ages
console.log(`1b. ages: ${ages}`);
console.log(`1b. Difference Between first and last in ages: ${difference_first_and_last(ages)}`); // calling difference_first_and_last on ages again to see if it still works as expected with the newly added element.

// 1c. Use a loop to iterate through the array and calculate the average age. 
// function that iterates through array and adds each element to sum and returns it.
function sum_with_loop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

// const sum = a => a.reduce((total, elem) => total + elem); // function that gets the sum of an array
const calculate_average = a => sum_with_loop(a) / a.length; // function that calculates the average of an array by using the sum function and the length of the array.
console.log(`1c. Ages Average: ${calculate_average(ages)}`);

// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; // declaring and initializing names
console.log(`2. names: ${names}`);
// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
// function that gets the lengths of each element in an array
function get_lengths(arr) {
    let total = []
    for (let i = 0; i < arr.length; i++)
        total.push(arr[i].length);
    return total;
}

// console.log(`2a. ${calculate_average(names.map(n => n.length))}`); //calculating the average of the length of each name
console.log(`2a. Average of name lengths: ${calculate_average(get_lengths(names))}`); //calculating the average of the length of each name
// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
// function that uses a loop that concatenates an array with spaces in between
function join_with_space(arr) {
    let total = "";
    for (let i = 0; i < arr.length; i++)
        total += `${arr[i]} `;
    total.trim(); // this might not be necessay but I added it just in case
    return total;
}
// console.log(`2a. ${names.reduce((total, n) => total + ` ${n}`)}`); // reducing names to a single string with spaces in between.
// console.log(`2a. ${names.join(" ")}`); // joining names to a single string with spaces in between.
console.log(`2a. ${join_with_space(names)}`);

// 3.  How do you access the last element of any array?
console.log(`3. arr.slice(-1) or arr[arr.length - 1]`);

// 4.  How do you access the first element of any array?
console.log(`4. arr[0]`);

// 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// let nameLengths = names.map(n => n.length);
let nameLengths = get_lengths(names); // get_lengths function uses a for loop and returns an array.
console.log(`5. nameLengths: ${nameLengths}`);

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log(`6. ${sum_with_loop(nameLengths)}`); // sum_with_loop uses a loop to calculate the sum of an array

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
const concate_n_times = (word, n) => new Array(n).fill(word).reduce((total, w) => total + w);
console.log(`7. ${concate_n_times("Hello", 3)}`);
console.assert(concate_n_times("Hello", 3) == "HelloHelloHello"); // assertion to check that the function is behaving as expected.

// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
const combine_firstName_lastName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(`8. ${combine_firstName_lastName("John", "Smith")}`);
console.assert(combine_firstName_lastName("John", "Smith") == "John Smith");

// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
const isSumGreaterThan100 = a => sum_with_loop(a) > 100; // function with arrow notation to determine if the sum of the passed in array is greater than 100.
console.log(`9. ${isSumGreaterThan100(new Array(100).fill(1))}`); // 100 1s equal to 100 when summed so should be false
console.assert(isSumGreaterThan100(new Array(100).fill(1)) == false);
console.log(`9. ${isSumGreaterThan100(new Array(101).fill(1))}`); // 1010 1s equal to 101 when summed so should be true
console.assert(isSumGreaterThan100(new Array(101).fill(1)) == true);

// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("10. const sum = a => a.reduce((total, elem) => total + elem);");
console.log("10. const calculate_average = a => sum(a) / a.length;");
console.log(`10. ${calculate_average([...new Array(101).keys()])}`); //[...new Array(101).keys()] should be [0, 1, ..., 100], an array that counts up from 0 to 100
console.assert(calculate_average([...new Array(101).keys()]) == 50); // average of 0..100 should be 50

// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
const isGreaterAverage = (arr1, arr2) => calculate_average(arr1) > calculate_average(arr2);
console.log(`11. const isGreaterAverage = (arr1, arr2) => calculate_average(arr1) > calculate_average(arr2);`);
console.assert(isGreaterAverage([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]) == false);
console.assert(isGreaterAverage([80, 85, 90], [1, 2, 3, 4, 5]) == true);

// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50;
console.log(`12. const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50;`);
console.log(`12. true, 11: ${willBuyDrink(true, 11)}`);
console.log(`12. false, 11: ${willBuyDrink(false, 11)}`);
console.log(`12. true, 10.50: ${willBuyDrink(true, 10.50)}`);

// 13.  Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

/* A function that sums an array of numbers using reduce. The problem is solves is improving code readablilty and reuse.*/
console.log(`13. const sum = a => a.reduce((total, elem) => total + elem);`);
const get_muliples_of_x = (arr, x) => arr.filter(n => n % x == 0);
/* A function that get the multiples of a given x in an array */
console.log(`const get_muliples_of_x = (arr, x) => arr.filter(n => n % x == 0);`);
console.log(get_muliples_of_x([...new Array(10).keys()], 3));