const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/bookRoutes");
const authorRoutes = require("./routes/authorRoutes");

const app = express();

const corsOptions = {
  origin: ["http://localhost:3001", "https://your-frontend-domain.com"], // Allow specific origins
  methods: ["GET"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

//Enable CORS for all routes
app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", cors(corsOptions));

app.use(bodyParser.json());

//Routes
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
