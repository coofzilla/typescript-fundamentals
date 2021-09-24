const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

//helps with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// carMakers.push(100);

carMakers.map((car: string): string => {
  return car;
});
