import { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: #f8f9fa;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #2980b9;
  }
`;

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Sök bilder..."
      />
      <Button onClick={handleSearch}>Sök</Button>
    </SearchContainer>
  );
};

export default SearchBar;
