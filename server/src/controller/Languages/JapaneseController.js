const axios = require("axios");
const DefinitionController = require("../DictionaryControllers.js");
const {
  DECK_NAME,
  DECK_MODEL,
  ANKI_VERSION,
  URL_TO_THE_ANKICONNECT,
} = require("../../../../config/server.js");

// Card Model
function createCard(front, back) {
  return {
    action: "addNote",
    version: ANKI_VERSION,
    params: {
      note: {
        deckName: DECK_NAME,
        modelName: DECK_MODEL,
        fields: {
          Front: front,
          Back: back,
        },
      },
    },
  };
}

class JapaneseController {
  async addWord(req, res) {}
  async searchWord(req, res) {}
}

module.exports = new JapaneseController();
