/* 

 Question 6: Generating a Random Number in a Range


Write a function generateRandomNumber that generates a random number between a given minimum and maximum value (inclusive).

*/



function generateRandomNumber(min, max) {
    //Your code here
    return Math.round(Math.random()*(max-min+1))+min;
    ;
    

    
 }
 
 // Example usage
 console.log(generateRandomNumber(1, 10)); // Output: A random number between 1 and 10 (e.g., 7)
 console.log(generateRandomNumber(5, 15)); // Output: A random number between 5 and 15 (e.g., 12)
  