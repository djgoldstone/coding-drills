// Odd ones out


// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------
function compare(num1, num2) {
  var even1 = (num1 % 2 === 0);
  var even2 = (num2 % 2 === 0);
  
  if (even1 && !even2) {
    return -1;
  } else if (!even1 && even2) {
    return 1;
  } else if (even1 && even2) {
    return (even1 - even2); 
  } else {
    return (even2 - even1)
  }
}





// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function upDownSort(arr) {
  // -------------------- Your Code Here --------------------
  // var oddArr = [];
  // var evenArr = [];
  // var sortedArr = [];
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] % 3 === 0) {
  //     oddArr.push(arr[i]);
  //     } else if (arr[i] % 2 === 0) {
  //       evenArr.push(arr[i]);
  //     }
  //   }
  //   for (var i = 0; i < oddArr.length; i++) {
  //     for (var x = 0; x < evenArr[i].length; x++) {
  //       if ()
  //     }
  //   }
  return arr.sort(compare);





  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
console.log(upDownSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [44, 32, 6, 88, 12, 28, 20, 8, 10, 24];
console.log("The following should be [6, 8, 10, 12, 20, 24, 28, 32, 44, 88]");
console.log(upDownSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [19, 27, 11, 23, 7, 63, 89, 15, 33, 3];
console.log("The following should be [89, 63, 33, 27, 23, 19, 15, 11, 7, 3]");
console.log(upDownSort(testArr3));