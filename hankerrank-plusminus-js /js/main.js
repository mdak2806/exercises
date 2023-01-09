// Plus Minus Counter
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with

// places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to
// are acceptable.


function plusMinus(arr){

  let arrayLength = arr.length;
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  

  for (let i = 0; i < arr.length; i++) {

    if( arr[i] < 0){
      negativeCount ++
    } else if( arr[i] > 0){
      positiveCount ++
    } else{
      zeroCount ++
    }

    
  }

  let positveFraction = (positiveCount/arrayLength).toFixed(6);
  let negativeFraction = (negativeCount/arrayLength).toFixed(6);
  let zeroFraction = (zeroCount/arrayLength).toFixed(6);

  console.log("positive count:", positiveCount);
  console.log('array length:', arrayLength);
  console.log("positive fraction:", positveFraction);

  console.log(positveFraction, negativeFraction, zeroFraction)
  return positveFraction, negativeFraction, zeroFraction

}



plusMinus([1, 1, 0, -1, 1]);
plusMinus([-4, 3, -9, 0, 4, 1]);

