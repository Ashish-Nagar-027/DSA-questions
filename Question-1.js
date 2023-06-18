

/*
Question : Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. 

 Example 1:
Input: x = 4 Output: 2 Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8 Output: 2 Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
Constraints:

0 <= x <= 231 - 1

*/

//  solution : 

function mySqrt(x) {
    if (x === 0) return 0;
  
    let left = 1;
    let right = Math.floor(x / 2) + 1; // upper bound for the square root
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const square = mid * mid;
  
      if (square === x) {
        return mid; // exact square root found
      } else if (square < x) {
        left = mid + 1; // continue searching in the right half
      } else {
        right = mid - 1; // continue searching in the left half
      }
    }
  
    // When the loop ends, the right pointer will be smaller than the left pointer.
    // We can safely return right as the floor of the square root.
    return right;
  }
  


console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
