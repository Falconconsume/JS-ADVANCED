const {Person} = require("./person");
const {Human} = require("./human");

class UuEE extends Person {
    constructor(owner, state = 'active', uid = '0-0') {
        if (!(owner instanceof Human)) {
            throw new Error('Owner is not an instance of Human');
        }
        super(state, uid);
        this.owner = owner;
    }

    sayHello(caller) {
        if (caller === this.owner) {
            return `Hello ${this.owner.getName()}`;
        } else {
            return 'No!';
        }
    }
}

module.exports = {UuEE};
