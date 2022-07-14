const router = require("express").Router();
const userRoutes = require('./userRoutes');
const allPokemonRoutes = require('./allPokemonRoutes')

router.use('/user', userRoutes);
router.use('/pokemon', allPokemonRoutes);

module.exports = router;