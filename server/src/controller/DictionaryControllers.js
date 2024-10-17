const axios = require("axios");
const dictionaryApi = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function DefinitionController(word) {
  try {
    const response = await axios.get(`${dictionaryApi + word}`);
    const data = response.data[0];

    const defsArr = data.meanings.flatMap((meaning) =>
      meaning.definitions.map(({ definition, example }) => {
        return { definition, example };
      })
    );

    let example = defsArr.find(({ example }) => example)?.example || word;

    example = example.replace(word, `<b>${word}</b>`);

    return {
      defs: defsArr
        .map(({ definition }) => definition)
        .map((item, index) => `${index + 1} - ${item}`),
      example,
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return { defs: undefined };
    }

    return 503;
  }
}

module.exports = DefinitionController;
