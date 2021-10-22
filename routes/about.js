const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("About this page");
});

router.get("/me", (req, res) => {
  res.send("About me");
});

module.exports = router;
