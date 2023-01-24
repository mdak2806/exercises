// JavaScript revision

// Go through notes and re-write and run through examples

// Go through Week 1 exercises and complete for refresh


// Utilising typeof function

let y = 2;

console.log(typeof(y), y);


// Interpolation ${}

let name = 'Mohamad';

console.log(`My name is ${name}`);


// declaring function

function sayMyName(){
  console.log('Mo');
};

const sayMeName = function(){
  console.log('Mo 1')
};
sayMeName();

// arrow function syntax
const sayHeName = () => {
  console.log('Say Mo 2')
} 
sayHeName();


// one line
const bob2 = (a) => a + 100;
console.log(bob2(30));

// foo
const func = () => ({ foo: 1});
console.log(func);



// while loops

/// Use break to get out of a loop if satisfied

let z = 5;
let x = 1;

while( x < z){
  console.log(x);
  x ++ // increase x by 1

}

// while example 2

let n = 0;
let m = 0;

while (n < 3){
  n++;
  m += n;

}

console.log('m', m);

// const iterator = document.createNodeIterator(
//   document, NodeFilter.SHOW_COMMENT);
// let currentNode;
// while ((currentNode = iterator.nextNode()) !== null) {
//   console.log(currentNode.textContent.trim());
// }

const cars = ['BMW', 'Volvo', 'Saab', 'Ford' ];

let i = 0;
let text = "";

// this is a truthy statement as cars[i] exists runs, if not it stops
while (cars[i]){
  text += cars[i] + " ";
  i++
}

console.log(text);






// While and do block
// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

let result = '';
let l = 0;

do {
  l ++
  result = result + l;
} while (l < 5);

console.log(result);



// For loop examples with different syntax
//for (initialization; condition; afterthought)
//  statement

// The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

let str = '';
for( let i = 0; i < 9; i++){
  str = str + i;
}
console.log(str);

// Optional for expressions


// 1. No using the initialization block

// we declared o outside of the for loop then utilised it

let o = 0;
for( ; o < 3; o++){
  console.log(o)
}


// 2. The condition part is also optional. If you are omitting this expression, you must make sure to break the loop in the body in order to not create an infinite loop.

for( let p = 0; ; p++){
  console.log(p);
  if(p > 3) break;
}

// 3. Not using any conditions all outside

i = 0;
for(;;){
  if(i > 3) break;
  console.log(i);
  i++
}

// 4. Declaring a variable within the initialization block has important differences from declaring it in the upper scope, especially when creating a closure within the loop body. For example, for the code below:

for (let s = 0; s < 3; s++) {
  // delay print function used
  setTimeout(() => {
    console.log(s);
  }, 1000); // set the mili-seconds of the time out
}


// 5. You can create two counters that are updated simultaneously in a for loop using the comma operator. Multiple let and var declarations can also be joined with commas.

let arr = [1, 2, 3, 4, 5, 6];
for (let k = 0, r = arr.length - 1; k < r; k++, r--) {
  console.log(arr[k], arr[r]);
}

// 6. Looping through an array back wards

//The standard approach is to loop backward using a for-loop starting from the end of the array towards the beginning of the array.

let arr1 = [1, 2, 3, 4, 5];
 
// set e as array length
// set the condition of e cant pass
// move backwards by decreasing e value with --
for (let e = arr1.length - 1; e >= 0; e--) {
    console.log(arr[e]);
}

// For .... in looping for objects
// for (variable in object)
//  statement

//The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

// not property can be changed to any name

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

const obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Logs:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"



// for ... of 

//The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.

// for (variable of iterable)
//  statement

// Example 1

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// Example 2

const array2 = ['a', 'b', 'c'];

for (const val of array2){
  if (val === 'a'){
    // return val;
    console.log(val);
    break;
  }
  // return
}

// Example 3

const iterable = "boooi";

for (const value of iterable) {
  console.log(value);
}


// For each 

[ 'a', 'b', 'c' ].forEach( function (elem, index) { 
  console.log(index + '.' + elem);
});

// => 0. a
// => 1.b
// => 2.c


// Arrays:

const shoppingList = ['socks', 'pants', 'shoes', 't-shirt'];


// to set and re-assign elements in an array
shoppingList[0] = 'sockz';

console.log(shoppingList);

// add elements to the end of the array

shoppingList.push('adding to the back');

// adding elements to the front of the array

shoppingList.unshift('adding to the front');

console.log(shoppingList);


// Removing element from the end of the array
shoppingList.pop();

// removing element from the begining of the array
shoppingList.shift();

console.log(shoppingList);

// getting the index of an element
let tShirt = shoppingList.indexOf('t-shirt');
console.log(tShirt);


// checking if something is within the array through includes
console.log(shoppingList.includes('pants')); // true or 1
console.log(shoppingList.includes('does not include')); // false or -1


// modifying an array through Splice

// splice(start, deleteCount, item1)


// adds one element at index 1 does not delete as 0 (middle)
shoppingList.splice(1, 0, "banana");

// replaces 1 element at index 3 (deletes as 1 at middle)
shoppingList.splice(3, 1, "pen");

console.log(shoppingList);


// copying an array 
 const newList = shoppingList.splice();

 console.log(newList);


 // Creating an object

 const newObject = {};

 const newObj = new Object();

//  Accessing values
//  There are two ways to access the properties of an object:
//  Dot notation - syntax: object.propertyName
//  Square bracket notation - object["propertyName"]

const movie = {
  name: "Sam",
  director: "Mo",
  duration: 300
};

// Accessing below
movie.name = "Sam";
movie["name"] = "Sam";

// Reassigining values
movie.name = "New Name";
movie["name"] = "New Name 2";


// Adding new values
movie.country = "Oz";
movie["rating"] = "3 Stars";

// Deleting properties

delete movie.duration;

console.log(movie);

// Looping through objects

const pet = {
  name: "Spotty",
  owner: "Mo",
  age: 3
};


for (const key in pet){
  console.log(key,  pet[key]);
  if(pet[key].length > 3){
    console.log("pet key letter length is high:", pet[key])
  }
}

// getting the keys of an object
const petKeys = Object.keys(pet);
console.log("pet keys", petKeys);

// getting the values of the object
const petValues = Object.values(pet);
console.log("pet values ", petValues);


// Nested objects

const student = {
  name: "luke",
  age: 120,
  pet: "dan",
  address: {
    street: "Sydney rd",
    suburb: "Redfern"
  }
};

// Accessing nested objects
student.address // => { Street: "Sydney", Suburb: "Redfern"}
student.address.street // "Sydney rd"


// This intro

const explorer = {
  firstName: "Jak",
  lastName: "Cos",
  displayFullName: function (){
    const fullName = this.firstName + " " + this.lastName;
    return fullName
  },
  talkTo: function(name){
    const greeting = this.firstName + "says hi to " + name;
    return greeting 
  }
};

console.log(explorer.displayFullName()); // retunrs "Jak Cos"
console.log(explorer.talkTo("me")); // returns Jak Says hi to me..