//constructor Letter to display underlying character or a blank spaceholder (underscore)

class Letter {
    constructor(char) {
        this.char = char, //string value to store the underlying character for the letter
        this.is = false //boolean to store if the letter was guesses or not. 
    }


    //function to return the underlying character if the letter was guessed (true) or underscore. (false)
    showChar() {
        if (this.is) {
            return this.char  //the userGuess function will be called first, in case of the letter being there the boolean will be true. 
        } else {
            return " _ ";
        }
    }
    //function takes a character as an argument if the letter has been guessed (boolean to true if correct)

    userGuess(letter) {
        if (letter === this.char) {
            return this.is = true //if the letter guessed is in the word the boolean will be true
        } else {
            console.log(`Sorry "${letter}" isn't in the word`);
        }
    }
}

// EXAMPLE
// const example = new Letter ("v");
// example.userGuess("t");
// example.showChar();

// function hello (letter){
//     return "hello " + letter;
// }

// var prueba = hello("veronica");
// console.log(prueba)

module.exports = Letter;












