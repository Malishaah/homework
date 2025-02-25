import styled from "styled-components";

// 🟢 Definiera props-typen
interface ThemeSwitcherProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

const Button = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  display: block;
  margin: auto;

  &:hover {
    background: #2980b9;
  }
`;

// 🟢 Använd props-typen i komponenten
const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme, darkMode }) => {
  return <Button onClick={toggleTheme}>{darkMode ? "🌞 Ljust läge" : "🌙 Mörkt läge"}</Button>;
};

export default ThemeSwitcher;
