import React from "react";
import {
  Box,
  Center,
  VStack,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Characteristics = ({ pokemon }) => {
  const svgIcons = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M5.75 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H5.75z" fill="#4a5568"/><path d="M9.222 14.219a.75.75 0 0 1 .976-.073l.084.073l1.22 1.221v-3.07l-.002-.026V8.56l-1.22 1.221l-.084.073a.75.75 0 0 1-1.049-1.05l.073-.084l2.367-2.37a.77.77 0 0 1 .664-.35c.252 0 .475.109.611.276l.053.075l2.367 2.37l.073.084a.75.75 0 0 1 .007.882l-.08.094l-.084.073a.75.75 0 0 1-.883.007l-.094-.08L13 8.56v3.07l.002.026v3.784l1.221-1.221a.75.75 0 0 1 .977-.073l.084.073a.75.75 0 0 1 .072.976l-.072.085l-2.367 2.37a.77.77 0 0 1-.664.35a.77.77 0 0 1-.664-.35l-2.367-2.37a.75.75 0 0 1 0-1.061z" fill="#4a5568"/><path d="M5 20.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75z" fill="#4a5568"/></g></svg>`,
      iconDescription: "Height",
      location: "height2.svg",
      value: `${pokemon.height}`,
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M510.28 445.86l-73.03-292.13c-3.8-15.19-16.44-25.72-30.87-25.72h-60.25c3.57-10.05 5.88-20.72 5.88-32c0-53.02-42.98-96-96-96s-96 42.98-96 96c0 11.28 2.3 21.95 5.88 32h-60.25c-14.43 0-27.08 10.54-30.87 25.72L1.72 445.86C-6.61 479.17 16.38 512 48.03 512h415.95c31.64 0 54.63-32.83 46.3-66.14zM256 128c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32s-14.36 32-32 32z" fill="#4a5568"/></svg>`,
      iconDescription: "Weight",
      location: "weight2.svg",
      value: `${pokemon.weight}`,
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M8 20.5a6 6 0 0 1-6-6c0-3.314 3-9 6-9s6 5.686 6 9a6 6 0 0 1-6 6zm6.612-2.161A5.976 5.976 0 0 0 16 14.5c0-2.518-1.732-6.405-3.88-8.127C13.213 4.727 14.607 3.5 16 3.5c3 0 6 5.686 6 9a6 6 0 0 1-7.388 5.839z" fill="#4a5568"/></svg>`,
      iconDescription: "Base XP",
      location: "xp1.svg",
      value: `${pokemon.base_experience}`,
    },
  ];

  const getValue = (icon, pokemon) => {
    if (icon.iconDescription == "Height" || "Weight" || "Base XP") {
      return icon.value;
    }
    if (icon.iconDescription == "Abilities") {
      pokemon.abilities.map((ability) => {
        return <Text key="ability.name">{ability.name}</Text>;
      });
    }
    if (icon.iconDescription === "Gender") {
      return (
        <HStack>
          <Image w="1em" h="1em" src="/gmale.svg" />
          <Image w="1em" h="1em" src="/gfemale.svg" />
        </HStack>
      );
    }
  }; //end getValue

  return (
    <Box>
      <Grid
        borderRadius="lg"
        bgColor="gray.100"
        templateColumns="repeat(3,1fr)"
      >
        {svgIcons.map((icon) => {
          return (
            <GridItem p=".5em" m="0.5em 0" key={icon.iconDescription}>
              <Center>
                <VStack color="gray.600" m="0">
                  <Box>
                    <Image w="1.5em" h="1.5em" src={`/${icon.location}`} />
                  </Box>
                  <Text fontWeight="600" fontSize="xs">
                    {icon.iconDescription}
                  </Text>
                  <Text>{icon.value}</Text>
                </VStack>
              </Center>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Characteristics;
