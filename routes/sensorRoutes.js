const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/sensor-data", (req, res) => {
  const { intensity, timestamp } = req.body;

  if (typeof intensity !== "number" || !timestamp) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const query =
    "INSERT INTO sensor_data ( intensity, timestamp) VALUES ( ?, ?)";

  db.query(query, [intensity, timestamp], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Error saving data", error: err });
    }
    console.log(
      `Received data Intensity: ${intensity}, Timestamp: ${timestamp}`
    );
    res
      .status(201)
      .json({ message: "Data received successfully", uuid: uniqueId });
  });
});

router.get("/sensor-data", (req, res) => {
  const query = "SELECT * FROM sensor_data";
  db.query(query, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error fetching data", error: err });
    }
    res.json(results);
  });
});

module.exports = router;
