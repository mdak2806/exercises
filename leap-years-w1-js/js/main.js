// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

console.log('working');

// Write a function that will take any given year and return a boolean value, whether it is a leap year or not. Remember that a leap year is:

//     Every year that is evenly divisible by 4
//     Except if it is evenly divisible by 100...
//     Unless it is also divisible by 400
//     Test Data... Make sure it is working!

// How to structure it - we want a custom function called isLeapYear which returns true or false.

// isLeapYear(1997) // ==> false
// isLeapYear(1996) // ==> true
// isLeapYear(1900) // ==> false
// isLeapYear(2000) // ==> true

isLeapYear = (year) => {

  return ( year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 )
  // {
  //   console.log('true');
  //   return true;
  // } else{
  //   console.log('false');
  //   return false;
  // }

}

console.log(isLeapYear(1997)) // ==> false
// console.log(isLeapYear(1996)) // ==> true
// console.log(isLeapYear(1900)) // ==> false
// console.log(isLeapYear(2000)) // ==> true


// Simon Says Warm up

// Create a function in JS that takes an input and returns Simon's response as follows:

//     Simon answers 'Sure.' if you ask him a question.
//     He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//     He says 'Fine. Be that way!' if you address him without actually saying anything.
//     He answers 'Whatever.' to anything else.
//     The input will not contain any numbers.

// Examples:

// simonSays("Hello, how are you?"); // => "Sure."
// simonSays("Hello, how are you!"); // => "Whatever"
// simonSays(""); // => "Fine. Be that way!"
// simonSays("HEYYYYY"); // => "Woah, chill out!"

// Bonus:

// Strike out the last dot point, the input may be a combination of numbers and other characters.

simonSays = (string) => {


    // typeof method to check if its a string or number

    if( typeof string === "string"){
        // trim method removes empty space and fix the === sign
        if( string.trim() === ""){
          console.log('Fine. Be that way');

          // check if all uppercase
        } else if( string === string.toUpperCase()){
          console.log("Woah, chill out!");
          
          // take out the last in the string and check if its a ?
          // add a trim just to make sure that a space after ? gets the correct answer
          // endsWith method is the same as string[string.length -1]
        } else if( string.trim().endsWith("?") ){
          console.log( 'Sure')

        } else{
          console.log('Whatever')
        }
    } else{
      console.log('Whatever');
    }
    


}

simonSays("Hello, how are you ? "); // => "Sure."

simonSays("Hello, how are you?"); // => "Sure."
simonSays("Hello, how are you!"); // => "Whatever"
simonSays(""); // => "Fine. Be that way!"
simonSays("HEYYYYY"); // => "Woah, chill out!"
simonSays(123) // whatever











