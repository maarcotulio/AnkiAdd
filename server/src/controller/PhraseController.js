const Reverso = require("reverso-api");
const reverso = new Reverso();

async function PhraseController(word) {
  return new Promise((resolve, reject) => {
    reverso.getContext(word, "english", "portuguese", (err, response) => {
      if (err) {
        reject(new Error(err.message));
      } else {
        resolve(response["examples"][0]["source"]);
      }
    });
  });
}

module.exports = PhraseController;
