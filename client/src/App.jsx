import React from "react";
import SearchTranslate from "./components/Translate/SearchTranslate";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <SearchTranslate type="word"></SearchTranslate>
    </>
  );
}

export default App;
