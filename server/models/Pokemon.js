const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema({
  generation: {
    type: String,
  },
  pokemons: [
    {
      type: Schema.Types.ObjectId,
      ref: "OnePokemon",
    },
  ],
});

const Pokemon = model("Pokemon", pokemonSchema);

module.exports = Pokemon