const fs = require('fs').promises;

class BookStorage {
    async createBook(book) {
        try {
            let existingBooks = await this.readBooks();

            const isDuplicate = existingBooks.some(existingBook => existingBook.code === book.code);
            if (isDuplicate) {
                throw new Error("DUPLICATE_CODE");
            }

            existingBooks.push(book);

            await fs.writeFile("./books.json", JSON.stringify(existingBooks, null, 2), "utf8");
        } catch (error) {
            console.error("Error creating book:", error);
        }
    }

    async getBook(code) {
        try {
            const existingBooks = await this.readBooks();

            const foundBook = existingBooks.find(book => book.code === code);

            return foundBook;
        } catch (error) {
            console.error("Error getting book:", error);
        }
    }

    async readBooks() {
        try {
            const data = await fs.readFile("./books.json", "utf8");

            if (!data) {
                return [];
            }

            const books = JSON.parse(data);

            return books;
        } catch (error) {
            if (error.code === 'ENOENT') {
                return [];
            }
            throw error;
        }
    }

}

(async () => {
    const bookStorage = new BookStorage();

    await bookStorage.createBook({code: "02123", name: "Book1", author: "Author1"});
    await bookStorage.createBook({code: "321321", name: "Book2", author: "Author2"});

    const book = await bookStorage.getBook("02123");
    console.log(book);
})();