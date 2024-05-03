
const LibraryDao = require("../../dao/library-dao");
const { createBookSchema } = require("../../schemas/book-schemas");
const Ajv = require("ajv").default;
const dao = new LibraryDao();

async function CreateAbl(body) {
  const ajv = new Ajv();
  const valid = ajv.validate(createBookSchema, body);

  if (!valid) {
    throw new Error("Invalid book data");
  }

  const { code, name, author } = body;
  if (!code || !name || !author) {
    throw new Error("Missing required attributes");
  }

  const book = { code, name, author };

  try {
    await dao.createBook(book);
    res.status(201).send("Book created successfully");
  } catch (error) {
    if (error.message === "DUPLICATE_CODE") {
      res.status(400).send("Book with the same code already exists");
    } else {
      next(error);
    }
  }
}

module.exports = CreateAbl;
