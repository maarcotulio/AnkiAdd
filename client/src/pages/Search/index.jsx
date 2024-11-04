import { Container, Input } from "./style";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import useSearch from "../../hooks/useSearch";

const Search = () => {
  const [, setWord] = useState("");
  const { SaveWordToLocalStorage } = useSearch();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      SaveWordToLocalStorage(event.target.value);
      navigate(`/search/${event.target.value}`);
    }
  };

  return (
    <Container>
      <h1>Search</h1>
      <Input
        type="text"
        ref={inputRef}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={keyDownHandler}
      />
    </Container>
  );
};

export default Search;
