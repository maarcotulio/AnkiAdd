const axios = require("axios");
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

async function addCard(front, back) {
  const card = createCard(front, back);

  await axios.post(URL_TO_THE_ANKICONNECT, card, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

module.exports = addCard;
