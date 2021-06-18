import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="header">
      <h1 className="header-heading">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
        />
        NOTES
      </h1>

      <button className="btn" onClick={() => setTheme(nextTheme)}>
        {theme === "light" ? (
          <FaMoon size="1.5rem" color="black" />
        ) : (
          <FiSun size="1.5rem" color="white" />
        )}
      </button>
    </div>
  );
};

export default Header;
