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
    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.paises.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.paises.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        paises: sortedArr,
      };
    case "GET_NAME_COUNTRY":
      return {
        ...state,
        paises: action.payload,
      };
    case "FILTER_ACTIVITY":
      return {
        ...state,
        activities: action.payload,
      };
    case "BY_ACTIVITIES":
      const activities = state.allCountriesCopy.filter((c) =>
        c.activities.find((c) => c.name === action.payload)
      );
      return {
        ...state,
        allCountries: activities,
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
