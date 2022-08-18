const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("country", {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false, // no permite que este vacio
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continents: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true, //permite que este vacio
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
};

/*
ID (Código de 3 letras) *
Nombre *
Imagen de la bandera *
Continente *
Capital *
Subregión
Área
Población
*/
