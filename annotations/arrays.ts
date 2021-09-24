//use typed arrays when need to represent a collection of records with some arbitrary sort order
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

//flexible types
const importantDates: (Date | string)[] = [];

importantDates.push('2030-10-9');
importantDates.push(new Date());
