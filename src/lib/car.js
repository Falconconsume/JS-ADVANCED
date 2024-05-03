"use strict";

class Car {
    constructor(color, wheels, engine) {
        this.color = color;
        this.wheels = wheels;
        this.engine = engine;
    }

    getColor() {
        return this.color;
    }

    getWheels() {
        return this.wheels;
    }

    getEngine() {
        return this.engine;
    }

    setEngine(_engine) {
        this.engine = _engine;
    }

    setColor(_color) {
        this.color = _color;
    }

    setWheels(_wheels) {
        this.wheels = _wheels;
    }
}

module.exports = {Car};
