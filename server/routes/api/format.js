const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Media
router.get("/", async (req, res) => {
  const media = await loadMediaFormats();

  res.send(await media.find({}).toArray());
});

// Get Media Filtered
router.get("/filter/:limit", async (req, res) => {
  const formats = await loadMediaFormats();

  res.send(await formats.find({}).limit(parseInt(req.params.limit)).toArray());
});

// Add Media
router.post("/", async (req, res) => {
  const formats = await loadMediaFormats();
  const newFormat = req.body;
  await formats.insertOne(newFormat);

  res.status(201).send(newFormat);
});

// Delete Media
router.delete("/:id", async (req, res) => {
  const formats = await loadMediaFormats();
  await formats.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });

  res.status(200).send();
});

async function loadMediaFormats() {
  const client = await mongodb.MongoClient.connect("mongodb+srv://vueApp:Passwort1!@vueexpress.brqj2.mongodb.net", { useNewUrlParser: true, useUnifiedTopology: true });

  return client.db("VueExpress").collection("formats");
}

module.exports = router;

// Database VueExpress vueApp Passwort1!
