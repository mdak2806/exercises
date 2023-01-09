// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

console.log('working');

const classify = (number) => {

  if(number < 1){
    throw new Error ('Classification is only possible for natural numbers.')
  }

  let arr = Array.from({length: number}, (_, i) => i + 1)
  //  [6, 5, 4, 3, 2, 1, 0]
  console.log(arr);
  
  // divisible 
  let divArray = [];
  let badArray = []

  // find values to divide by the number - go down 
  // numbers divisable by the total
  // divisable numbers summed = total
  for (let i = 0; i < arr.length; i++) {
    const div = number / arr[i];

    // if statement to check if full number
    if( (div - Math.floor(div)) !== 0 || div === number ){
      badArray.push(div);

    } else{
      // console.log('good div', div);
      divArray.push(div);
    }
    
  }

  console.log('divarr', divArray);


  let sum = divArray.reduce((a, b) => a + b);
  if (sum === number) {
    console.log('perfect')
    return 'perfect'; 
  } else if (sum > number) { 
    console.log('abundant');
    return 'abundant'; 
  } else { 
    console.log('def');
    return 'deficient';
  }
  
  
  
};

classify(28);















