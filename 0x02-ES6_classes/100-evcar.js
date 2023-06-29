import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car(
      this.brand,
      this.motor,
      this.color,
    );
    return clonedCar;
  }
}

export default EVCar;
