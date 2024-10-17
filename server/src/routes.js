const { Router } = require("express");
const LanguageController = require("./controller/Languages/LanguageController");

const route = Router();

route.post("/en/addWord", LanguageController.addWord);
route.post("/en/searchWord", LanguageController.searchWord);

// route.post("/jp/addWord", CardController.addWord);
// route.post("/jp/searchWord", CardController.searchWord);

module.exports = route;
