const LibraryDao = require("../../dao/library-dao");
const { getBookSchema } = require("../../schemas/book-schemas");
const Ajv = require("ajv").default;
const dao = new LibraryDao();

async function GetAbl(query, res) {
  const ajv = new Ajv();
  const valid = ajv.validate(getBookSchema, query);

  if (!valid) {
    throw new Error("Invalid query parameters");
  }

  const bookCode = query.code;
  if (!bookCode) {
    throw new Error("Missing book code");
  }

  try {
    const book = await dao.getBook(bookCode);
    if (!book) {
      throw new Error(`Book with code ${bookCode} not found`);
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
}

module.exports = GetAbl;
