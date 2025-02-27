import { useState } from "react";
import styled from "styled-components";
import { Photo } from "../api";
import Modal from "./Modal";

const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 10px 15px rgba(32, 8, 85, 0.3);
  background: white;
  transition: transform 0.2s, box-shadow 0.3s;
  position: relative;
  cursor: pointer;
  width: 300px; /* Fixerad bredd */
  height: 350px; /* Fixerad höjd */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 24px rgba(41, 17, 91, 0.8);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Håller bildförhållandet */
  display: block;
`;

const Info = styled.div`
  padding: 10px;
  text-align: center;
  height: 30%;
`;

const Photographer = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const Link = styled.a`
  color: #392c50;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  color: ${({ isFavorite }) => (isFavorite ? "red" : "white")};
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 44px;
  transition: color 0.3s;

  &:hover {
    color: ${({ isFavorite }) => (isFavorite ? "#d32f2f" : "red")};
  }
`;

const ImageCard = ({ photo, removeFavorite }: { photo: Photo; removeFavorite?: (id: number) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorites") || "[]").some((fav: Photo) => fav.id === photo.id)
  );

  const toggleFavorite = () => {
    let favorites: Photo[] = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== photo.id);
      removeFavorite?.(photo.id); // 🔥 Tar bort från favoriter direkt i `Favorites.tsx`
    } else {
      favorites.push(photo);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Card onClick={() => setIsModalOpen(true)}>
        <FavoriteButton isFavorite={isFavorite} onClick={(e) => { 
          e.stopPropagation(); 
          toggleFavorite(); 
        }}>
          {isFavorite ? "❤︎" : "❤︎"}
        </FavoriteButton>
        <ImageWrapper>
          <Image src={photo.src.medium} alt={photo.alt} />
        </ImageWrapper>
        <Info>
          <Photographer>
          ˙✧˖°📸 <Link href={photo.photographer_url} target="_blank">{photo.photographer} ✧⋆˚</Link>
          </Photographer>
          <Link href={photo.src.original} target="_blank">▸ Se originalbild</Link>
        </Info>
      </Card>

      {isModalOpen && <Modal image={photo.src.original} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default ImageCard;
