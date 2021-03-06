import React, { useState, useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "./ThemeContext";

function ToggleTheme() {
  const [mount, setMount] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;
  return (
    <button type="button" onClick={toggleTheme} className={theme}>
      {theme === "light" ? <BiMoon /> : <BiSun />}
      <style jsx>{`
        button {
          /* remove default */
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;
          /* custom styles */
          position: relative;
          left: 49%;
          justify-content: center;
          align-items: center;
          font-size: 1.7rem;
          padding: 4px;
          border-radius: 2px;
        }
        .light {
          color: #2d3748;
        }
        .dark {
          color: #f6e05e;
        }
      `}</style>
    </button>
  );
}

export default ToggleTheme;
