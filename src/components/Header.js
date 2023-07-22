// Header.js
import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    console.log("Search Term:", searchTerm);
  };

  const getRandomColor = () => {
    const colors = ["#f06292", "#64b5f6", "#81c784", "#ffb74d", "#ba68c8"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const headerStyle = {
    background: getRandomColor(),
  };

  return (
    <header className="app-header" style={headerStyle}>
      <div className="logo-container">
        <img
          src={process.env.PUBLIC_URL + "/images/cooking-logo.png"}
          alt="Cooking Logo"
        />
        <h1>Recipe App</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for recipes..."
          onChange={handleSearch}
        />
        <FaSearch className="search-icon" />
      </div>
    </header>
  );
};

export default Header;
