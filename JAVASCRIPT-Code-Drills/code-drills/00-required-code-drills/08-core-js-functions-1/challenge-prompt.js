// define a function "fun" that console logs "Functions are FUN!"

var fun = () => {
    console.log("Functions are FUN!");
}

// before moving on, open index.html and see what console logs have been made.
// why doesn't "Functions are FUN! appear yet?"
/*

Your Answer here
Because the function was declared, but not called.  Therefore although the function is defined it was never executed.
*/


// define a function "thirtySeven" that console logs the sum of 18 and 19

var thirtySeven = () => {
    console.log(18 + 19);
}


// call two functions you've defined so far

fun();
thirtySeven();

// define a function "log" that takes in an argument and console logs that argument

var log = (x) => {
    console.log(x);
}

// define a function "hello" that calls on the "log" function to console log "Hello World"

var hello = () => {
    log("Hello World");
}


// call your "hello" function

hello();

// define a function "popUp" that creates an alert that says "This is an alert."

var popUp = () => {
    alert("This is an alert.");
}
// popUp();

// define a function "noPopUp" that creates an alert that says "Okay, you won't get a pop up."

var noPopUp = () => {
    alert("Okay, you won't get a pop up.")
}
// noPopUp();

// define a function "goodDay" that creates a confirm dialogue asking the user if they are having a nice day
// and uses your "log" function to display the response

var goodDay = () => {
    var response = confirm("Are you having a nice day?");
    log(response);
}


// call your "goodDay" function

// goodDay();

// define a function "userPopUp" that creates a confirm dialogue asking the user if they would like a popup
// if they answer yes, call upon your "popUp" function; otherwise, call upon your "noPopUp" function

var userPopUp = () => {
    var response = confirm("Would you like a pop up?"); 
        if (response === true) {
            popUp();
        } else {
            noPopUp();
        }
    
}

// call your "userPopUp" function

userPopUp();

// define a function "userName" that prompts the user for their name and then 
// uses your "log" function to display the response

var userName = () => {
    var user = prompt("What is your username?");
    log(user);
}

// call your "userName" function

userName();

// define a function "favoriteFruit" that prompts the user for their favorite fruit
// and the creates an alert that displays the response

var favoriteFruit = () => {
    var favFruit = prompt("What's your favorite fruit?");
    alert(favFruit);
}


// call your "favoriteFruit" function

favoriteFruit();

