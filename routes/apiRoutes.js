const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", async (req, res) => {
   const data = await db.Workout.find({})    
    res.json(data)
  });

  app.get("/api/workouts/range", async (req, res) => {
    const data = await db.Workout.find({}).limit(7)
    res.json(data)
  });
  
  app.post("/api/workouts", async (req, res) => {
    const day = await db.Workout.create({})
    res.json(day)
  });

  app.put("/api/workouts/:id", async ({body, params}, res) => {
    const workoutUpdated = await db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, upsert: true, useFindandModify: false },
    );
    res.json(workoutUpdated)
  })};