const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;

//es 2015
// const {
//   coords: { lat, lng },
// } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

// const { name: string } = profile;
// const sam = {
//   ...profile,
//   name: "sam",
//   age: 22,
//   coords: { lat: 1, lng: 2 },
//   setAge(age: number): void {
//     this.age = age;
//   },
// };

// console.log(sam);
export {};
