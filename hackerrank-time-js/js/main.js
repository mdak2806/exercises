// Given a time in

// -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

//     Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

//     string s: a time in 

//     hour format

// Returns

//     string: the time in 

//     hour format

// Input Format

// A single string
// that represents a time in -hour clock format (i.e.: or

// ).

// Constraints

//     All input times are valid

function timeConversion(s) {


  let time = s.slice(0, -2);
  let period = s.slice(-2);
  let hours = parseInt(time.slice(0, 2));
  if (period === "PM" && hours !== 12) {
      hours += 12;
  } else if (period === "AM" && hours === 12) {
      hours = 0;
  }
  return `${hours.toString().padStart(2, "0")}${time.slice(2)}`;
// }
//   // Write your code here

//   // amTime = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11];
//   // pmTime = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

//   let amPm = s.slice(-2);
//   console.log(amPm);
//   let time = s.substring(0, 2);
//   console.log(time);
//   // let digital = 0;
  
//   if( time === "12"){
//     digital = time;
//   } else if( time === "24"){
//     digital = "00";
//   } else if(amPm == "PM" ){
//     let digital = parseInt(time, 2);
//     digital = digital + 12;
//     digital = digital.toString()
//   } 

//   console.log(digital);
//   console.log(time);
//   let newTime = s.replace(s[0], digital[0]).replace(s[1], digital[1]).substring(0, s.length -2);

//   console.log(newTime);
  



}

console.log(timeConversion("12:00:00PM"))







