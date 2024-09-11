const { Router } = require("express");
const CardController = require("./controller/CardController");

const route = Router();

route.post("/searchWord", CardController.searchWord);
route.post("/translatePhrase", CardController.translatePhrase);

module.exports = route;
