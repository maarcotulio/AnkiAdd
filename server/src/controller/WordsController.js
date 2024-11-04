const [addWord, searchWord] = require("./Languages/LanguageController");

class WordsController {
  async AddListOfWordsController(req, res) {
    const words = req.body?.input;
    if (Array.isArray(words) && words.length >= 1) {
      await processWordsInBatches(words, 5);
    } else {
      await addWord(words);
    }

    return res.status(201).json({ msg: "Success" });
  }

  async SearchWord(req, res) {
    const word = req.body?.input;
    if (!word || typeof word != "string") {
      return res.sendMessage(
        400,
        "Invalid input: word is missing or not a string"
      );
    }

    const defs = await searchWord(word);

    return res.status(200).json({ msg: defs });
  }
}

async function processWordsInBatches(words, batchSize) {
  for (let i = 0; i < words.length; i += batchSize) {
    const batch = words.slice(i, i + batchSize);

    await Promise.all(
      batch.map((word) => {
        if (word) {
          addWord(word);
        }
      })
    );

    await delay(2000);
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = new WordsController();
