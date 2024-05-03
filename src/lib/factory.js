"use strict";

const {warehouse} = require('./warehouse');
const {Car} = require('./car');

class Factory {
    constructor(energy) {
        this.energy = energy;
        this.warehouse = warehouse;
    }

    getWarehouse() {
        return this.warehouse;
    }

    produceCar(color = "red", wheels = 4, engine = false) {
        if (this.energy < 2) return null;

        this.energy -= 2;
        const newCar = new Car(color, wheels, engine);
        this.warehouse.createdCars.push(newCar);
        return newCar;
    }

    addEnergyPower(value = 0) {
        this.energy += value;
    }

    changeCarColor(car, newColor = "blue") {
        if (this.energy < 1) return null;

        this.energy -= 1;
        car.setColor(newColor);
    }
}

module.exports = {Factory};
