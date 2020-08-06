const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Media
router.get("/", async (req, res) => {
  const media = await loadMediaCollection();
  res.send(await media.find({}).toArray());
});

// Get Single Media
router.get("/:id", async (req, res) => {
  const media = await loadMediaCollection();
  const data = await media.find({ _id: new mongodb.ObjectID(req.params.id) }).toArray();
  res.send(data);
});

// Get Media By Name
router.get("/filter/:name/:id", async (req, res) => {
  const media = await loadMediaCollection();
  res.send(await media.find({ name: req.params.name, _id: { $ne: new mongodb.ObjectID(req.params.id) } }).toArray());
});

// Get Media Filtered
router.get("/filter/:limit/:format/:fromDate/:toDate", async (req, res) => {
  const media = await loadMediaCollection();
  let query = {};
  if (req.params.format !== "Alle") {
    query = { format: `${req.params.format}`, releaseDate: { $gte: parseInt(req.params.fromDate), $lte: parseInt(req.params.toDate) } };
  } else {
    query = { releaseDate: { $gte: parseInt(req.params.fromDate), $lte: parseInt(req.params.toDate) } };
  }
  console.log("Get Media Filtered ", query);
  res.send(await media.find(query).limit(parseInt(req.params.limit)).toArray());
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
