const initialState = {
  paises: [],
  totalPaises: [],
  // continentes: [],
  activities: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        paises: action.payload,
        totalPaises: action.payload,
        //en el estado 'paises' que en un principio es un arreglo vacio, manda todo lo que mande la action 'GET_COUNTRIES'
      };
    case "FILTER_CONTINENTS":
      // const continents = state.paises.filter(
      // (el) => el.continents === action.payload
      // );
      const allContinents = state.totalPaises;
      // const countriesFiltered = allContinents.filter(
      //   (el) => el.continents === action.payload
      // );
      const countriesFiltered =
        action.payload === "All"
          ? allContinents
          : allContinents.filter((el) => el.continents === action.payload);
      // console.log("countriesFiltered=", countriesFiltered);
      return {
        ...state,
        paises: countriesFiltered,
      };
    case "FILTER_ACTIVITY":
      return {
        ...state,
        activities: action.payload,
      };
    default:
      return state;
  }
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "BUSCAR_PAIS_POR_ID":
//       return {
//         ...state,
//         pais: action.payload,
//       };
//     case "BUSCAR_PAISES":
//       return {
//         ...state,
//         paises: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export default reducer;
