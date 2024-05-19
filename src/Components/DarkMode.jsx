import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
export default function DarkMode() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input onClick={toggleTheme} type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}
