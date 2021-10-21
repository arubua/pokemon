import React from "react";
import {
  VStack,
  Image,
  Text,
  Box,
  Flex,
  Center,
  HStack,
  Badge,
} from "@chakra-ui/react";

import Link from "next/link";
import Characteristics from "./Characteristics";

const PokeList = (props) => {
  const { pokemon, pokemonData } = props;

  return (
    <>
      <Flex justifyContent="center" flexWrap="wrap">
        {pokemonData.map((pokemon) => {
          return (
            <Link
              href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`}
              isExternal
              key={pokemon.name}
            >
              <VStack
                _hover={{
                  boxShadow: "2xl",
                  cursor: "pointer",
                }}
                borderRadius="2xl"
                bo
                m="1em"
                p="1em"
                border="1px solid teal"
              >
                <Box
                  border="3px solid teal"
                  p="0.5em"
                  borderRadius="50%"
                  mb="1.5em"
                >
                  <Image src={pokemon.sprites.front_default} />
                </Box>
                <Center>
                  <VStack mb="1.5em">
                    <Text>{pokemon.name}</Text>
                    <Text>#{pokemon.id}</Text>
                    <HStack color="teal">
                      {pokemon.types.map((type) => {
                        return (
                          <Badge colorScheme="teal" key={type.type.name}>
                            {type.type.name}
                          </Badge>
                        );
                      })}
                    </HStack>
                  </VStack>
                </Center>
                <Characteristics pokemon={pokemon} />
              </VStack>
            </Link>
          );
        })}
      </Flex>
    </>
  );
};

export default PokeList;
