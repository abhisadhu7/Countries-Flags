import React, { useContext } from "react";
import { Context } from "../Context/DetailsContext";

const Details = () => {
  const { state } = useContext(Context);
  console.log(state);
  return (
    <div>
      {state.map((item) => {
        return <h1>{item.name}</h1>;
      })}
    </div>
  );
};

export default Details;
