//type annotation, if try diff type, will error
let apples: number = 5;
//if everything same line, type inference
let bananas = 6;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array; going to have something of array that contains strings
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function
//void is where what return
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//When to use annotations?
// 1) Function that returns the 'any' type
// AVOID variables with any types
//JSON.parase returns type any so we must use a type annotation
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); //{"x": 10, "y": 20};

// 2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
//this is kinda like an or statement
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numberAboveZero[i] > 0) {
    numberAboveZero = numbers[i];
    console.log(numberAboveZero);
  }
}
