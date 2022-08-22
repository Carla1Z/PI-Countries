const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("activity", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"), //acepta solo unos pocos valores, especificados como una lista
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    season: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
      allowNull: true,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};

/*
ID
Nombre
Dificultad (Entre 1 y 5)
Duración
Temporada (Verano, Otoño, Invierno o Primavera)
*/
