// ONLY change this if you changed the port in the file index.js in the server
const server_site = "http://localhost:8080";

// IGNORE
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchTranslate.css";

function SearchTranslate(props) {
  const [translate, setTranslate] = useState("");
  const server =
    props.type === "word"
      ? `${server_site}/searchWord`
      : `${server_site}/translatePhrase`;

  const fetchAPI = async (input) => {
    try {
      const response = await axios.post(server, { input });
      alert(response.data.msg);

      location.reload();
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    await fetchAPI(translate);
  };

  const handlerKeyDown = (event) => {
    if (event.key === "Enter") {
      handlerSubmit(event);
    }
  };

  return (
    <>
      <div className="pageSpace boxForm">
        <form onSubmit={handlerSubmit} className="form-card">
          <label className="text-form">{`
            Write a ${props.type} to add in Anki
          `}</label>
          <div className="type-input">
            <input
              type="text"
              value={translate}
              onChange={(e) => setTranslate(e.target.value)}
              onKeyDown={handlerKeyDown}
            />
            <button type="submit" className="btn">
              Serach
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchTranslate;
