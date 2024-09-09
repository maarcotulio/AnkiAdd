const { defineWord } = require("wordreference");

async function getDefinition(term) {
  try {
    const definition = await defineWord(term, "English-Portuguese");
    return definition;
  } catch (error) {
    console.error("Error retrieving definition:", error);
    throw error;
  }
}

async function DefinitionController(word) {
  let defs = [];
  let translations;

  // Getting the definition
  const items = await getDefinition(word);
  items["sections"][0]["translations"].length !== 0
    ? (translations = items["sections"][0]["translations"])
    : (translations = undefined);

  if (!translations) {
    return undefined;
  }

  for (const item of translations) {
    defs.push(item.definition);
  }

  return defs;
}

module.exports = DefinitionController;
