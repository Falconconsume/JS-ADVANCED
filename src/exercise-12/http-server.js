const express = require("express");
const bodyParser = require("body-parser");
const LibraryDao = require("./dao/library-dao");
const bookRoutes = require("./routes/bookRoutes");
const { LRUCache } = require("lru-cache");

const app = express();
const port = process.env.PORT || 3003;

const cache = new LRUCache({ max: 10 });
const dao = new LibraryDao(null, cache);

app.use(bodyParser.json(dao));

app.use("/book", bookRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
