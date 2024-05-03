"use strict";

const { Person } = require("../src/lib/person");
const { Human } = require("../src/lib/human");
const { UuEE } = require("../src/lib/uuee");

test("test8", () => {
    let p1 = new Person();
    expect(p1.getState()).toEqual("active");
    p1.setState("inactive");
    expect(p1.getState()).toEqual("inactive");
    expect(() => p1.setState("bla")).toThrow();
    expect(p1.getUid()).toEqual("0-0");

    let p2 = new Person("active", "1-1");
    expect(p2.getUid()).toEqual("1-1");
    expect(Person.getCountOfPersons()).toEqual(2);

    let h1 = new Human("John", 15);
    expect(h1.getName()).toEqual("John");
    expect(h1.sayHello()).toEqual("Hello from John");
    expect(() => h1.setState("bla")).toThrow();

    let h2 = new Human("Jim", 11);
    let u1 = new UuEE(h1);
    expect(u1.sayHello(h1)).toEqual("Hello John");
    expect(u1.sayHello(h2)).toEqual("No!");
});
