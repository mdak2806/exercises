// Given x string containing brackets [], braces {}, parentheses (), or any combination thereof, verify that any and all pairs are matched and nested correctly.

console.log('working');
const isPaired = (x) => {

  
    
    // open object string
    open = {
      '[' : ']',
      '(' : ')',
      '{' : '}'
    };

    closing = {
      ']' : ']',
      ')' : ')',
      '}' : '}',
    };

    let arr = [];
    // split string into array
    

    for (let i = 0; i < x.length; i++) {
      let element = x[i];
      if(open[element]){
        // pushing each opening onto array
        arr.push(element);
        } else if( closing[element]){
          // checking for a closed bracket, if so remove from array through pop out 
          if( open[arr.pop()] !== element) return false
        } 
      };
    
  // from the above the length of the arry should be 0 otherwise return false

  console.log(arr.length);
  return arr.length === 0;
  
};

isPaired('[sdff](');

// Given a string of digits, output all the contiguous substrings of length n in that string in the order that they appear.

// For example, the string "49142" has the following 3-digit series:

//     "491"
//     "914"
//     "142"

// And the following 4-digit series:

//     "4914"
//     "9142"

// And if you ask for a 6-digit series from a 5-digit string, you deserve whatever you get.

// Note that these series are only required to occupy adjacent positions in the input; the digits need not be numerically consecutive.

// const isPaired = (x) => {
// const Series  = () => {


  // constructor = (x) => {

  //   // throw error if series is empty
  //   if( series.length <= 0){
  //     throw new Error('Remove this statement and implement this function');
  //   } else if(series.length < this.slices.sliceLength){
  //     throw new Error('Slice length is less then series length');
  //   }


  //   // split the series into an array
  //   // let seriesArray = series.split('');
  //   // console.log(seriesArray);

  //   // define new series to push new numbers into

  // }



  slices = (sliceLength) => {
    let series = 43890;

    let digitSeries = [];
    console.log(digitSeries);

    // Use a for loop and the slice method, it needs to be conditional to stop once we reach the end of the arry.
     for (let i = 0; i < series.length; i++) {
      let element = digitSeries.push(series[i], sliceLength);
      console.log(element);
     }
    // throw new Error('Remove this statement and implement this function');
  };

  // constructor(43890),
  slices(3);
// };






















