// Skills 

console.log('working');

// let sortArray = [];

// sort array function
const sortArrayAscending = (arr) => {

  // define a function to compare the numbers within the array
  function compareNumbers(a, b){
    return a - b
  };

  // sort the ascending order
  let sortArray = arr.sort(compareNumbers)

  console.log('sort array', sortArray);
  return sortArray;


}


sortArrayAscending([3, 1, 9, 8]);
sortArrayAscending([3, 1, 9, 11, 12, 14, 30, 2]);

// More efficent way to do this code:
// Sorting alograithams -> more efficent then the inbuilt function /larger number of integers
// quickSort



// Write a function recieves an array numbers

// returns the numbers in asending order


// [3, 1, 9, 8] => [1, 2, 8, 9]
// All positive numbers as big as you want
// sortArrayAscending

//AWS EXAM
// #include <bits/stdc++.h>

// using namespace std;


// /*
//  * Write the regular expression in the blank space below
//  */
// regex regularExpression("^([a-b]).*\1$|^[a-b]{1}$");
// int main()
// {
//     int query;
//     cin >> query;
    
//     vector<string> result(query, "False");
//     for (int i = 0; i < query; i++) {
//         string someString;
//         cin >> someString;
        
//         if (regex_match(someString, regularExpression)) {
//             result[i] = "True";
//         }
//     }
    
//     ofstream fileOut(getenv("OUTPUT_PATH"));
//     for (string res: result) {
//         fileOut << res << endl;
//     }
    
//     return 0;
// }

// Second question

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'performOperations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. 2D_INTEGER_ARRAY operations
 */

function performOperations(arr, operations) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const operationsRows = parseInt(readLine().trim(), 10);

    const operationsColumns = parseInt(readLine().trim(), 10);

    let operations = Array(operationsRows);

    for (let i = 0; i < operationsRows; i++) {
        operations[i] = readLine().replace(/\s+$/g, '').split(' ').map(operationsTemp => parseInt(operationsTemp, 10));
    }

    const result = performOperations(arr, operations);

    ws.write(result.join('\n') + '\n');

    ws.end();
}