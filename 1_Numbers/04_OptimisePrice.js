/* 

 Question 4: Optimizing Price Calculation with Bulk Discount

Write a function calculateBulkDiscount that calculates the total cost for bulk orders, applying a discount when the quantity exceeds a threshold.

*/


function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {

    const totalCost=price*quantity;

    if(quantity<discountThreshold) return totalCost;
    else{
        const rate=(100-discountRate)/100;
        return rate*totalCost;
    }

    
    
}

// Example usage
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600
 