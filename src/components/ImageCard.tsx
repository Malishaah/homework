import { Photo } from "../api";

const ImageCard = ({ photo }: { photo: Photo }) => {
  return (
    <div className="border rounded-lg p-2 shadow-md">
      <img src={photo.src.medium} alt={photo.alt} className="w-full h-auto rounded-lg" />
      <p className="text-sm mt-2">
        📸 <a href={photo.photographer_url} target="_blank">{photo.photographer}</a>
      </p>
      <a href={photo.src.original} target="_blank" className="text-blue-500 text-sm">Se originalbild</a>
    </div>
  );
};

export default ImageCard;
