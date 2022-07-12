import React from 'react'

const About = ({pokemonData, speciesData, loading, loading2}) => {
  return (
    <section className="container px-4">
          <div className="flex mt-4 font-bold">
            <ul className="mr-6">
              <li>Height:</li>
              <li className="mt-2">Weight:</li>
              <li className="mt-2">Abilities:</li>
            </ul>
            <ul>
              <li>
                {(pokemonData.height / 3.048).toFixed(1)}"{" "}
                {`(${(pokemonData.height * 10).toFixed(1)} cm)`}
              </li>
              <li className="mt-2">
                {(pokemonData.weight / 4.536).toFixed(1)} lbs.{" "}
                {`(${(pokemonData.weight * 10).toFixed(1)} kg)`}
              </li>
              <li className="flex mt-2">
                {pokemonData.abilities.map((ability) => (
                  <p key={ability.ability.name} className="mr-2">"{ability.ability.name}"</p>
                ))}
              </li>
            </ul>
          </div>

          <div className="h-full about-data mt-4 pt-4 border border-t-[#505050] text-lg pb-4 md:rounded-b-xl">
            {loading2 || loading ? (
              <>Loading</>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-2 text-center">Pokedex Entry</h3>
                <h4 className="text-lg font-bold">
                  {speciesData.name[0].toUpperCase() +
                    speciesData.name.slice(1)}
                </h4>
                <p>{speciesData.flavor_text_entries[0].flavor_text}</p>
              </>
            )}
          </div>
        </section>
  )
}

export default About