// Instructions

// Given an input text output it transposed.

// Roughly explained, the transpose of a matrix:

// ABC
// DEF

// is given by:

// AD
// BE
// CF

// Rows become columns and columns become rows. See https://en.wikipedia.org/wiki/Transpose.

// If the input has rows of different lengths, this is to be solved as follows:

//     Pad to the left with spaces.
//     Don't pad to the right.

// Therefore, transposing this matrix:

// ABC
// DE

// results in:

// AD
// BE
// C

// And transposing:

// AB
// DEF

// results in:

// AD
// BE
//  F

// In general, all characters from the input should also be present in the transposed output. That means that if a column in the input text contains only spaces on its bottom-most row(s), the corresponding output row should contain the spaces in its right-most column(s).


// below is a solution online, personal solution did not work.


const transpose = (matrix) => {

  console.log('matrix', matrix);

  // getting the length of the matrix
  if (matrix.length === 0) {

    return [];

  }

  // getting the longest length of the row
  // Math.max is a function that gives the largest input of the matrix
  // map method goes through and counts the length of each string
  let longestRowLength = Math.max(...matrix.map((el) => el.length));

  console.log('longest length of matrix row', longestRowLength)

  let transpose = [];

  let newRow = "";

  // for loop regarding longest length of word
  for (let col = 0; col < longestRowLength; col++) {

    // for loop for each word
    for (let row = 0; row < matrix.length; row++) {

      // pushes the letters into the string newRow

      newRow += matrix[row][col] || " ";

    }
    // push new row onto the empty array as one string

    transpose.push(newRow);

    // clear up the newRow for the next loop so empty again

    newRow = "";

  }

  // trim method removes the white space in a array

  transpose[transpose.length - 1] = transpose[transpose.length - 1].trimEnd();

  console.log(transpose);

};

transpose(['A13','A2']);