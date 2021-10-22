const express = require("express");

const router = express.Router();
const app = express();
const port = 3000;

const homePage = require("./routes/index.js");
const aboutPage = require("./routes/about.js");

app.use(express.static("public"));

app.use("/", homePage);
app.use("/about", aboutPage);

app.listen(port, () => {
  console.log(`App Listening on Port ${port}`);
});
