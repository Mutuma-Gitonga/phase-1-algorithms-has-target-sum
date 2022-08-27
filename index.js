function hastarget(array, target) {
  // First sort the array in ascending order  
  array.sort((a, b) => a - b) 
  
    // Declare the initial index pointer positions
    let left = 0;
    let right = array.length - 1;
  
    // While loop ensures left & right index pointers never cross
    while(left < right) {
      const runningSum = array[left] + array[right];
  
      if(runningSum === target) return true;
  
      else if (runningSum < target) {
        left += 1;
      } 
  
      else if (runningSum > target) {
        right -= 1;
      } 
    }
    return false;
}

  

/* 
  Time: O(nlog(n)) Space: O(1)
*/

/* 
  First sort the array in ascending order  

  Declare two index pointers representing extreme ends of the array

  Use while loop to ensure the left & right index pointers never cross as the algorithm moves them inward towards each other

    Sum the two index pointers

    If sum equals target, return TRUE 
    
    If sum is less than target, move left index inward to increase runningSum towards target

    If sum is greater than target, move right index inward to decrease runningSum towards target

  If a matching pair is absent, return FALSE

*/

/*
  I should code a function that receives two arguments - an integer array & a target integer, then returns true if there's a pair in the array that returns the target integer. Otherwise, it should return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hastarget([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: false");
  console.log("=>", hastarget([3, 8, 10, 11, 8], 15));

  console.log("Expecting: true");
  console.log("=>", hastarget([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hastarget([1, 2, 5], 4));
}

module.exports = hastarget;
