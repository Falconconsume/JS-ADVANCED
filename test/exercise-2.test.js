"use strict"

const {string, number, any} = require("../src/lib/validation-types");
const {validate} = require("../src/lib/validation");

test("test3", () => {
  expect(string("a")).toEqual(true);
  expect(string("")).toEqual(true);
  expect(string(2)).toEqual(false);
  expect(string(true)).toEqual(false);

  expect(number("a")).toEqual(false);
  expect(number("")).toEqual(false);
  expect(number(2)).toEqual(true);
  expect(number(true)).toEqual(false);

  expect(any("a")).toEqual(true);
  expect(any("")).toEqual(true);
  expect(any(2)).toEqual(true);
  expect(any(true)).toEqual(true);


  let schema = {
    name: string,
    age: number,
    extra: any,
  };

  let values = {
    name: "John",
    age: "",
    extra: false,
  };

  expect(validate(schema, values)).toEqual(["age"]);

  schema = {
    name: string,
    age: number,
    extra: string,
  };

  values = {
    name: 8,
    age: 222,
    extra: false,
  };

  expect(validate(schema, values)).toEqual(["name", "extra"])
});