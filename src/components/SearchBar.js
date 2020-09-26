import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = (props) => {
  // const [term, setTerm] = useState("");
  // const handleChange = (e) => {
  //   setTerm(e.target.value);
  // };
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} color="white" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={props.term}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default SearchBar;
