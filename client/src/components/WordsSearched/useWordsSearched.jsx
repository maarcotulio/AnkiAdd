import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function useWordsSearched() {
  const [wordsSearched, setWordsSearched] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("words"));
    } catch {
      return [];
    }
  });

  useEffect(() => {
    function handleListStorage(event) {
      const { words } = event.detail;

      setWordsSearched(words);
    }

    document.addEventListener("addwordtolist", handleListStorage);
  }, []);

  function handleDeleteWord(wordToDelete) {
    const list = wordsSearched.filter((wordList) => wordToDelete !== wordList);
    localStorage.setItem("words", JSON.stringify(list));
    setWordsSearched(list);
  }

  function handleDeleteSearchedWords() {
    localStorage.removeItem("words");
    setWordsSearched([]);
  }

  return { wordsSearched, handleDeleteWord, handleDeleteSearchedWords };
}

useWordsSearched.propTypes = {
  wordsSearched: PropTypes.array.isRequired,
  handleDeleteWord: PropTypes.func.isRequired,
  handleDeleteSearchedWords: PropTypes.func.isRequired,
};
