"use strict";

const getBookSchema = {
  type: "object",
  properties: {
    code: { type: "string" },
  },
  required: ["code"],
};

const createBookSchema = {
  type: "object",
  properties: {
    code: { type: "string", minLength: 2 },
    name: { type: "string" },
    author: {
      type: "object",
      properties: {
        firstName: { type: "string" },
        lastName: { type: "string" },
      },
      required: ["firstName", "lastName"],
    },
  },
  required: ["code"],
};

module.exports = {
  getBookSchema,
  createBookSchema,
};
