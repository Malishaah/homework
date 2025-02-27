import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 50%;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  border: none;
  background: red;
  color: white;
  padding: 15px 18px;
  cursor: pointer;
  border-radius: 50%;
`;

const Modal = ({ image, onClose }: { image: string; onClose: () => void }) => {
  if (!image) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>⛌</CloseButton>
        <img src={image} alt="Large view" style={{ maxWidth: "100%" }} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
