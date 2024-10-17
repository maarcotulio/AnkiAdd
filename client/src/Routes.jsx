import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WordMeaning from "./pages/WordMeaning";

export default function HandleRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:word" element={<WordMeaning />} />
    </Routes>
  );
}
