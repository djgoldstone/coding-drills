// Set the interval


// ------------------------------------------------------------------
console.log("==================== Question 01 ====================");
// Create an interval that console logs "Question 01" every 5 seconds
var q1 = setInterval(function() {console.log("Question 1")}, 1000 * 5);


// ------------------------------------------------------------------
console.log("==================== Question 02 ====================");
// Create an interval that creates an alert that says "Question 02" every 10 seconds
var q2 = setInterval(function() {alert("Question 02")}, 1000 * 10);



// Clear the interval you made in this question
clearInterval(q2);



// ------------------------------------------------------------------
console.log("==================== Question 03 ====================");
// Create an interval that appends "3" to the div with an id of "question-03"
// every 2 seconds
var q3 = setInterval(function() {$("#question-03").append("3")}, 1000 * 2);



// ------------------------------------------------------------------
console.log("==================== Question 04 ====================");
// Create an interval that empties the "#question-03" element every 6 seconds
var q4 = setInterval(function() {$("#question-03").empty()}, 1000 * 6);


// ------------------------------------------------------------------
console.log("==================== Question 05 ====================");
// Create an interval that appends "5" to the div with an id of "question-05"
// every second and clear this interval after 5 seconds



// ------------------------------------------------------------------
console.log("==================== Question 06 ====================");
// Create an interval that appends "6" to the div with an id of "question-06"
// every second



// Create a timer to clear the interval after 6 seconds



// ------------------------------------------------------------------
console.log("==================== Question 07 ====================");
// create a timer to clear the interval from question 1 after 10 seconds



