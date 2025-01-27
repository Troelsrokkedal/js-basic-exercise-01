`use strict`
// Ask the user to enter their birth year
let birthYear = prompt("Please enter your birth year:");

// Convert the user's input (a string) into a number
birthYear = parseInt(birthYear, 10);

// Get the current year using the Date object
const currentYear = new Date().getFullYear();

// Calculate the user's age by subtracting the birth year from the current year
const age = currentYear - birthYear;

// Log the calculated age to the console
console.log(`You are ${age} years old.`);