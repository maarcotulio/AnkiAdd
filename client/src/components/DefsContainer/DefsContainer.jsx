import React, { useContext } from "react";
import "./DefsContainer.css";
import ListWordsSearched from "../ListWordsSearched/ListWordsSearched";
import { DefsContext } from "../../App";

const DefsContainer = () => {
  const { definition } = useContext(DefsContext);

  return (
    <div className="containerDefs">
      <div className="divList">
        <h1>Words List</h1>
        <ul id="listOfWords">
          <ListWordsSearched id="list"></ListWordsSearched>
        </ul>
      </div>
      <div className="defsExplaination">
        <h1>Definition</h1>
        <p className="defsText">{definition}</p>
      </div>
    </div>
  );
};

export default DefsContainer;
