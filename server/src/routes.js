const { Router } = require("express");
const CardController = require("./controller/CardController");

const route = Router();

route.post("/", CardController.index);

module.exports = route;
