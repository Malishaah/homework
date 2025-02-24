import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [query, setQuery] = useState("nature");

  return (
    <>
      <Navbar />
      <SearchBar onSearch={setQuery} />
      <Routes>
        <Route path="/" element={<ImageGallery query={query} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
