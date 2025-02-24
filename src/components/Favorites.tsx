import { useState, useEffect } from "react";
import { Photo } from "../api";
import ImageCard from "./ImageCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Photo[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default Favorites;
