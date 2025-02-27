import styled from "styled-components";

const FooterContainer = styled.footer`
  background:#392c50;
  color: white;
  text-align: center;
  padding: 10px;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Byggd av Mali Roshanshah | Bilder från <a href="https://www.pexels.com" style={{ color: "#57ff37"}}>Pexels API</a></p>
    </FooterContainer>
  );
};

export default Footer;
