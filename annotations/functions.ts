//annotate every argument & annotate what function will return
//ts will analyze body of function
const add = (a: number, b: number): number => {
  return a + b;
};

//make sure to annotate what function will return
//if not situation like below can occur where ts thinks this is okay
//no return statement in body doesn't allow for inference, ts doesn't flag error
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log('hi', message);
};
logger('you');

//only use if expect to truly return nothing
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};
//destructuring
//ES2015
// const logWeather = ({ date, weather }) => {
//   console.log(date);
//   console.log(weather);
// };
//no destructuring
// const logWeather = (forecast: { date: Date; weather: string }): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// };
// logWeather(forecast);
//with destructuring
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(forecast);
