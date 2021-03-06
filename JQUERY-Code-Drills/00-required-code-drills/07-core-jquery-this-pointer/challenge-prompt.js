// `this` jQuery Business

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here
  var helloButton = $("<button>");
  helloButton.text("Hello");
  helloButton.attr("data", "Hello");

  var worldButton = $("<button>");
  worldButton.text("World");
  worldButton.attr("data", "World");

  var resetButton = $("<button>");
  resetButton.text("Reset");
  resetButton.attr("data", "Reset");

  var userButton = $("<button>");
  userButton.text("User");
  userButton.attr("id", "user-button");
  userButton.attr("data", "");

  $("#buttons-area").append(helloButton, worldButton, resetButton);
  $("#user-button-area").append(userButton);










  // End of your code area
}

// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished 
// loading before running the code.
$(function () {

  // call on the populateButtons functions we defined above.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  document.onkeyup = function(event) {
    // Your code goes here

    var userKey = $("#user-button").attr("data");
    userKey += event.key;
    $("#user-button").attr("data", userKey);







    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here
    if ($(this).attr("data") === "Hello" || $(this).attr("data") === "World") {
      $("#output").append($(this).attr("data"));
    } else if ($(this).attr("data") === "Reset") {
      $("#output").empty();
    } else {
      $("#output").text($(this).attr("data"));
      $(this).attr("data", "");
    }






    // End of your code area
  })

})
