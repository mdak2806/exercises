// Word Counter

// ​ Given the following string: ​

// const story = "The dogs are happy. The dogs are running. The owners are drunk. The dogs are running on the road. The dogs are gone. Bye, dogs.";

// ​ ...print out a "word frequency" table which lists each word from the string, followed by how many times it appeared: ​

// The: 5
// dogs: 4
// dogs.: 1
// are: 5
// happy.: 1
// owners: 2
// the: 1
// drunk.: 1
// Bye,: 1
// // ...etc...

// ​ The order the words print out does not matter - you don't have to match the above output exactly. ​ ​
// BONUS

//     Notice that the example output has punctuation (i.e. the full stops) included as part of the word - this is because the easiest way to split up the string into words involves just looking for spaces. Change the code so that the string is split up into words that ignore the punctuation, i.e. "dogs" and "dogs." are treated as the same word "dogs" and "Bye," is treated as "Bye"
//     Ignore case as well, so "The" and "the" are both treated as the same word "the"
//     Ultra bonus: print out the words in order of frequency, from highest count to lowest (don't expect a solution for this) ​

// Hints:

//     You should use an object to store the words and their counts! Begin with an empty object
//     The first sub-problem is how to turn a string into an array of the individual words. Then you will need to loop through that array, counting each word and using the object to keep track of the running total.
//     The first time you see each word, it will not be a key of the object yet - so you need to add it, and initialise its count value. But once you have seen a word more than once, you just need to increment the existing count value.
//     Remember that there is a special looping structure just for looping over objects!
//     Maybe there is a built-in method to split the string up into words for you?


console.log('Working');

// words
const story = "The dogs are happy. The dogs are running. The owners are drunk. The dogs are running on the road. The dogs are gone. Bye, dogs.";


// split words and save in an array

let words = story.split(' ')

// store words and counts in object

let wordCount = {




}

// second method more simple to understand
let secondCount ={


}


// loop through the words and store in word count whilst counting number times it appears

for (let i = 0; i < words.length; i++) {
  // element store each word we are looping through
  const element = words[i];


  // wordCount[element] stores the element into the object wordCount
  // the element in the object will equal to one, otherwise increase by 1 if appear again
  wordCount[element] = (wordCount[element] + 1) || 1;
  
  // below does the same thing although initaly check differently
  if( element in secondCount){ // check to see if word is in object
    secondCount[element] +=1 ; // increment past if word is already in object
  } else{
    secondCount[element] = 1; // set instance if word is not yet in object
  }
}

console.log(wordCount);
console.log(secondCount);

// let lower = words.toLowerCase();
console.log('words:', lower);



