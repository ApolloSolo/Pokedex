const router = require("express").Router();
const { createStore, getAllPokemon, addPokemon } = require("../../controllers/pokemonController");
const protected = require("../../middleware/authMiddleware");

router.get("/allPokemon", protected, getAllPokemon);
router.post("/allPokemon/createStore", protected, createStore)
router.post("/allPokemon/addPoke", protected, addPokemon)

module.exports = router;
