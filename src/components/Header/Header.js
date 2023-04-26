import React, { useState, useEffect } from "react";
import logo from "./../imgs/header/logo.svg";
import "./style.css";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-wrapper'>
          <div className='logo'>
            <a href='#'>
              <img src={logo} alt='logo' />
            </a>
          </div>
          {theme === "light" ? (
            <div
              className='lamp'
              onClick={toggleTheme}
              style={{ backgroundColor: "black" }}
            ></div>
          ) : (
            <div
              className='lamp'
              onClick={toggleTheme}
              style={{ backgroundColor: "white" }}
            ></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
