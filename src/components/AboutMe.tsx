import {
  Box,
  Divider,
  Hide,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import JustMeSquare from "./Images/JustMeSquare.png";

const AboutMe = () => {
  return (
    <Box
      bg={useColorModeValue("brand.300", "brand.100")}
      w="95vw"
      paddingLeft={100}
      margin="auto"
      borderRadius={10}
      p={4}
      color="white"
    >
      <HStack spacing={5} p={5} justifyContent="center">
        <Hide below="md">
          <Image
            src={JustMeSquare}
            borderRadius={1000000}
            w={72}
            bgGradient={useColorModeValue(
              "linear(to-l, brand.1200, brand.1000)",
              "linear(to-l, brand.1000, brand.1200)"
            )}
            boxShadow="dark-lg"
          />
        </Hide>
        <VStack margin={10} padding="0%" spacing={10}>
          <Hide above="md">
            <Image
              src={JustMeSquare}
              borderRadius={1000000}
              w="70vw"
              bgGradient={useColorModeValue(
                "linear(to-l, brand.1200, brand.1000)",
                "linear(to-l, brand.1000, brand.1200)"
              )}
              boxShadow="dark-lg"
            />
          </Hide>
          <Box
            textColor={useColorModeValue("white", "brand.400")}
            borderRadius="10px"
            _hover={{ opacity: ".8" }}
            textAlign="center"
          >
            <Text
              textAlign="center"
              fontSize={50}
              backgroundColor={useColorModeValue("brand.350", "brand.200")}
              fontWeight="bold"
              borderRadius={10}
              padding={3}
              w={{ base: "80vw", md: "50vw", lg: "40vw" }}
            >
              About Me
            </Text>
          </Box>
          <Divider
            backgroundColor={useColorModeValue("teal", "brand.1000")}
            width="70%"
            size="5"
            borderRadius={10}
            height={4}
            orientation="horizontal"
          />
          <Box
            backgroundColor={useColorModeValue("brand.350", "brand.200")}
            w="100%"
            borderRadius={10}
            p={4}
            color="white"
            marginLeft="auto"
            marginRight="auto"
            marginTop={90}
            textColor={useColorModeValue("white", "brand.400")}
            fontSize={20}
            textAlign="center"
          >
            My name is Daniel Grant, and I am a Student and Software Engineer. I
            am excited by creating fun projects with new and interesting tools
            and frameworks, and just overall love coding! Please reach out to me
            regarding work if interested as I am looking for new projects to get
            involved with. Thank you for checking out my website!
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AboutMe;
