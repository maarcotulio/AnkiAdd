import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../App";
import { Container, ClearBtn, WordContainer } from "./style";

import trash from "../../assets/images/icons/trash.svg";
import trashDarkMode from "../../assets/images/icons/trashDarkMode.svg";

const GLOBAL_PATH = "/search/";

const WordsSearched = () => {
  const { isLightMode } = useTheme();
  const trashImg = isLightMode ? trashDarkMode : trash;
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

  return (
    <>
      {wordsSearched?.length >= 1 && (
        <Container>
          <ClearBtn>
            <img
              src={trashImg}
              alt="trash"
              onClick={handleDeleteSearchedWords}
            />
          </ClearBtn>

          {wordsSearched.map((word) => (
            <WordContainer key={word}>
              <Link to={GLOBAL_PATH + word}>{word}</Link>
              <img
                src={trashImg}
                alt="trash"
                onClick={() => {
                  handleDeleteWord(word);
                }}
              />
            </WordContainer>
          ))}
        </Container>
      )}
    </>
  );
};

export default WordsSearched;
