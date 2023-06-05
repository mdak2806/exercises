
// As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.

// To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers. The position of a certain card corresponds to the index in the array. That means position 0 refers to the first card, position 1 to the second card etc


// Task 1
// Retrieve a card from a stack

// To pick a card, return the card at index position from the given stack.

// const position = 2;
// getItem([1, 2, 4, 1], position);
// // => 4


function getItem(cards, position) {
  return cards[position]
  throw new Error('Implement the getItem function');
}

// Task 2
// Exchange a card in the stack

// Perform some sleight of hand and exchange the card at index position with the replacement card provided. Return the adjusted stack.

// const position = 2;
// const replacementCard = 6;
// setItem([1, 2, 4, 1], position, replacementCard);
// // => [1, 2, 6, 1]

function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
  throw new Error('Implement the setItem function');
}

// Task 3
// Insert a card at the top of the stack

// Make a card appear by inserting a new card at the top of the stack. Return the adjusted stack.

// const newCard = 8;
// insertItemAtTop([5, 9, 7, 1], newCard);
// => [5, 9, 7, 1, 8]

export function insertItemAtTop(cards, newCard) {
  cards.push(newCard)
  return cards
  throw new Error('Implement the insertItemAtTop function');
}

// Task 4
// Remove a card from the stack

// Make a card disappear by removing the card at the given position from the stack. Return the adjusted stack.

// const position = 2;
// removeItem([3, 2, 6, 4, 8], position);
// // => [3, 2, 4, 8]

export function removeItem(cards, position) {

  cards.splice(position, 1)
  return cards
  throw new Error('Implement the removeItem function');
}
