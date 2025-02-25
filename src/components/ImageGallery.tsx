import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchImages, Photo } from "../api";
import ImageCard from "./ImageCard";
import LoadingSpinner from "./LoadingSpinner";
import Pagination from "./Pagination";
import styled from "styled-components";


const GalleryContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Anpassa för kortbredd */
gap: 20px; /* ✅ 20px mellan varje kort */
padding: 20px;
justify-content: center;
`;


const ErrorMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
`;

const RetryButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #c0392b;
  }
`;

const ImageGallery = ({ query }: { query: string }) => {
  const [page, setPage] = useState(1);

  const { data: images, isLoading, error, refetch } = useQuery<Photo[]>({
    queryKey: ["images", query, page],
    queryFn: () => fetchImages(query, 10, page),
  });

  if (isLoading) return <LoadingSpinner />;

  if (error) return (
    <ErrorMessage>
      Något gick fel! <br />
      <RetryButton onClick={() => refetch()}>Försök igen</RetryButton>
    </ErrorMessage>
  );

  return (
    <>
      <GalleryContainer>
        {images?.map((image) => (
          <ImageCard key={image.id} photo={image} />
        ))}
      </GalleryContainer>

      <Pagination page={page} setPage={setPage} />
    </>
  );
};

export default ImageGallery;
