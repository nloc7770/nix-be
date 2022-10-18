const express = require("express");
const routes = express.Router();
const prefix = "/product-category";

routes.get("/", (req, res) => {
  try {
    return res.status(200).send(`Nix-be is running`);
  } catch (error) {
    return res.status(400).send(`error`);
  }
});

module.exports = {
  prefix,
  routes,
};
