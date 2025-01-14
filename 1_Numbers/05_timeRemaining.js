/* 
 Question 5: Calculating the Time Remaining for a Sale

Write a function calculateTimeRemaining that calculates the remaining time between two timestamps in hours, minutes, and seconds.


*/

// JavaScript date and time is alsways calculated i the milliSeconds


function calculateTimeRemaining(startTime, endTime) {
    //your code here

    // convert string format to date and time format

    let start=new Date(startTime);
    let end=new Date(endTime);

    // lets find their diffrence
    let diffrence = end-start  // in milliseconds

    let totalSeconds = Math.floor(diffrence/1000);  // total number of seconds
    let hours = Math.floor(totalSeconds/3600);
    let min=Math.floor((totalSeconds % 3600)/60);
    let seconds=Math.floor(totalSeconds % 60);

    return `Hours: ${hours} , Min: ${min} , Sec: ${seconds}`;


  
  }
  
  // Example usage
  console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
  // Output: { hours: 359, minutes: 59, seconds: 59 }
  
  console.log(calculateTimeRemaining("2024-12-18T12:00:00Z", "2024-12-19T14:30:45Z"));
  // Output: { hours: 26, minutes: 30, seconds: 45 }
  