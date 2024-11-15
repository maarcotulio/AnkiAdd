import axios from "axios";
import SERVER from "../../../config/client";
import newWordAddedEvent from "../utils/newWordAddedEvent";
import toast from "../utils/toast";

export default function useSearch() {
  async function AddToAnki(word, language = "en", message = "Word was Added") {
    try {
      const response = await axios.post(`${SERVER}/${language}/addWord`, {
        input: word,
      });

      console.log(response);

      toast({ type: "success", text: message });
    } catch (err) {
      if (err.status === 503) {
        return toast({
          type: "danger",
          text: "Dictionary API or AnkiConnect aren't working",
        });
      } else if (err.status === 404) {
        return toast({
          type: "danger",
          text: "Word not found",
        });
      }

      toast({
        type: "danger",
        text: "Error occured tyring to search the word",
      });
    }
  }

  function SaveWordToLocalStorage(word) {
    const listWords = JSON.parse(localStorage.getItem("words")) || [];
    const updatedWords = [...listWords, word];
    localStorage.setItem("words", JSON.stringify(updatedWords));
    newWordAddedEvent(updatedWords);
  }

  async function GetWordDefinition(word, language = "en") {
    try {
      const response = await axios.post(`${SERVER}/${language}/searchWord`, {
        input: word,
      });
      return response.data.msg;
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return toast({
          type: "danger",
          text: "Word not found",
        });
      }

      toast({
        type: "danger",
        text: "Error occured tyring to search the word",
      });
    }
  }

  function deleteWordFromList(word) {
    const newList = JSON.parse(localStorage.getItem("words")).filter(
      (element) => element !== word
    );

    localStorage.setItem("words", JSON.stringify(newList));
  }

  function deleteAllWords() {
    localStorage.removeItem("words");
  }

  return {
    AddToAnki,
    GetWordDefinition,
    SaveWordToLocalStorage,
    deleteAllWords,
    deleteWordFromList,
  };
}
