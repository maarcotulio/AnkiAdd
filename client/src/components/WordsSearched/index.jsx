import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../App";
import { Container, ClearBtn } from "./style";

import trash from "../../assets/images/icons/trash.svg";
import trashDarkMode from "../../assets/images/icons/trashDarkMode.svg";

const GLOBAL_PATH = "/search/";

const WordsSearched = () => {
  const { isLightMode } = useTheme();
  const [wordsSearched, setWordsSearched] = useState(
    JSON.parse(localStorage.getItem("words"))
  );

  function handleDeleteSearchedWords() {
    localStorage.removeItem("words");
    setWordsSearched([]);
  }

  return (
    <>
      {wordsSearched?.length >= 1 && (
        <Container>
          {isLightMode ? (
            <ClearBtn>
              <img
                src={trashDarkMode}
                alt="trash"
                onClick={handleDeleteSearchedWords}
              />
            </ClearBtn>
          ) : (
            <ClearBtn>
              <img
                src={trash}
                alt="trash"
                onClick={handleDeleteSearchedWords}
              />
            </ClearBtn>
          )}
          {wordsSearched.map((word) => (
            <Link key={word} to={GLOBAL_PATH + word}>
              {word}
            </Link>
          ))}
        </Container>
      )}
    </>
  );
};

export default WordsSearched;
