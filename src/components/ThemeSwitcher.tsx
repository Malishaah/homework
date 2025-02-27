import styled from "styled-components";

// 🟢 Definiera props-typen
interface ThemeSwitcherProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

const Button = styled.button`
  background: #b45573;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  display: block;
  margin: auto;

  &:hover {
    background: #86404a;
  }
`;

// 🟢 Använd props-typen i komponenten
const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme, darkMode }) => {
  return <Button onClick={toggleTheme}>{darkMode ? "𖤓 Ljust läge" : "⏾ Mörkt läge"}</Button>;
};

export default ThemeSwitcher;
