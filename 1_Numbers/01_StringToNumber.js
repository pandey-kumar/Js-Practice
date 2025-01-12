// Question 1: Convert a string to a valid number

// Write a function to convert a string containing a number (e.g., "123") into an actual number. If it is not a valid number, return NaN.


function convertToNumber(str) {
    // Your code here
    if(isNaN(str)) return "NaN";
    else return Number(str);
 }
 
 console.log(convertToNumber("123")); // 123
 console.log(convertToNumber("abc")); // NaN

   

