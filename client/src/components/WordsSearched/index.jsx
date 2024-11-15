import { useTheme } from "../App";
import PropTypes from "prop-types";
import { Container, ClearBtn } from "./style";

import trash from "../../assets/images/icons/trash.svg";
import trashDarkMode from "../../assets/images/icons/trashDarkMode.svg";

import useWordsSearched from "./useWordsSearched";
import WordContainer from "./components/WordContainer";

const GLOBAL_PATH = "/search/";

const WordsSearched = () => {
  const { isLightMode } = useTheme();
  const { wordsSearched, handleDeleteWord, handleDeleteSearchedWords } =
    useWordsSearched();

  const trashImg = isLightMode ? trashDarkMode : trash;
  const hasWordsSearched = wordsSearched?.length >= 1;

  return (
    <>
      {hasWordsSearched && (
        <Container>
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
    </>
  );
};

export default WordsSearched;

WordsSearched.propTypes = {
  wordsSearched: PropTypes.array,
  handleDeleteWord: PropTypes.func,
  handleDeleteSearchedWords: PropTypes.func,
};
