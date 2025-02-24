import { useQuery } from "@tanstack/react-query";
import { fetchImages, Photo } from "../api";
import ImageCard from "./ImageCard";

const ImageGallery = ({ query }: { query: string }) => {
  const { data: images, isLoading, error } = useQuery<Photo[]>({
    queryKey: ["images", query],
    queryFn: () => fetchImages(query),
  });

  if (isLoading) return <p>Laddar bilder...</p>;
  if (error) return <p>Något gick fel!</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {images?.map((image) => (
        <ImageCard key={image.id} photo={image} />
      ))}
    </div>
  );
};

export default ImageGallery;
