// Write a function that receives a number and calculates the correct change using Australian currency values. The returned value should be an object with the count of each denomination currency needed to make up the change.
// Example:
// giveChange(426)
// returns: { 100: 4, 50: 0, 20: 1, 10: 0, 5: 1, 2: 0, 1: 1 }


const giveChange = (numbers) =>{

  const notes = [ 100, 50, 20, 10, 5, 2, 1];
  let returnedChange = {};
  let currentChange = numbers;

  for (let i = 0; i < numbers.length; i++) {
    
    const element = numbers[i];
      if(currentChange >= notes[i]){
        Math.floor(currentChange/notes[i])

      }

    for (let j = 0; j < array.length; j++) {
      const element = array[j];
      
    }
  }

}

currentChange = currentChange - (Math.floor(currengChange/notes[I] * notes[I])