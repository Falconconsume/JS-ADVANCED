class Person {
    static countOfPersons = 0;

    constructor(state = 'active', uid = '0-0') {
        this.state = state;
        this.uid = uid;
        Person.countOfPersons++;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        if (state === "active" || state === "inactive") {
            this.state = state;
        } else {
            throw new Error(`Invalid state: ${state}`);
        }
    }

    getUid() {
        return this.uid;
    }

    static getCountOfPersons() {
        return Person.countOfPersons;
    }
}

module.exports = {Person};
