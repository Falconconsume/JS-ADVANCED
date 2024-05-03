const express = require("express");
const router = express.Router();
const CreateAbl = require("../abl/book/create-abl");
const GetAbl = require("../abl/book/get-abl");

router.get("/get", async (req, res, next) => {
  const { query } = req;
  try {
    await GetAbl(query, res);
  } catch (error) {
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  const { body } = req;
  try {
    await CreateAbl(body);
    res.status(201).send("Book created successfully");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
