const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const media = require("./routes/api/media");

app.use("/api/media", media);

// Handle production
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  console.log("production === true");

  // Static folder
  app.use(express.static(__dirname + "/public/"));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
} else {
  console.log("production === false");
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
