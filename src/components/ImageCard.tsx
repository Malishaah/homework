import styled from "styled-components";
import { Photo } from "../api";

const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background: white;
  transition: transform 0.2s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Info = styled.div`
  padding: 10px;
  text-align: center;
`;

const Photographer = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageCard = ({ photo }: { photo: Photo }) => {
  return (
    <Card>
      <Image src={photo.src.medium} alt={photo.alt} />
      <Info>
        <Photographer>📸 <Link href={photo.photographer_url} target="_blank">{photo.photographer}</Link></Photographer>
        <Link href={photo.src.original} target="_blank">Se originalbild</Link>
      </Info>
    </Card>
  );
};

export default ImageCard;
