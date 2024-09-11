// Change This according to your preferences in anki
// To check the version access the ankiconnect URL the standard is ( http://localhost:8765/ )
const deck_name = "Vocabs from Books";
const model_name = "Basic";
const anki_version = 6;

const URL_TO_THE_ANKICONNECT = "http://localhost:8765/";

// IGNORE
const axios = require("axios");
const DefinitionController = require("./DefinitionController");
const PhraseController = require("./PhraseController");

// Anki Model
let card = {
  action: "addNote",
  version: anki_version,
  params: {
    note: {
      deckName: deck_name,
      modelName: model_name,
      fields: {
        Front: "",
        Back: "",
      },
    },
  },
};

class CardController {
  async searchWord(req, res) {
    res.sendMessage = (status, message) => {
      return res.status(status).json({ msg: message });
    };

    try {
      const data = req.body;
      const word = data["input"];

      // Assync
      const [getDefinition, getPhrase] = await Promise.all([
        DefinitionController(word),
        PhraseController(word),
      ]);

      if (!getDefinition) {
        res.sendMessage(200, "Word was not founded");
        return console.log("Word was not founded");
      }

      card.params.note.fields.front = getPhrase || word;
      card.params.note.fields.Back = `Meaning of ${word} - ${getDefinition.join(
        ", "
      )}`;

      await axios.post(URL_TO_THE_ANKICONNECT, card, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Card Added");
      res.sendMessage(200, `The meaning of ${word} - ${getDefinition}`);
    } catch (err) {
      console.error("Anki not open or a problem with AnkiConnect");
      res.sendMessage(404, "Anki not open or a problem with AnkiConnect");
    }
  }

  async translatePhrase(req, res) {
    res.sendMessage = (status, message) => {
      return res.status(status).json({ msg: message });
    };

    // Building...
  }
}

module.exports = new CardController();
