import React, { useState, createContext } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DefsContainer from "./components/DefsContainer/DefsContainer.jsx";
import Footer from "./components/Footer/Footer";
import SERVER from "../../config/client.js";

export const DefsContext = createContext();

function App() {
  const [definition, setNewDefinition] = useState("");
  const [word, setNewWord] = useState("");

  const addCard = async (input) => {
    try {
      const response = await axios.post(`${SERVER}/addWord`, { input });
      setNewDefinition(response.data.msg);
      setNewWord(input);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return alert("Word not found");
      }

      alert("Error 503, Service is Unavailable");
      console.log(err);
    }
  };

  const fetchWord = async (input) => {
    try {
      const response = await axios.post(`${SERVER}/searchWord`, { input });
      setNewDefinition(response.data.msg);
      setNewWord(input);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        return alert("Word not found");
      }

      alert("Error 503, Service is Unavailable");
      console.log(err);
    }
  };

  const handlerClick = async (input) => {
    await fetchWord(input);
  };

  const handlerKeyDown = async (event, input) => {
    if (event.key === "Enter") {
      event.preventDefault();
      await addCard(input);
    }
  };

  return (
    <DefsContext.Provider
      value={{
        definition,
        handlerKeyDown,
        word,
        handlerClick,
      }}
    >
      <div className="pg_1">
        <Navbar></Navbar>
        <DefsContainer></DefsContainer>
      </div>
      <Footer></Footer>
    </DefsContext.Provider>
  );
}

export default App;
