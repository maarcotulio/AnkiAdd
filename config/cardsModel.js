const {
  DECK_NAME,
  DECK_MODEL,
  ANKI_VERSION,
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
