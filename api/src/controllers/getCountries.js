const { Country } = require("../db.js");
const axios = require("axios");

const getCountries = async () => {
  //me trae los paises con los datos para la ruta principal
  const apiUrl = await axios.get("https://restcountries.com/v3/all");
  const apiData = apiUrl.data.map((country) => {
    return {
      id: country.cca3,
      flags: country.flags[1],
      name: country.name.common,
      continents: country.continents[0],
      capital: country.hasOwnProperty("capital")
        ? country.capital[0]
        : "No existe la capital",
      subregion: country.hasOwnProperty("subregion")
        ? country.subregion
        : "No existe la subregion",
      // subregion: country.subregion,
      area: country.area,
      population: country.population,
    };
  });
  // console.log(apiData);
  return apiData;
};



// console.log(getCountries)
// es una funcion asincrona

module.exports = getCountries;
