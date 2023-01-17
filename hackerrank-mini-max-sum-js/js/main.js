// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// The minimum sum is and the maximum sum is

// . The function prints

// 16 24

// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

//     arr: an array of 

// integers 


// const array1 = [1, 3, 2];

// console.log(Math.max(...array1));



function miniMaxSum(arr) {
  // Write your code here
  let maxNumber = Math.max(...arr);
  console.log(maxNumber);
  let minNumber = Math.min(...arr);
  console.log(minNumber);
  let maxArray = []
  let minArray = []

  for (let i = 0; i < arr.length; i++) {

    if( arr[i] != maxNumber && arr[i] != minNumber){
      maxArray.push(arr[i]);
      minArray.push(arr[i]);
    } else if( arr[i] === minNumber){
      minArray.push(arr[i]);
    } else{
      maxArray.push(arr[i]);
    }
    
  }

  // console.log(maxArray, minArray);
  let maxSum = maxArray.reduce((a, b) => a + b, 0);
  let minSum = minArray.reduce((a, b) => a + b, 0)
  console.log(maxSum, minSum)


}


miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([5, 5, 5, 5, 5]);

