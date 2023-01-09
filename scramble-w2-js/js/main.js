
// Scrabble Score

// Write a function scrabbleScore() that, given a word, computes the scrabble score for that word.

// scrabbleScore('cabbage') // => 14

// Use the below to calculate the score. Convert the following letter and values into an appropriate object structure. There are several ways to do this, some easier than others!
// Letter Values:
// Letters 	Values
// A, E, I, O, U, L, N, R, S, T 	1
// D, G 	2
// B, C, M, P 	3
// F, H, V, W, Y 	4
// K 	5
// J, X 	8
// Q, Z 	10

// Goodluck!




// Instructions
// ​
// Given a number determine whether or not it is valid per the Luhn formula.
// ​
// The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.
// ​
// The task is to check if a given string is valid.
// Validating a Number
// ​
// Strings of length 1 or less are not valid. 

// Spaces are allowed in the input, but they should be stripped before checking. 

// All other non-digit characters are disallowed.
// Example 1: valid credit card number
// ​
// 4539 3195 0343 6467
// ​
// The first step of the Luhn algorithm is to double every second digit, starting from the right. We will be doubling
// ​
// 4_3_ 3_9_ 0_4_ 6_6_
// ​
// If doubling the number results in a number greater than 9 then subtract 9 from the product. The results of our doubling:
// ​
// 8569 6195 0383 3437
// ​
// Then sum all of the digits:
// ​
// 8+5+6+9+6+1+9+5+0+3+8+3+3+4+3+7 = 80
// ​
// If the sum is evenly divisible by 10, then the number is valid. This number is valid!
// Example 2: invalid credit card number
// ​
// 8273 1232 7352 0569
// ​
// Double the second digits, starting from the right
// ​
// 7253 2262 5312 0539
// ​
// Sum the digits
// ​
// 7+2+5+3+2+2+6+2+5+3+1+2+0+5+3+9 = 57
// ​
// 57 is not evenly divisible by 10, so this number is not valid.


// numbers 1 or less invalid
// remove space from the numbers
// any other characters are invalid

function valid (str){

  // remove non-numbers and spaces from string, then split string into an array
  let cardNum  = str.replace(/[^\d]/g, '').split('');
  console.log(cardNum );

  // store double numbers
  let doubleNum = [];
  //store single numbers
  let singleNum = [];

  // Strings of length 1 or less are not valid. 
  //  check if the card number is less than 1 length

  if( cardNum.length < 2){
    console.log('Invalid are number');
    return 
  } else{

    // if condition not satisfied, loop over valid card number
    for (let i = 0; i < cardNum.length; i++) {
      
      // it index card number is even
      if( i % 2){
        // push number onto single array
        let single = parseInt(cardNum[i])
        console.log(single)
        singleNum.push(single)
       
      } else{
        // if index number is odd, times by 2
        let double = cardNum[i]*2

        // need to check if the number times by 2 is greater then 9 then we need to minise by 9.
        if( double > 9 ){
          doubleNum.push(cardNum[i]*2 - 9)

        } else{
          doubleNum.push(cardNum[i]*2)
        }
      }
    }

  }

  console.log('single', singleNum)
  console.log('double', doubleNum)


  let sum = 0;

  for (const value of doubleNum){
    sum += value
  }
  for (const value of singleNum){
    sum += value
  }

  if( sum %  10 === 0){
    console.log('valid')
  } else{
    console.log('invalid')
  };

  
  console.log('double', doubleNum);
  console.log('single', singleNum);
  console.log(sum);


}


valid("4539 3195 0343 6497");




export const valid = (str) => {

  // check whether the string has letter or symbols, or whether it is one digit with spaces

  // removeSpaces removes any unwanted spaces on the card number
  const removeSpaces = str.replace(/\s/g, '');  
        // then check the length of the card number to ensure it is greater then 1
        // If less then 1 return error as number is invalid
  if (removeSpaces.length === 1 || isNaN(Number(removeSpaces))) return false;    

  // Take the card numbers and split into an array
  const reverseNum = str.split('')

                        .filter(char => char.match(/\d/)) // remove symbols
                        .map(char => Number(char)) // convert to Number
                        .reverse();

  let sum = 0;


  reverseNum.forEach((num, i) => {


    if (i % 2 === 1) num *= 2; // if index is odd

    (num > 9) ? sum += num - 9 : sum += num;

  });

  return sum % 10 === 0;

};

        

          