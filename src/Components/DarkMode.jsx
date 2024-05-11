import React from "react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
export default function DarkMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toggleClass = (selector, className, action) => {
    document
      .querySelectorAll(selector)
      .forEach((element) => element.classList[action](className));
  };
  useEffect(() => {
    const action = theme ? "add" : "remove";
    // document.querySelector("data-bs-theme")[action]("dark");
    const navbar = document.getElementsByTagName("nav");
    console.log(navbar);
    if (!theme) {
      navbar[0].classList.remove("navbar-dark", "bg-dark");
      navbar[0].setAttribute("data-bs-theme", "light");
      navbar[0].classList.add("navbar-light", "bg-light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      navbar[0].classList.remove("navbar-light", "bg-light");
      navbar[0].classList.add("navbar-dark", "bg-dark");
      navbar[0].setAttribute("data-bs-theme", "dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
    const selectors = [
      ".card-body",
      ".image-holder",
      ".navbar",
      ".nav-link",
      ".form-control",
      ".footer",
    ];
    const classes = [
      "dark-asset",
      "dark-asset",
      "dark-asset",
      "dark-asset",
      "dark-asset",
      "dark-asset",
    ];

    selectors.forEach((selector, index) => {
      toggleClass(selector, classes[index], action);
    });
  }, [theme]);

  return (
    <label class="switch">
      <input onClick={toggleTheme} type="checkbox" />
      <span class="slider round"></span>
    </label>
  );
}
