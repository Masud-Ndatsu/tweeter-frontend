import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BookMarks from "./pages/BookMarks";
import Explore from "./pages/Explore";
import Home from "./pages/Home";

function App() {
  return (
      <Routes>
        <Route path="/feeds" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<BookMarks />} />
      </Routes>
  );
}

export default App;
