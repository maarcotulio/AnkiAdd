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

class CardController {
  async index(request, response) {
    try {
      const data = request.body;
      const word = data["word"];
      let card;

      // Getting the definition
      let defs = await DefinitionController(word);
      if (!defs) {
        response.status(200).send(null);
        return console.log("Word was not founded");
      }

      // Getting the phrase
      let phrase = await PhraseController(word);
      if (!phrase) {
        response.status(200).json({ word, defs });

        card = {
          action: "addNote",
          version: anki_version,
          params: {
            note: {
              deckName: deck_name,
              modelName: model_name,
              fields: {
                Front: word,
                Back: "Meaning - " + defs.join(", "),
              },
            },
          },
        };

        console.log("Phrase was not founded. Yet the card will be Added");
      } else {
        card = {
          action: "addNote",
          version: anki_version,
          params: {
            note: {
              deckName: deck_name,
              modelName: model_name,
              fields: {
                Front: phrase,
                Back: "Meaning - " + defs.join(", "),
              },
            },
          },
        };
      }

      await axios.post(URL_TO_THE_ANKICONNECT, card, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Card Added");
      response.status(200).json({ word, defs });
    } catch (err) {
      console.error("Error processing request", err);
      response.sendStatus(500);
    }
  }
}

module.exports = new CardController();
