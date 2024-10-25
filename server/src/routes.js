const { Router } = require("express");
const WordsController = require("./controller/WordsController");

const route = Router();

route.post("/en/addWord", WordsController.AddListOfWordsController);
route.post("/en/searchWord", WordsController.SearchWord);

// route.post("/jp/addWord", CardController.addWord);
// route.post("/jp/searchWord", CardController.searchWord);

module.exports = route;
