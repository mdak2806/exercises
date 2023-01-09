// Instructions

// Write a function that returns the earned points in a single toss of a Darts game.

// Darts is a game where players throw darts to a target.

// In our particular instance of the game, the target rewards with 4 different amounts of points, depending on where the dart lands:

//     If the dart lands outside the target, player earns no points (0 points).
//     If the dart lands in the outer circle of the target, player earns 1 point.
//     If the dart lands in the middle circle of the target, player earns 5 points.
//     If the dart lands in the inner circle of the target, player earns 10 points.

// The outer circle has a radius of 10 units (This is equivalent to the total radius for the entire target), the middle circle a radius of 5 units, and the inner circle a radius of 1. Of course, they are all centered to the same point (That is, the circles are concentric) defined by the coordinates (0, 0).

// Write a function that given a point in the target (defined by its real cartesian coordinates x and y), returns the correct amount earned by a dart landing in that point.

// TODO: change it from array to normal values
// TODO: account for negative values

const score = (coordinates) => {

  // coordinates larger then radius 10 return 0 points
  let largestCoordinate = Math.max(...coordinates);
  console.log(largestCoordinate);


  switch (true)
  {
    case (largestCoordinate >10):
      // largestCoordinate > 10;
      console.log('0 points')
      break;
    case (largestCoordinate > 5 && largestCoordinate <= 10):
      console.log('1 point');
      break;
    case 2:
      largestCoordinate > 1 && largestCoordinate <= 5;
      console.log('5 points');
      break;
    case 3:
      largestCoordinate >= 0 && largestCoordinate <= 1;
      console.log('10 points');
      break;
    default:
      throw 'Invalid throw'

  }

};

score([11,10]);

