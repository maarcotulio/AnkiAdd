import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WordMeaning from "./pages/WordMeaning";
import ListDefinitionOfWords from "./pages/ListDefinitionOfWords";
import Search from "./pages/Search";

export default function HandleRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:word" element={<WordMeaning />} />
      <Route path="/list" element={<ListDefinitionOfWords />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}
