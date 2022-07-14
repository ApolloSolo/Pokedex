const { Schema, model } = require("mongoose");

const pokeTeamSchema = new Schema(
  {
    pokemon: [
      {
        type: Schema.Types.ObjectId,
        ref: "OnePokemon",
        max: 6
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// pokeTeamSchema.virtual("teamCount").get(function () {
//   return this.length;
// });

const PokeTeam = model("PokeTeam", pokeTeamSchema);

module.exports = PokeTeam;
