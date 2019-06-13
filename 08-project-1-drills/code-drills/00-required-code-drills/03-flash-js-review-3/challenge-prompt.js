console.log("////////////////////////////// QUESTION 3.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "averageNumbers".

  Given an array of numbers, "averageNumbers" returns their average. 
  
  *Bonus If given an empty array, it should return 0*

*/

function averageNumbers(nums) {
  // your code here
  var divisor = nums.length;
  var sum = 0;
  if (nums.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < nums.length; i++) {
      sum += nums[i];
    }
  }
  return sum/divisor;
  













  // code ends here
}

var input = [1, 2, 3, 4, 5];

var output = averageNumbers(input);
console.log(output); // --> 3 

console.log("////////////////////////////// QUESTION 3.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "keysCounter".

Given an object, "keysCounter" returns how many properties the given object has.

*/
function keysCounter(obj) {
  // your code here
  var counter = 0;
  for (keys in obj) {
    counter++;
  }
  return counter;

  




  // code ends here
}

var obj = {
  a: 1,
  b: 2,
  c: 3
};

var output = keysCounter(obj);
console.log(output); // ---> 3


