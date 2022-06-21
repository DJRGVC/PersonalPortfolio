import { Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import BackToHome from "./BackToHome";
import Hamburger from "./Hamburger";
import React from "react";

const NavBar = () => {
  return (
    <Flex
      w="100vw"
      h="10vh"
      backgroundColor={useColorModeValue("brand.300", "brand.200")}
      position="fixed"
      zIndex={50}
      align="center"
      justify="space-between"
      p={8}
      opacity=".9"
    >
      <Flex paddingBottom={{ base: "8vw", md: "5vw", lg: "3vw" }}>
        <Hamburger />
      </Flex>
      <HStack margin={{ base: "0", md: ".75vw", lg: "1.5vw" }}>
        <BackToHome />
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  );
};

export default NavBar;
