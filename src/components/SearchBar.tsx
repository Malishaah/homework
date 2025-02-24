import { useState } from "react";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Sök bilder..."
        className="border rounded p-2 w-full"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">Sök</button>
    </div>
  );
};

export default SearchBar;
