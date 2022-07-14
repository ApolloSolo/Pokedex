const { Schema, model } = require("mongoose");

const onePokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const OnePokemon = model("OnePokemon", onePokemonSchema);

module.exports = OnePokemon;
