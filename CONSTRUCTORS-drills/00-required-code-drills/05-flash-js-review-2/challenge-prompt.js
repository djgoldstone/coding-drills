/*Write a function called "indexOfLetter".

Given a character and a string, "indexOfLetter" returns the first time the letter occurs 

Starter Code :*/
function indexOfLetter(char, str) {
  // code starts here
  var strIndex = str.indexOf(char);
  return strIndex;





  
  // code ends here
}

var output = indexOfLetter('a', 'Im a Software Engineer');
console.log(output); // --> 3

/*Write a function called "evenElementsOnly".

Given an object and a key, "evenElementsOnly" looks through the array of numbers
at that key and returns a new array containing only even elements from that array

Starter Code :*/
function evenElementsOnly(obj, key) {
  // code starts here
  var evenArr = [];
  for (key in obj) {
    for (var i = 0; i < obj[key].length; i++) {
      if (i % 2 === 0) {
        evenArr.push(obj[key][i]);
      }
    }
  }
  return evenArr;

  





    // code ends here
}

var obj = {
  key: [1000, 11, 51, 17]
};
var output = evenElementsOnly(obj, 'key');
console.log(output); // --> [1000, 51]
