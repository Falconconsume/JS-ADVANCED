"use strict"

const Factory = require("./lib/factory"); // create file factory.js

let myFactory = new Factory(10);
let energyBoosts = [7, 3, 4, 5, 4];

let numberOfCars = 0;
while (numberOfCars < 14) {
  if (myFactory.produceCar() !== null) {
    numberOfCars += 1
  } else {
    if (energyBoosts.length > 0) {
      myFactory.addEnergyPower(energyBoosts.shift())
    } else {
      break
    }
  }
}

for (let i = 0; i < myFactory.getWarehouse().createdCars.length; i += 2) {
  let car = myFactory.getWarehouse().createdCars[i];
  if (myFactory.changeCarColor(car) === null) {
    if (energyBoosts.length > 0) {
      myFactory.addEnergyPower(energyBoosts.shift());
      i -= 2;
    } else {
      break
    }
  }
}

//myFactory.warehouse; //JSON.stringify(myFactory.warehouse, null, 2)