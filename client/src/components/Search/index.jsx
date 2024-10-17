import { useState, useRef } from "react";
import { Container } from "./style";

import { useNavigate } from "react-router-dom";

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

  const handleClickContainer = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Container onClick={handleClickContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.947 9.947 0 0 0 23 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z" />
      </svg>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={keyDownHandler}
      />
    </Container>
  );
};

export default Search;
