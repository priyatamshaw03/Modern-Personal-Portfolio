import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggle = ({ theme, setTheme }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      //default light mode
      //setTheme("light");
      const prefersDarkmode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDarkmode ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            src={assets.sun_icon}
            alt="sun"
            className="size-8.5 p-1.5 border border-gray-600 rounded-full"
            onClick={() => setTheme("light")}
          />
        ) : (
          <img
            src={assets.moon_icon}
            alt="moon"
            className="size-8.5 p-1.5 border border-gray-600 rounded-full"
            onClick={() => setTheme("dark")}
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
