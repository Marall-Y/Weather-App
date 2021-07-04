import React from "react";
import { FcSearch } from "react-icons/fc";

import "./Search.css";

const Search = ({ weatherHandler, setCity, search, value }) => {
  return (
    <div className="input-container">
      <div>
        <input
          className="input"
          type="text"
          placeholder={"Which City?"}
          onKeyPress={weatherHandler}
          onChange={setCity}
          value={value}
        />

        <FcSearch className="icon" onClick={search} />
      </div>
    </div>
  );
};

export default Search;
