const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Media
router.get("/", async (req, res) => {
  const media = await loadMediaCollection();

  res.send(await media.find({}).toArray());
});

// Get Media Limited
router.get("/limit/:limit", async (req, res) => {
  const media = await loadMediaCollection();

  res.send(await media.find({}).limit(parseInt(req.params.limit)).toArray());
});

// Add Media
router.post("/", async (req, res) => {
  const media = await loadMediaCollection();
  const newMedia = req.body;
  await media.insertOne(newMedia);

  res.status(201).send(newMedia);
});

// Delete Media
router.delete("/:id", async (req, res) => {
  const media = await loadMediaCollection();
  await media.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });

  res.status(200).send();
});

async function loadMediaCollection() {
  const client = await mongodb.MongoClient.connect("mongodb+srv://vueApp:Passwort1!@vueexpress.brqj2.mongodb.net", { useNewUrlParser: true, useUnifiedTopology: true });

  return client.db("VueExpress").collection("media");
}

module.exports = router;

// Database VueExpress vueApp Passwort1!
