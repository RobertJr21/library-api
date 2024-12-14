const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");

const app = express();

//Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

//Routes
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
