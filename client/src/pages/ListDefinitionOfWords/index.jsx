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
  }, [list]);

  function handleSubmit(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const textInput = event.target.value;
      const lines = textInput.split("\n");
      console.log("Input:", textInput);
      console.log("Lines:", lines);
      setList(lines.map((line) => line.split(" ")).flat());
    }
  }

  return (
    <Container>
      <TextArea onKeyDown={handleSubmit} />
      <DefsList />
    </Container>
  );
};

export default ListDefinitionOfWords;
