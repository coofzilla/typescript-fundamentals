import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('subcolor', 'dark-red', plane, 'color');

const subcolor = Reflect.getMetadata('subcolor', plane, 'color');
console.log(subcolor);

// //first arg 'note' key f/meta data, value is second 'hi there', associated w/plane
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// //metadata 'invisible' like ref to another hidden object
// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);
