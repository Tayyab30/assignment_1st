export{};

//  Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

var n: number[] = [];
var sum:number = 0;

for(let i = 1; i < 25; i++)  {
  if(i%2 == 0) {
    n.push(i);
    sum += i;
  }
}

console.log("Array of first even number: ", n);
console.log("\n----------------------------------------\n")
console.log("First even number sum: ", sum);


console.log("\n----------------------------------------\n")

// Implement a program that uses a for loop to iterate through
// an array of numbers and print only the even numbers.

var even_number: number[] = [];

for(let i = 1; i < 25; i++)  {
  if(i%2 == 0) {
    even_number.push(i);
  }
}

console.log("Array of first even number: ", n);
console.log("\n----------------------------------------\n")


// Implement a program that uses a loop to iterate through an array of
// numbers and remove all the even numbers from them and just leave the odd ones


var odd_number: number[] = [];

for(let i = 1; i < 25; i++)  {
  odd_number.push(i);
  if(i%2 == 0) {
    odd_number.splice(i, 1);
  }
}

console.log("Array of odd number: ", odd_number);
console.log("\n----------------------------------------\n")


// Write a program that defines a function to calculate the area of a circle.
// The function should take the radius as input and return the calculated area.

var circle_radius:number = 6
var circle_area:number = (22/7) * circle_radius**2;

console.log("Circle area: ", Math.ceil(circle_area));
console.log("\n----------------------------------------\n")

// Develop a program that reads a list of
// grades and uses the splice method to remove failing grades (below 50) from the array.

var std_grade_number:number[] = [ 89, 70, 30, 40, 20, 80, 90, 95, 33, 48 ];

for(let i = 0; i < std_grade_number.length; i++)  {
  if(std_grade_number[i] < 50) {
    std_grade_number.splice(i, 1);
    i--
  }
}


console.log("passed student grad numbers: ", std_grade_number);
console.log("\n----------------------------------------\n")

// Write a program that uses a function to find the largest element in an array of numbers.

console.log("Max grade Number:  ", Math.max(...std_grade_number))
console.log("\n----------------------------------------\n")
