const express = require("express");

const routes = express.Router();

routes.get("/", async (req, res, next) => {
  return res.json({
    tasks: [
      { id: 1, title: "one" },
      { id: 2, title: "two" },
      { id: 3, title: "three" }
    ]
  });
});

module.exports = routes;
