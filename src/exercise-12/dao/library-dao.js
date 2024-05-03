const fs = require("fs").promises;
const path = require("path");

const DEFAULT_STORAGE_PATH = path.join(
  __dirname,
  "..",
  "storage",
  "books.json"
);

class LibraryDao {
  constructor(storagePath, cache) {
    this.bookStoragePath = storagePath || DEFAULT_STORAGE_PATH;
    this.cache = cache;
  }

  async createBook(book) {
    try {
      const existingBooks = await this.readBooks();
      const isDuplicate = this._isDuplicate(existingBooks, book.code);
      if (isDuplicate) {
        throw new Error("DUPLICATE_CODE");
      }
      existingBooks.push(book);
      await fs.writeFile(
        this.bookStoragePath,
        JSON.stringify(existingBooks, null, 2),
        "utf8"
      );
      this.updateCache(existingBooks);
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  }

  async getBook(code) {
    try {
      const bookFromCache = this.cache.get(code);
      if (bookFromCache) {
        return bookFromCache;
      }

      const existingBooks = await this.readBooks();
      const foundBook = existingBooks.find((book) => book.code === code);
      if (foundBook) {
        this.cache.set(code, foundBook);
      }
      return foundBook;
    } catch (error) {
      console.error("Error getting book:", error);
      throw error;
    }
  }

  async readBooks() {
    try {
      const data = await fs.readFile(this.bookStoragePath, "utf8");
      return data ? JSON.parse(data) : [];
    } catch (error) {
      if (error.code === "ENOENT") {
        return [];
      }
      console.error("Error reading books:", error);
      throw error;
    }
  }

  _isDuplicate(books, code) {
    return books.some((b) => b.code === code);
  }

  updateCache(books) {
    books.forEach((book) => {
      this.cache.set(book.code, book);
    });
  }
}

module.exports = LibraryDao;
