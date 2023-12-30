// create an express
const express = require("express");
const bodyParser = require("body-parser"); // Import body-parser
const routes = require("./routes/authRoutes");
const app = express();

app.use(bodyParser.json()); // Gunakan body-parser untuk parsing JSON
app.use(bodyParser.urlencoded({ extended: true })); // Gunakan body-parser untuk parsing URL-encoded data

// Use the html
app.use(express.static("public"));



// create port
const PORT = 1337;

app.use("/api/v1", routes)

app.listen(PORT, () => {
  console.log("App is running at port", PORT);
});
