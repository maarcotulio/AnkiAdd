const axios = require("axios");
const DefinitionController = require("./DefinitionController");
const PhraseController = require("./PhraseController");
const {
  DECK_NAME,
  DECK_MODEL,
  ANKI_VERSION,
  URL_TO_THE_ANKICONNECT,
} = require("../config");

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
    res.sendMessage = (stats, input) => {
      return res.status(stats).json({ msg: input });
    };

    try {
      const data = req.body;
      const word = data["input"];
      if (!word || typeof word != "string") {
        return res.sendMessage(400, "Invalid input: word is missing ");
      }

      const [getDefinition, getPhrase] = await Promise.all([
        DefinitionController(word),
        PhraseController(word),
      ]);

      if (!getDefinition) {
        res.sendMessage(200, "Word was not found");
        return console.log("Word was not found");
      }

      const card = createCard(
        getPhrase || word,
        `Meaning of ${word} - ${getDefinition.join(", ")}`
      );

      await axios.post(URL_TO_THE_ANKICONNECT, card, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Card Added");
      res.sendMessage(201, `The meaning of ${word} - ${getDefinition}`);
    } catch (err) {
      console.error("Error occurred:", err.message);
      res.sendMessage(503, "Anki is not open or a problem with AnkiConnect");
    }
  }

  async translatePhrase(req, res) {
    // Building...
  }
}

module.exports = new CardController();
