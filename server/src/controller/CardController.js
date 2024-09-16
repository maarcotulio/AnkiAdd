const axios = require("axios");
const DefinitionController = require("./DictionaryControllers");
const {
  DECK_NAME,
  DECK_MODEL,
  ANKI_VERSION,
  URL_TO_THE_ANKICONNECT,
} = require("../../../config/server.js");

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

class CardController {
  async searchWord(req, res) {
    res.sendMessage = (status, input) => {
      return res.status(status).json({ msg: input });
    };

    const word = req.body?.input;
    if (!word || typeof word != "string") {
      return res.sendMessage(
        400,
        "Invalid input: word is missing or not a string"
      );
    }

    try {
      const { defs, example } = await DefinitionController(word);
      if (!defs) {
        return res.sendMessage(404, "Word not found in the dictionary");
      }
      if (defs === 503) {
        return res.sendMessage(503, "Dictionary API Service is Unavailable");
      }

      let enumeratedDefs = defs.map((item, index) => `${index + 1} - ${item}`);

      const card = createCard(example, `${enumeratedDefs.join("<br> ")}`);

      await axios.post(URL_TO_THE_ANKICONNECT, card, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Card Added");
      res.sendMessage(201, `${enumeratedDefs.join("\n")}`);
    } catch (err) {
      console.error("Error occurred while trying to send card:", err.message);

      res.sendMessage(
        503,
        "Anki is not open or there is a problem with AnkiConnect"
      );
    }
  }
}

module.exports = new CardController();
