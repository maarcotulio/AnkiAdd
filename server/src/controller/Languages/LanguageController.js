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
  return JSON.stringify({
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
        tags: [],
      },
    },
  });
}

async function addWord(word) {
  try {
    const { defs, example } = await DefinitionController(word);
    if (!defs) {
      console.log(`Word ${word} not found in the dictionary`);
      return 404;
    }

    let enumeratedDefs = defs.map((item, index) => `${index + 1} - ${item}`);

    const card = createCard(
      example,
      `Meaning of ${word}:<br>${enumeratedDefs.join("<br> ")}`
    );

    console.log(card);

    await axios.post(URL_TO_THE_ANKICONNECT, card, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(`Word ${word} was added`);
    return 201;
  } catch (error) {
    console.error("Anki Connect is not working right", error);
    return 503;
  }
}

async function searchWord(word) {
  try {
    const { defs } = await DefinitionController(word);
    if (!defs) {
      return res.sendMessage(404, "Word not found in the dictionary");
    }
    if (defs === 503) {
      return res.sendMessage(503, "Dictionary API Service is Unavailable");
    }

    let enumeratedDefs = defs.map((item, index) => `${index + 1} - ${item}\n`);

    return enumeratedDefs;
  } catch (err) {
    console.error(
      "Error occurred while trying to check dictionary:",
      err.message
    );

    res.sendMessage(503, "Dictionary is offline");
  }
}

module.exports = [addWord, searchWord];
