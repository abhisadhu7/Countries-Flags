import CountryContext from "./CountryContext";
import Countries from "../api/Countries";

const DetailReducer = (state, action) => {
  switch (action.type) {
    case "click_Api":
      return action.payload;
    default:
      return state;
  }
};

const clickApi = (dispatch) => {
  return async (id) => {
    const response = await Countries.get(`/callingcode/${id}`);

    dispatch({ type: "click_Api", payload: response.data });
  };
};

export const { Context, Provider } = CountryContext(
  DetailReducer,
  { clickApi },
  []
);
