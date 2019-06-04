// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
// ================= code goes here ===========================
for (var i = arr.length - 1; i >= 0; i--) {
    for (var x = 1; x <= i; x++) {
        if (arr[x-1] < arr[x]) {
            var placeHolder = arr[x-1];
            arr[x-1] = arr[x];
            arr[x] = placeHolder; 
        }
    }
}
return arr;







// ============================================================
}

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);