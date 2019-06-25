// Defining the card constructor function
//
// -------------------- Your Code Here --------------------
function Card(value) {
    if (value >= 1 && value <= 13) {
        this.value = value;
    } else {
        this.value = 1;
    }
    this.print = function() {
        var printValue = this.value < 10 ? "0" + this.value : this.value;
        console.log(`
        -----------
        |${printValue}       |
        |         |
        |         |
        |         |
        |         |
        |       ${printValue}|
        -----------
        `); 
    }
};




// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------
function Deck(cards = []) {
    this.cards = cards,
    this.count = function() {
        return this.cards.length
    },
    this.shuffle = function() {
        for (var i = this.card.length - 1; i >= 0; i--) {
            
        }
    }
}






// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------




// --------------------- End Code Area --------------------
