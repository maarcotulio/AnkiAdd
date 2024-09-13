const Reverso = require("reverso-api");
const reverso = new Reverso();

async function PhraseController(word) {
  return new Promise((resolve, reject) => {
    reverso.getContext(word, "english", "portuguese", (err, response) => {
      if (err) {
        reject(new Error(err.message));
      } else {
        let phrase = response["examples"][0]["source"];
        phrase = phrase.replace(word, "<br>", word, "</br>");

        resolve(phrase);
      }
    });
  });
}

module.exports = PhraseController;
