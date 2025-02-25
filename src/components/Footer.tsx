import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Byggd med ❤️ av Mali Roshanshah | Bilder från <a href="https://www.pexels.com" target="_blank" style={{ color: "#3498db" }}>Pexels API</a></p>
    </FooterContainer>
  );
};

export default Footer;
