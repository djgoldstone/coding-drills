

// document.ready makes sure the javascript doesn't load before the html page
$(document).ready(function () {
    $(document).on("click", ".letterA", function() {
        $("#text-div").append("A");
    });
    $(document).on("click", ".letterB", function() {
        $("#text-div").append("B");
    });
    $(document).on("click", ".letterC", function() {
        $("#text-div").append("C");
    })
    $(document).on("click", ".letterD", function() {
        $("#text-div").append("D");
    })
    $(document).on("click", ".letterE", function(){
        $("#text-div").append("E");
    })
    $(document).on("click", "letterF", function() {
        $("#text-div").append("F");
    })
    $(document).on("click", "letterG", function() {
        $("#text-div").append("G");
    })
    $(document).on("click", "letterH", function() {
        $("#text-div").append("H");
    })
    $(document).on("click", "letterI", function() {
        $("#text-div").append("I");
    })
    $(document).on("click", "letterJ", function() {
        $("#text-div").append("J");
    })

    // Write a series of on click listeners for each letter in the html
    // Whenever the user clicks on a letter, you want to append the corresponding letter to the `text-div` element
    // You will need to set up an on click listener for each letter
    //
    // Within the document, set an on click listener for the element with a class of "letterA"

    
        // When that element is clicked, append the string "A" to the `text-div` element

        
    // Within the document, set an on click listener for the element with a class of "letterB"

    
        // When that element is clicked, append the string "B" to the `text-div` element

        
    // Continue for the other letters




        
})
