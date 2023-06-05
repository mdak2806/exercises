
// A boolean represents one of two values: true or false. Logical operators (!, &&, ||) are typically used with boolean values and they return a boolean value.


    // Fast attack: a fast attack can be made if the knight is sleeping, as it takes time for him to get his armor on, so he will be vulnerable.
    // Spy: the group can be spied upon if at least one of them is awake. Otherwise, spying is a waste of time.
    // Signal prisoner: the prisoner can be signalled using bird sounds if the prisoner is awake and the archer is sleeping, as archers are trained in bird signaling so they could intercept the message.
    // Free prisoner: Annalyn can try sneaking into the camp to free the prisoner. This is a risky thing to do and can only succeed in one of two ways:
    //     If Annalyn has her pet dog with her she can rescue the prisoner if the archer is asleep. The knight is scared of the dog and the archer will not have time to get ready before Annalyn and the prisoner can escape.
    //     If Annalyn does not have her dog then she and the prisoner must be very sneaky! Annalyn can free the prisoner if the prisoner is awake and the knight and archer are both sleeping, but if the prisoner is sleeping they can't be rescued: the prisoner would be startled by Annalyn's sudden appearance and wake up the knight and archer.


// Task 1
// Check if the 'Fast Attack' action is possible

// Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false:


function canExecuteFastAttack(knightIsAwake) {
    if (knightIsAwake === false){
        return true;
    } else{
        return false
    }
  
    throw new Error('Remove this line and implement the function');
}

// Task 2
// Check if the 'Spy' action is possible

// Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false:

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;
// canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);
// // => true
function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    if(archerIsAwake === true || knightIsAwake === true || prisonerIsAwake === true){
        return true
    } else{
        return false
    }
  throw new Error('Remove this line and implement the function');
}

// Task 3
// Check if the 'Signal Prisoner' action is possible

// Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false:

// const archerIsAwake = false;
// const prisonerIsAwake = true;
// canSignalPrisoner(archerIsAwake, prisonerIsAwake);
// // => true
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {

    if(archerIsAwake === false && prisonerIsAwake === true){
        return true;
    } else {
        return false
    }
  throw new Error('Remove this line and implement the function');
}

// Task 4
// Check if the 'Free Prisoner' action is possible
// How to debug

// When a test fails, a message is displayed describing what went wrong and for which input. You can also use the fact that any console output will be shown too. You can write to the console using:

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
    if(archerIsAwake === false && petDogIsPresent === true){
        return true;
    } else if( archerIsAwake === false && knightIsAwake === false && prisonerIsAwake === true && petDogIsPresent === false){
        return true;
    } else{
        return false;
    }

  throw new Error('Remove this line and implement the function');
}
