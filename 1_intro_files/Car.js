class Car {
    models = [];
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    addModel(model) {
        this.models.push(model);
    }
}

const car = new Car('bmw', 1992);
car.addModel('E82');
car.addModel('E3');

console.log(car);