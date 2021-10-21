import { Box, Heading, Text, Button } from "@chakra-ui/react";
import NextImage from "next/image";

import { SEO } from "../components/seo";
import PokeList from "../components/PokeList";


async function getPokemon(){
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
   const json = await res.json()
  return Object.entries(json)
}

async function getPokemonData(pokemon) {
  const pokemonData = await Promise.all(
    pokemon[3][1].map(async (item) => {
      let url =  item.url
      const res = await fetch(url)
      const json = await res.json()
      return json
    })
  )

  return pokemonData
}

// This function gets called at build time
export async function getStaticProps() {
  const pokemon = await getPokemon()
  console.log(pokemon)
  
  const pokemonData = await getPokemonData(pokemon)
  


  // By returning { props: { pokemon } }, the Home component
  // will receive `pokemon` as a prop at build time
  return {
    props: {
      pokemon,
      pokemonData
    },
  };
}


  

const Home = ({pokemon,pokemonData}) => (
  <>
    <SEO title="Pokemon" />

   <PokeList pokemonData={pokemonData} pokemon={pokemon}/> 
  </>
);

export default Home;