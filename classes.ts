class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('honk');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

//use private to restrict access to methods
class Car extends Vehicle {
  private drive(): void {
    console.log('chugga');
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

// const car = new Car();
// car.startDrivingProcess();
