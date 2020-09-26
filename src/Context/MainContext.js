import CountryContext from "./CountryContext";
import Countries from "../api/Countries";

const CountryReducer = (state, action) => {
  switch (action.type) {
    case "search_Api":
      return action.payload;
    case "searchBar_Api":
      return action.payload;
    default:
      return state;
  }
};

const searchApi = (dispatch) => {
  return async (term) => {
    const response = await Countries.get(`/region/${term}`);

    dispatch({ type: "search_Api", payload: response.data });
  };
};

export const { Context, Provider } = CountryContext(
  CountryReducer,
  { searchApi },
  []
);
