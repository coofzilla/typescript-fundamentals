import 'reflect-metadata';

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    //last argument key is the key of the object you wish to access
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path)
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

// console.log(secret);

// const plane = {
//   color: 'red',
// };

// Reflect.defineMetadata('subcolor', 'dark-red', plane, 'color');

// const subcolor = Reflect.getMetadata('subcolor', plane, 'color');
// console.log(subcolor);

// //first arg 'note' key f/meta data, value is second 'hi there', associated w/plane
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// //metadata 'invisible' like ref to another hidden object
// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);
