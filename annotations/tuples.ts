const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//tuples have specific ordering

//one way
// const pepsi: [string, boolean, number] = ['brown', true, 40];

//type alias way
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];
