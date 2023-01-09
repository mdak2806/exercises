
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

function scrabbleScore (word){

  let letterScore = {

    'a': 1, 'b': 3, 'c': 3, 'd': 2, 'e': 1, 'f': 4, 'g': 2, 'h': 4, 'i': 1, 'j': 8, 'k': 5, 'l': 1, 'm': 3, 'n': 1, 'o': 1, 'p': 3, 'q': 10, 'r': 1, 's': 1, 't': 1, 'u': 1, 'v': 4, 'w': 4, 'y': 4, 'z': 10
  }

  let sum = 0;

  for (let i = 0; i < word.length; i++) {
    let key = word[i];
    // let sum += letterScore[key];
    sum += letterScore[key];
    console.log('score', letterScore[key]);
    console.log('sum', sum);
  }

}


scrabbleScore('tyez');

const scrabble = {  // main object
  ​
      letterScores : {
  ​
          // assign individual values to letters, to loop through later
          'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1,
          'd': 2, 'g': 2,
          'b': 3, 'c': 3, 'm': 3, 'p': 3,
          'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4,
          'k': 5,
          'j': 8, 'x': 8,
          'q': 10, 'z': 10
  ​
      },
  ​
      wordScore : function (word){
  ​
          // set initial state
          let score = 0;
  ​
          // loop through letters inside object
          for (let i = 0; i < word.length; i++) {
              
              // get a single letter
              const letter = word[i];
  ​
              // get value of single letter
              const letterValue = this.letterScores[letter];
  ​
              // add letter values
              score += letterValue; 
              
          }
          
          return score;
  ​
      },
  ​
  ​
  }
  ​
  console.log( scrabble.wordScore('cabbage')); // => 14 
  console.log( scrabble.wordScore('king')); // => 14 
  console.log( scrabble.wordScore('queen')); // => 14 
  console.log( scrabble.wordScore('captain')); // => 14 
  ​