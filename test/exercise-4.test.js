"use strict"

const {Factory} = require("../src/lib/factory");

test("test7", () => {
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

  expect(myFactory.getWarehouse().createdCars.length).toEqual(14);

  expect(myFactory.getWarehouse().createdCars[0].getColor()).toEqual("blue");
  expect(myFactory.getWarehouse().createdCars[0].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[0].getWheels()).toEqual(4);


  expect(myFactory.getWarehouse().createdCars[1].getColor()).toEqual("red");
  expect(myFactory.getWarehouse().createdCars[1].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[1].getWheels()).toEqual(4);


  expect(myFactory.getWarehouse().createdCars[2].getColor()).toEqual("blue");
  expect(myFactory.getWarehouse().createdCars[2].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[2].getWheels()).toEqual(4);

  expect(myFactory.getWarehouse().createdCars[3].getColor()).toEqual("red");
  expect(myFactory.getWarehouse().createdCars[3].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[3].getWheels()).toEqual(4);

  expect(myFactory.getWarehouse().createdCars[4].getColor()).toEqual("blue");
  expect(myFactory.getWarehouse().createdCars[4].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[4].getWheels()).toEqual(4);

  expect(myFactory.getWarehouse().createdCars[5].getColor()).toEqual("red");
  expect(myFactory.getWarehouse().createdCars[5].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[5].getWheels()).toEqual(4);

  expect(myFactory.getWarehouse().createdCars[6].getColor()).toEqual("blue");
  expect(myFactory.getWarehouse().createdCars[6].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[6].getWheels()).toEqual(4);

  expect(myFactory.getWarehouse().createdCars[7].getColor()).toEqual("red");
  expect(myFactory.getWarehouse().createdCars[7].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[7].getWheels()).toEqual(4);

  expect(myFactory.getWarehouse().createdCars[8].getColor()).toEqual("blue");
  expect(myFactory.getWarehouse().createdCars[8].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[8].getWheels()).toEqual(4);

  expect(myFactory.getWarehouse().createdCars[9].getColor()).toEqual("red");
  expect(myFactory.getWarehouse().createdCars[9].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[9].getWheels()).toEqual(4);

  expect(myFactory.getWarehouse().createdCars[10].getColor()).toEqual("red");
  expect(myFactory.getWarehouse().createdCars[10].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[10].getWheels()).toEqual(4);

  expect(myFactory.getWarehouse().createdCars[11].getColor()).toEqual("red");
  expect(myFactory.getWarehouse().createdCars[11].getEngine()).toEqual(false);
  expect(myFactory.getWarehouse().createdCars[11].getWheels()).toEqual(4);
});