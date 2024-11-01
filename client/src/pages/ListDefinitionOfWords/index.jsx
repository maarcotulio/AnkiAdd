import { useEffect, useState } from "react";
import { Container, TextArea, DefsList } from "./style";
import useSearch from "../../hooks/useSearch";

const ListDefinitionOfWords = () => {
  const [list, setList] = useState([]);
  const { SearchWordAndAdd } = useSearch(); // Custom hook

  useEffect(() => {
    async function AddAllWords() {
      if (Array.isArray(list) && list.length > 0) {
        const response = await SearchWordAndAdd(list);
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
      <h1>Insert a list of words</h1>
      <TextArea onKeyDown={handleSubmit} />
      <DefsList />
    </Container>
  );
};

export default ListDefinitionOfWords;
