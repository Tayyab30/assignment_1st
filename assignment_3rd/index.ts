export{};

// Write a program that uses filter to remove all negative numbers from an array of numbers

var array_of_numbers:number[] = [ 89, -70, 30, -40, 20, -80, -90, 95, -33, 48 ];

var positive_number:number[] = array_of_numbers.filter((item)=> item > 0)
console.log("\n----------------------------------------\n")

console.log("array of positive numbers: ", positive_number);

console.log("\n----------------------------------------\n")


// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new
// array where each number is multiplied by 2.

var originalArray:number[] = [1, 2, 3, 4, 5];

var newArray:number[] = originalArray.map((number)=>(number * 2));

console.log("Original Array array of number", originalArray)
console.log("\n----------------------------------------\n")


console.log("Each array of number is multiplied by 2", newArray)
console.log("\n----------------------------------------\n")


// Given an array of strings ["apple", "banana", "cherry", "date", "grape"],
// use the filter method to create a new array containing only the fruits with more than 5 characters.

var fruits:string[] = ["apple", "banana", "cherry", "date", "grape"];

var newFruits:string[] = fruits.filter((item)=> item.length > 5);

console.log("Fruits with more than 5 characters.", newFruits)
console.log("\n----------------------------------------\n")


// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// use the map and filter methods together to create a new
// array containing the squares of even numbers.

var nums:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNumbers:number[] = nums.filter((number) => number % 2 === 0).map((number) => number * number);

console.log("Squares of even numbers : ",evenNumbers);
console.log("\n----------------------------------------\n")


// Given an array of temperatures in Celsius [0, 10, 20, 30, 40],
// use the map method to create a new array where each temperature
// is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

var celsiusTepm:number[] = [0, 10, 20, 30, 40];

function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}
var fahrenheitTemp = celsiusTepm.map((temp)=> (celsiusToFahrenheit(temp)));

console.log("Celsius Tempratures: ",celsiusTepm);
console.log("\n----------------------------------------\n");
console.log("Celsius coverted to Fahrenheit Tempratures: ",fahrenheitTemp)
console.log("\n----------------------------------------\n");


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods
// together to create a new array containing the doubled values of odd numbers.

var nums:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var doubleOddNumbers:number[] = nums.filter((number) => number % 2 !== 0).map((number) => number * 2);

console.log("Double of odd numbers : ",doubleOddNumbers);
console.log("\n----------------------------------------\n");

const names = ["Alice", "Bob", "Charlie", "David", "Emily"];

names.forEach((name) => {
  console.log(name + "!");
});
console.log("\n----------------------------------------\n");
