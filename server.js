const express = require("express");
const bodyParser = require("body-parser");
const cookiesparser = require("cookie-parser");
const cors = require("cors");
const sensorRoutes = require("./routes/sensorRoutes");
const app = express();
const port = 5000;
app.use(express.static("public"));
app.use(express.static("templates"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", sensorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
