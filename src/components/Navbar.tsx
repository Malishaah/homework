import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background: #392c50;
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background:#645380;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">Hem</StyledLink>
      <StyledLink to="/favorites">Favoriter</StyledLink>
    </Nav>
  );
};

export default Navbar;
