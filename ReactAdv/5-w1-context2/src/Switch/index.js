import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        /*The function being passed to onChange is called
        a callback function*/
        onChange = {toggleTheme}

      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
