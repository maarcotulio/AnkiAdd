import { useEffect, useState } from "react";
import { Container, TextArea, DefsList } from "./style";
import useSearch from "../../hooks/useSearch";
import Loader from "../../components/Loader";

const ListDefinitionOfWords = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { SearchWordAndAdd } = useSearch(); // Custom hook

  useEffect(() => {
    async function AddAllWords() {
      if (Array.isArray(list) && list.length > 0) {
        setIsLoading(true);
        const response = await SearchWordAndAdd(list);
        setIsLoading(false);
        console.log(response);
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

  return (
    <Container>
      {isLoading && <Loader isLoading />}
      <h1>Insert a list of words</h1>
      <TextArea onKeyDown={handleSubmit} />
      <DefsList />
    </Container>
  );
};

export default ListDefinitionOfWords;
