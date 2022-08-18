const { Router } = require("express");
const { Activity } = require("../db.js");

const activitiesRouter = Router();

activitiesRouter.post("", async (req, res) => {
  // Crea una actividad turística en la base de datos, relacionada con los países correspondientes
  let { id, name, difficulty, duration, season } = req.body;

  let newActivity = await Activity.create({
    id,
    name,
    difficulty,
    duration,
    season,
  });
  // console.log(newActivity)
  // res.status(200).send("new activity created");
  res.status(200).send(newActivity);
});

activitiesRouter.get("", async (req, res) => {
  const activities = await Activity.findAll({
    attributes: ["name"],
  });
  res.status(200).send(activities);
});

module.exports = activitiesRouter;
