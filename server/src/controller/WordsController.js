const [addWord, searchWord] = require("./Languages/LanguageController");

class WordsController {
  async AddListOfWordsController(req, res) {
    const words = req.body?.input;
    let status = 201;
    if (Array.isArray(words) && words.length >= 1) {
      status = await processWordsInBatches(words, 5);
    } else {
      status = await addWord(words);
    }

    return res.status(status).json({ msg: "Success" });
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

    const results = await Promise.all(
      batch.map((word) => {
        if (word) {
          return addWord(word);
        }
      })
    );

    if (results.includes(503)) {
      return 503;
    }

    await delay(2000);
  }

  return 201;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = new WordsController();
