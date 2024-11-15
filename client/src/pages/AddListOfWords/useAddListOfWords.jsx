import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useSearch from "../../hooks/useSearch";

export default function useAddListOfWords() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { AddToAnki, SaveWordToLocalStorage } = useSearch();
  useEffect(() => {
    async function AddAllWords() {
      if (Array.isArray(list) && list.length > 0) {
        setIsLoading(true);
        list.map((word) => {
          if (word) {
            SaveWordToLocalStorage(word);
          }
        });
        await AddToAnki(list, "en", "Check if the words were added");
        setIsLoading(false);
      }
    }
    AddAllWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  function handleSubmit(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const textInput = event.target.value;
      const lines = textInput.split("\n");
      setList(lines.map((line) => line.split(" ")).flat());
    }
  }
  return { isLoading, handleSubmit };
}

useAddListOfWords.prototype = {
  isLoading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
