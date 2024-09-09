// ONLY change this if you changed the port in the file index.js in the server
const server_site = "http://localhost:8080";

// IGNORE
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FormCard.css";

function FormCard() {
  const [word, setWord] = useState("");

  const fetchAPI = async (word) => {
    try {
      const response = await axios.post(server_site, { word });
      !response.data
        ? alert("Word not Founded")
        : alert(
            `Card Added.\nMeaning of ${response.data.word} - ${response.data.defs}`
          );

      location.reload();
    } catch (error) {
      console.error("Error Adding the Word");
    }
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    await fetchAPI(word);
  };

  const handlerKeyDown = (event) => {
    if (event.key === "Enter") {
      handlerSubmit();
    }
  };

  return (
    <>
      <div className="pageSpace boxForm">
        <form onSubmit={handlerSubmit} className="form-card">
          <label className="text-form">Write the Word to add in Anki</label>
          <div className="type-input">
            <input
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              onKeyDown={handlerKeyDown}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormCard;
