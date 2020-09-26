import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Context/MainContext";
import { Context as DetailContext } from "../Context/DetailsContext";
import uuid from "react-uuid";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

const CountryBadge = () => {
  const [term, setTerm] = useState("");

  const { state, searchApi } = useContext(Context);

  const { clickApi } = useContext(DetailContext);

  useEffect(() => {
    searchApi("africa");
  }, []);
  // ** make use of setTerm for searchApi so when we get back it stays at the same spot

  // const handleChange = (e) => {
  //   setTerm(e.target.value);
  //   searchBarApi(term);
  // };

  let history = useHistory();

  function handleClick(e) {
    history.push("/details");
    clickApi(e.target.id);
  }

  return (
    <div className="main-page">
      <div>
        {/* <SearchBar term={term} handleChange={handleChange} /> */}
        <Filter
          onPressAmericas={() => searchApi("americas")}
          onPressAfrica={() => searchApi("africa")}
          onPressAsia={() => searchApi("asia")}
          onPressEurope={() => searchApi("europe")}
          onPressOceania={() => searchApi("oceania")}
        />
      </div>
      {state.map((item) => {
        return (
          <div key={uuid()} className="country-badge">
            <img
              id={item.callingCodes[0]}
              onClick={handleClick}
              src={item.flag}
              alt="countryFlag"
            ></img>
            <div className="country-items">
              <h3>{item.name}</h3>
              <p>Population: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CountryBadge;
