
// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// The unique element is

// .

// Function Description

// Complete the lonelyinteger function in the editor below.

// lonelyinteger has the following parameter(s):

//     int a[n]: an array of integers

// Returns

//     int: the element that occurs only once

// Input Format

// The first line contains a single integer,
// , the number of integers in the array.
// The second line contains space-separated integers that describe the values in

// .

// Constraints

// It is guaranteed that
// is an odd number and that there is one unique element.
// , where .


function lonelyinteger(a){
   // create a for loop which you go through each element
   for(let i=0; i < a.length; i++){
    // if statement 
    // indexOf(a[i]) finds the cloest index of the value from the front
    // lastIndexOf(a[i]) finds the last index of the value
    // if they match then there is no duplicates
     if(a.indexOf(a[i]) === a.lastIndexOf(a[i])){
          return a[i]    
     }
 }   

}


lonelyinteger([1,2,3,4,3,2,1])



// Questions 2
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix

// is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  

// The left-to-right diagonal =
// . The right to left diagonal = . Their absolute difference is

// .

// Function description

// Complete the

// function in the editor below.

// diagonalDifference takes the following parameter:

//     int arr[n][m]: an array of integers

// Return

//     int: the absolute diagonal difference

// Input Format

// The first line contains a single integer,
// , the number of rows and columns in the square matrix .
// Each of the next lines describes a row, , and consists of space-separated integers .

function diagonalDifference(arr) {
  // Write your code here
  let left = 0;
  let right= 0;
  
  for(let i=0; i< arr.length; i++){
      let index = arr.indexOf(arr[i]);
      left = left + arr[i][index];
      right = right + arr[i][arr[i].length-1-index]
      // leftDiagonal.push(arr[i][index])
      // rightDiagonal.push(arr[i][arr[i].length-1-index])
  }
  
  let res = left - right
  if(res < 0){
      res = res*-1
  };
  return res;
  // console.log(arr);
  // console.log(leftDiagonal);
  // console.log(rightDiagonal);
  

}

// Question 3:

// Comparison Sorting
// Quicksort usually has a running time of , but is there an algorithm that can sort even faster? In general, this is not possible. Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. A comparison sort algorithm cannot beat (worst-case) running time, since

// represents the minimum number of comparisons needed to know where to place each element. For more details, you can see these notes (PDF).

// Alternative Sorting
// Another sorting method, the counting sort, does not require comparison. Instead, you create an integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in the original array, you increment the counter at that index. At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

// Example
// All of the values are in the range , so create an array of zeros,

// . The results of each iteration follow:

// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]

// The frequency array is
// . These values can be used to create the sorted array as well:

// .

// Note
// For this exercise, always return a frequency array with 100 elements. The example above shows only the first 4 elements, the remainder being zeros.

// Challenge
// Given a list of integers, count and return the number of times each value appears as an array of integers.

// Function Description

// Complete the countingSort function in the editor below.

// countingSort has the following parameter(s):

//     arr[n]: an array of integers


function countingSort(arr) {
  //function countingSort(arr) {
  // Write your code here
  let sortArr = [];
  for(let i = 0; i < arr.length; i++){
      if(i<100){
         sortArr[i] =0;
      }
  }
  for(let i =0; i < arr.length; i++){
      sortArr[arr[i]] ++;
  }
  return sortArr;
} 
