import { useState, useEffect } from "react";
import styled from "styled-components";
import { Photo } from "../api";
import ImageCard from "./ImageCard";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Samma layout som i ImageGallery */
  gap: 20px; /* Mellanrum mellan kort */
  padding: 20px;
  justify-content: center;
`;

const Message = styled.p`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`;

const Favorites = () => {
  const [favorites, setFavorites] = useState<Photo[]>([]);

  // 🟢 Hämta favoriter från localStorage vid start
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(savedFavorites);
  }, []);

  // 🟢 Funktion för att ta bort en favorit och uppdatera state direkt
  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter((photo) => photo.id !== id);
    setFavorites(updatedFavorites); // 🔥 Uppdatera state direkt
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // 🔄 Uppdatera localStorage
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>♥️ Mina Favoriter</h2>
      {favorites.length === 0 ? (
        <Message>Inga favoriter ännu.</Message>
      ) : (
        <GalleryContainer>
          {favorites.map((photo) => (
            <ImageCard key={photo.id} photo={photo} removeFavorite={removeFavorite} />
          ))}
        </GalleryContainer>
      )}
    </>
  );
};

export default Favorites;
