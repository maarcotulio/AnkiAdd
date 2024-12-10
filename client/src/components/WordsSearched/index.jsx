import { useTheme } from "../App";
import PropTypes from "prop-types";
import { Container, ClearBtn, Menu } from "./style";

import trash from "../../assets/images/icons/trash.svg";
import trashDarkMode from "../../assets/images/icons/trashDarkMode.svg";

import useWordsSearched from "./useWordsSearched";
import WordContainer from "./components/WordContainer";
import { useState } from "react";

const GLOBAL_PATH = "/search/";

const WordsSearched = () => {
  const [visible, setVisible] = useState("none");
  const { isLightMode } = useTheme();
  const { wordsSearched, handleDeleteWord, handleDeleteSearchedWords } =
    useWordsSearched();

  const trashImg = isLightMode ? trashDarkMode : trash;
  const hasWordsSearched = wordsSearched?.length >= 1;

  function onClickMenu() {
    visible === "none" ? setVisible("block") : setVisible("none");
  }

  return (
    <>
      {hasWordsSearched && (
        <Container $isvisible={visible}>
          <ClearBtn>
            <img
              src={trashImg}
              alt="trash"
              onClick={handleDeleteSearchedWords}
            />
          </ClearBtn>

          {wordsSearched.map((word) => (
            <WordContainer
              key={Math.random()}
              path={GLOBAL_PATH + word}
              onDeleteWord={handleDeleteWord}
              img={trashImg}
            >
              {word}
            </WordContainer>
          ))}
        </Container>
      )}

      <Menu onClick={onClickMenu} />
    </>
  );
};

export default WordsSearched;

WordsSearched.propTypes = {
  wordsSearched: PropTypes.array,
  handleDeleteWord: PropTypes.func,
  handleDeleteSearchedWords: PropTypes.func,
};
