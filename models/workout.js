const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          // cardio, resistance...etc
          type: String,
          trim: true,
          required: "Enter an excercise type"
        },

        name: {
          // Mondays workout, Weekend bulk....etc
          type: String,
          trim: true,
          required: "Enter an excercise name"
        },

        duration: {
          type: Number,
          required: "Enter an excercise duration"
        },

        weight: {
          type: Number
        },

        reps: {
          type: Number
        },

        sets: {
          type: Number
        },

        distance: {
          type: Number
        }
      }
    ]
  }
)

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;