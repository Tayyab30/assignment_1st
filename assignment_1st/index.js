"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified
// index in the array. Return the modified array.
var arr = ["Islamabad", "Ahmed Nager", "Ahmadpur East", "Ali Khan", "Alipur", "Arifwala", "Attock"];
function changeArray(arr, index, value) {
    arr.splice(index, 0, value);
    return arr;
}
var modified_array = changeArray(arr, 2, "Faisalabad");
console.log(modified_array);
console.log("\n----------------------------------------\n");
var sampleGoods = [
    { name: "Laptop", price: 999.99, quantity: 2 },
    { name: "Smartphone", price: 699.00, quantity: 3 },
    { name: "Headphones", price: 149.99, quantity: 1 },
    { name: "Keyboard", price: 49.95, quantity: 4 },
    { name: "Mouse", price: 19.99, quantity: 2 },
];
function addItem(index, value) {
    sampleGoods.splice(index, 0, value);
}
function removeItem(index) {
    sampleGoods.splice(index, 1);
}
function updateItem(index, quantity) {
    sampleGoods[index].quantity = quantity;
}
updateItem(1, 5);
console.log(sampleGoods);
console.log("\n----------------------------------------\n");
var singleValue2 = { name: "TV", price: 19.99, quantity: 2 };
addItem(1, singleValue2);
console.log(sampleGoods);
console.log("\n----------------------------------------\n");
removeItem(4);
console.log(sampleGoods);
console.log("\n----------------------------------------\n");
// Write a program that uses a while loop to print the first 25 integers.
let count = 1;
while (count <= 25) {
    console.log(count);
    count++;
}
console.log("\n----------------------------------------\n");
// Write a program that uses a while loop to print the first 10 even numbers.
let count2 = 1;
let evenCount = 0;
while (evenCount < 10) {
    if (count2 % 2 === 0) {
        console.log(count2);
        evenCount++;
    }
    count2++;
}
console.log("\n----------------------------------------\n");
// Create a function that takes a positive integer as
// parameter and uses a while loop to calculate and return
// the factorial of that number.
function calculateFactorial(n) {
    if (n < 0) {
        throw new Error("Input must be a positive integer.");
    }
    let factorial = 1;
    let currentNumber = n;
    while (currentNumber > 0) {
        factorial *= currentNumber;
        currentNumber--;
    }
    console.log(`The factorial of ${inputNumber} is ${factorial}`);
}
const inputNumber = 5;
calculateFactorial(inputNumber);
console.log("\n----------------------------------------\n");
// Write a program having an array of numbers if the number is negative
// it should remove the negative number from the array.
var arry_of_numbers = [1, 2, 4, -3, 6, -2, 6, -7];
var i = 0;
function removeNegativeNumber(arry_of_numbers) {
    while (i < arry_of_numbers.length) {
        if (arry_of_numbers[i] < 0) {
            arry_of_numbers.splice(i, 1);
        }
        i++;
    }
    console.log(arry_of_numbers);
}
removeNegativeNumber(arry_of_numbers);
console.log("\n----------------------------------------\n");
// Create a function that takes an array of numbers as parameter.
// Use a while loop to calculate and return the sum of all the numbers in the array.
function calculateSum(numbers) {
    let sum = 0;
    let index = 0;
    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }
    return sum;
}
const numbersArray = [1, 2, 3, 4, 5];
const sum = calculateSum(numbersArray);
console.log(`Sum of numbers: ${sum}`);
console.log("\n----------------------------------------\n");
// Implement a program that takes a list of temperatures in Celsius as input from the user.
// Convert each temperature to Fahrenheit using
// the formula F = (C * 9/5) + 32 and store the converted temperatures in an array.
// Use a while loop to perform the conversion for each temperature.
var celsius_temperatures = [25, 30, 15, 10];
var converted_temp_tp_fahrenheit = [];
var index = 0;
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
while (index < celsius_temperatures.length) {
    var converted_temp = celsiusToFahrenheit(celsius_temperatures[index]);
    converted_temp_tp_fahrenheit.push(converted_temp);
    index++;
}
console.log("Celsius Tempratures: ", celsius_temperatures);
console.log("\n----------------------------------------\n");
console.log("Celsius coverted to Fahrenheit Tempratures: ", converted_temp_tp_fahrenheit);
console.log("\n----------------------------------------\n");
