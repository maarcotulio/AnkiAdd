const { Router } = require("express");
const CardController = require("./controller/CardController");

const route = Router();

route.post("/searchWord", CardController.searchWord);

module.exports = route;
