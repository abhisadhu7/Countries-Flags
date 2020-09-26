import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <button className="filter-button">Filter by Region</button>
      <div className="dropdown-content">
        <button onClick={props.onPressAfrica}>Africa</button>
        <button onClick={props.onPressAmericas}>Americas</button>
        <button onClick={props.onPressAsia}>Asia</button>
        <button onClick={props.onPressEurope}>Europe</button>
        <button onClick={props.onPressOceania}>Oceania</button>
      </div>
    </div>
  );
};

export default Filter;
