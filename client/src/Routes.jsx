import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddListOfWords from "./pages/AddListOfWords";
import Search from "./pages/Search";
import WordDefinition from "./pages/WordDefinition";

export default function HandleRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:word" element={<WordDefinition />} />
      <Route path="/list" element={<AddListOfWords />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
