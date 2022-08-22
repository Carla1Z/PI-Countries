const { Router } = require("express");
const { Activity, Country } = require("../db.js");

const activitiesRouter = Router();

activitiesRouter.post("", async (req, res) => {
  // Crea una actividad turística en la base de datos, relacionada con los países correspondientes
  const { id, name, difficulty, duration, season } = req.body;
  const { countries } = req.body; //recibe un array con paises

  let newActivity = await Activity.create({
    // id,
    name,
    difficulty,
    duration,
    season,
  });
  // console.log(newActivity)
  // res.status(200).send(newActivity);

  // const activityCreate = await Activity.create(newActivity);

  const addCountries = await Country.findAll({
    where: {
      name: name, //?
    },
  });

  await addCountries.forEach((el) => {
    el.addActivity(newActivity);
  });

  res.status(200).send(newActivity);
});

activitiesRouter.get("", async (req, res) => {
  const activities = await Activity.findAll({
    attributes: ["name", "difficulty", "duration", "season"],
  });
  res.status(200).send(activities);
});

module.exports = activitiesRouter;
