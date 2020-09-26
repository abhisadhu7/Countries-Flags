// import { useState, useEffect } from "react";
// import Countries from "../api/Countries";

// export default () => {
//   const [items, setItems] = useState([]);
//   const [err, setErr] = useState("");
//   const searchApi = async (term) => {
//     try {
//       const response = await Countries.get(`/region/${term}`);
//       setItems(response.data);
//     } catch (err) {
//       setErr("Please enter a valid country name");
//     }
//   };
//   const searchBarApi = async (term) => {
//     try {
//       const response = await Countries.get(`/name/${term}`);
//       setItems(response.data);
//     } catch (err) {
//       setErr("Please enter valid country name");
//     }
//   };

//   useEffect(() => {
//     searchApi("africa");
//   }, []);

//   return [searchApi, searchBarApi, items, err];
// };
