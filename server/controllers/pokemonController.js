const { User, PokeTeam, OnePokemon, Pokemon } = require("../models/index");
const asyncHandler = require("express-async-handler");

const createStore = async (req, res) => {
  const pokemons = await Pokemon.create({name: req.body.name});
  console.log(pokemons);
  return res.status(200).json(pokemons);
};

const getAllPokemon = async (req, res) => {
  const pokemons = await Pokemon.find({}).populate("pokemons", "name").select("-__v");
  console.log(pokemons._id);
  return res.status(200).json(pokemons);
};

const addPokemon = async (req, res) => {
  console.log(req.body.name);
  const newPokemon = await OnePokemon.create({ name: req.body.name });
  console.log(newPokemon);

  const updatedStore = await Pokemon.findOneAndUpdate(
    { name: req.body.generation },
    { $addToSet: { pokemons: newPokemon._id } },
    { new: true }
  ).populate("pokemons");

  return res.status(200).json(updatedStore);
};

module.exports = {
  createStore,
  getAllPokemon,
  addPokemon,
};
