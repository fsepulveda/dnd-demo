const express = require("express");

const routes = express.Router();

routes.get("/", async (req, res, next) => {
  return res.status(200).json({
    tasks: [
      { id: 1, title: "one" },
      { id: 2, title: "two" },
      { id: 3, title: "three" }
    ]
  });
});

module.exports = routes;
