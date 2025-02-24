import { useState, useEffect } from "react";
import { Photo } from "../api";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Favorites = () => {
  const [favorites, setFavorites] = useState<Photo[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <Container>
      <h2>Mina Favoriter</h2>
      {favorites.length === 0 ? (
        <p>Inga favoriter ännu.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {favorites.map((photo) => (
            <ImageCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Favorites;
