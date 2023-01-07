const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
// const cors = require('cors')
const stratfordData = require("./data/Stratford.json");
const heathrowData = require("./data/Heathrow.json");
const harrowData = require("./data/Harrow.json");
const PORT = process.env.PORT || 5000;

app.use(express.json());
// app.use(cors())
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("/", (req, res) => {
  res.send(`/pharmacies returns pharmacies list for stratford \n 
            /colleges returns colleges list for stratford \n
            /doctors returns doctors list for stratford \n
            /hospitals returns hospitals list for stratford \n`);
});

app.get("/:city/pharmacies", (req, res) => {
  const cityName = req.params.city.toLowerCase();
  if (cityName === "stratford") {
    res.send(stratfordData.pharmacies);
  }
  if (cityName === "harrow") {
    res.send(harrowData.pharmacies);
  }
  if (cityName === "heathrow") {
    res.send(heathrowData.pharmacies);
  }
  res.status(404).send("Incorrect input");
});

app.get("/:city/hospitals", (req, res) => {
  const cityName = req.params.city.toLowerCase();
  if (cityName === "stratford") {
    res.send(stratfordData.hospitals);
  }
  if (cityName === "harrow") {
    res.send(harrowData.hospitals);
  }
  if (cityName === "heathrow") {
    res.send(heathrowData.hospitals);
  }
  res.status(404).send("Incorrect input");
});

app.get("/:city/doctors", (req, res) => {
  const cityName = req.params.city.toLowerCase();
  if (cityName === "stratford") {
    res.send(stratfordData.doctors);
  }
  if (cityName === "harrow") {
    res.send(harrowData.doctors);
  }
  if (cityName === "heathrow") {
    res.send(heathrowData.doctors);
  }
  res.status(404).send("Incorrect input");
});

app.get("/:city/colleges", (req, res) => {
  const cityName = req.params.city.toLowerCase();
  if (cityName === "stratford") {
    res.send(stratfordData.colleges);
  }
  if (cityName === "harrow") {
    res.send(harrowData.colleges);
  }
  if (cityName === "heathrow") {
    res.send(heathrowData.colleges);
  }
  res.status(404).send("Incorrect input");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
