const { Router } = require("express");
const CardController = require("./controller/CardController");

const route = Router();

route.post("/addWord", CardController.addWord);
route.post("/searchWord", CardController.searchWord);

module.exports = route;
