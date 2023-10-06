import React, { useState } from "react";
import SearchIcon from "./searchIcon";
import "./index.css";

const SearchBox = ({ onSearch }) => {
  const [name, setName] = useState("");
    const handleChange = (event) => {
      setName(event.target.value);
      onSearch(name);
    };

  return(
  <div className="search-box">
    <SearchIcon />
    <input type="text" placeholder="Busca en este sitio web" onChange={handleChange} />
  </div>
)};
export default SearchBox;
