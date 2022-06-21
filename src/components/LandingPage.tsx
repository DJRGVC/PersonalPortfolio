import {
  Box,
  Center,
  Hide,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import MeAndChloe from "./Images/MeAndChloe.jpg";
import MeAndChloeBig from "./Images/MeAndChloeBig.jpg";

const LandingPage = () => {
  return (
    <Box
      bg={useColorModeValue("brand.300", "brand.100")}
      w="95vw"
      borderRadius={10}
      color="white"
      marginLeft="auto"
      marginRight="auto"
      marginTop="12vh"
    >
      <Center textAlign="center">
        <Text
          position="absolute"
          textAlign="center"
          marginTop="25%"
          padding={3}
          fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          fontWeight="bold"
          textColor={useColorModeValue("white", "brand.400")}
          opacity=".9"
          _hover={{ fontWeight: "extrabold", opacity: "1" }}
          borderRadius={10}
        >
          Hi There! I'm Daniel Grant.
        </Text>
      </Center>
      <Hide below="md">
        <Image
          borderRadius={10}
          src={MeAndChloeBig}
          width="100%"
          height="auto"
        />
      </Hide>
      <Hide above="md">
        <Image borderRadius={10} src={MeAndChloe} width="100%" height="auto" />
      </Hide>
    </Box>
  );
};

export default LandingPage;
