import { Routes, Route } from "react-router-dom"; // ❌ Ta bort BrowserRouter här!
import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";
import SearchBar from "./components/SearchBar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
  }
`;

const lightTheme = { bg: "#f8f9fa", text: "#333" };
const darkTheme = { bg: "#222", text: "#fff" };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const App = () => {
  const [query, setQuery] = useState("nature");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Navbar />
        <SearchBar onSearch={setQuery} />
        <ThemeSwitcher toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
        <MainContent>
          <Routes>
            <Route path="/" element={<ImageGallery query={query} />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainContent>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
