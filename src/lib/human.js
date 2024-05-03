const {Person} = require("./person");

class Human extends Person {
    constructor(name, age, state = 'active', uid = '0-0') {
        super(state, uid);
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    sayHello() {
        return `Hello from ${this.name}`;
    }
}

module.exports = {Human};
