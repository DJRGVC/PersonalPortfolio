import { Flex, HStack, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import BackToHome from "./BackToHome";
import Hamburger from "./Hamburger";
import React from "react";

const NavBar = () => {
  return (
    <Flex
      w="100%"
      h="10%"
      backgroundColor={useColorModeValue("brand.300", "brand.200")}
      position="fixed"
      zIndex={50}
      align="center"
      justify="space-between"
      p={8}
      opacity=".9"
    >
      <Flex
        margin={4}
        position="fixed"
        top="-1%"
        paddingLeft={{ base: "16vw", md: "30vw", lg: "36vw" }}
      >
        <Hamburger />
      </Flex>
      <HStack margin={4} zIndex={100} justifyContent="right">
        <BackToHome />
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  );
};

export default NavBar;
