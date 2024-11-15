import { Container, TextArea } from "./style";
import useAddListOfWords from "./useAddListOfWords";
import Loader from "../../components/Loader";

const AddListOfWords = () => {
  const { isLoading, handleSubmit } = useAddListOfWords();

  return (
    <Container>
      {isLoading && <Loader isLoading />}
      <h1>Insert a list of words</h1>
      <TextArea onKeyDown={handleSubmit} />
    </Container>
  );
};

export default AddListOfWords;
