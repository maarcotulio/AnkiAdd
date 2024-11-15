import { Container } from "./style";

import useWordDefinition from "./useWordDefinition";
import Loader from "../../components/Loader";
import Header from "./components/Header";

const WordDefinition = () => {
  const { isLoading, def, AddWordToAnki, word } = useWordDefinition();

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <Header word={word} addWordToAnki={AddWordToAnki} />

      <p>{def}</p>
    </Container>
  );
};

export default WordDefinition;
