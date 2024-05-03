"use strict"

const ValidationTypes = require("./lib/validation-types"); // create file validation-types.js
const { validate } = require("./lib/validation"); // create file validation.js

const schema = {
  name: ValidationTypes.string,
  age: ValidationTypes.number,
  extra: ValidationTypes.any,
};

const values = {
  name: "John",
  age: "",
  extra: false,
};

let result = validate(schema, values); //return array of invalid keys
console.log(result.length === 0 ? "valid" : "invalid keys: " + result.join(", "));
//invalid keys: age