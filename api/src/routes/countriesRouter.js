const { Router } = require("express");
const getCountries = require("../controllers/getCountries");
const { Country } = require("../db.js");

const countriesRouter = Router();

countriesRouter.get("", async (req, res) => {
  const name = req.query.name;
  try {
    const country = await getCountries(); // Llamo y ejecuto la funcion que me trae todos los paises
    const countryDB = await Country.findAll(); //Creo una funcion que busque dentro de la tabla countries

    if (!countryDB.length) {
      // Si no hay nada dentro de countryDB, quiero que me guarda la informacion de la api
      const create = await Country.bulkCreate(country);
      res.status(200).send(create);
      console.log("Guardo la info de la bd");
    } else {
      //Si no, quiero que busque dentro de la tabla
      const search = await Country.findAll();
      //   res.status(200).send(search);
      console.log("Busco en la bd");

      //pregunto si entra algo por query
      //busco en bd si hay coincidencia
      //si la hay me devuelve la coincidencia
      //si no, me manda todos los paises
      if (name) {
        const countryName = await search.filter((el) =>
          el.name.toLowerCase().includes(name.toLocaleLowerCase())
        );
        countryName.length
          ? res.status(200).send(countryName)
          : res.status(404).send("Country not found");
      } else {
        res.status(200).send(search);
      }
    }
  } catch (error) {
    res.status(404).send("Error 404");
  }
});

countriesRouter.get("/:id", async (req, res) => {
  //Incluir los datos de las actividades turísticas correspondientes
  const { id } = req.params;
  try {
    const country = await Country.findByPk(id.toUpperCase());
    res.send(country);
  } catch (error) {
    res.status(404).send("ID invalido");
  }
});

module.exports = countriesRouter;
