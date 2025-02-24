import { useQuery } from "@tanstack/react-query";
import { fetchImages, Photo } from "../api";
import ImageCard from "./ImageCard";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  padding: 20px;
  justify-content: center;
`;

const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
`;

const ImageGallery = ({ query }: { query: string }) => {
  const { data: images, isLoading, error } = useQuery<Photo[]>({
    queryKey: ["images", query],
    queryFn: () => fetchImages(query),
  });

  if (isLoading) return <LoadingText>Laddar bilder...</LoadingText>;
  if (error) return <LoadingText>Något gick fel!</LoadingText>;

  return (
    <GalleryContainer>
      {images?.map((image) => (
        <ImageCard key={image.id} photo={image} />
      ))}
    </GalleryContainer>
  );
};

export default ImageGallery;
