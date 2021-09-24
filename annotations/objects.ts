const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
console.log(age);

//es 2015
// const {
//   coords: { lat, lng },
// } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

// const { name: string } = profile;
