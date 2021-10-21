import { chakra } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image"

const Logo = () => (
  <>
    <NextLink  href="/">
      <chakra.a pt="0.3em" href="/" userSelect="none" fontSize="2rem" fontWeight="700">
        <Image src="/pokemon.svg" width="120px" height="50px"  />
      </chakra.a>
    </NextLink>
  </>
);

export default Logo;
