const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const media = require("./routes/api/media");
const format = require("./routes/api/format");

app.use("/api/media", media);
app.use("/api/format", format);

// Handle production
console.log("NODE_ENV: " + process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
