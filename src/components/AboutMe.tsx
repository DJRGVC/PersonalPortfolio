import {
  Box,
  Divider,
  Hide,
  HStack,
  Image,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import JustMeSquare from "./Images/JustMeSquare.png";

const AboutMe = () => {
  const myRef = React.useRef(null);

  return (
    <Box
      bg={useColorModeValue("brand.300", "brand.100")}
      w="95%"
      paddingLeft={100}
      margin="auto"
      borderRadius={10}
      p={4}
      color="white"
    >
      <HStack spacing={5} p={5}>
        <Hide below="lg">
          <Image
            src={JustMeSquare}
            borderRadius={1000000}
            w={72}
            bgGradient={useColorModeValue(
              "linear(to-l, brand.1200, brand.1000)",
              "linear(to-l, brand.1000, brand.1200)"
            )}
            boxShadow="outline"
          />
        </Hide>
        <VStack margin={10} padding="5%" spacing={10}>
          <Hide above="lg">
            <Image
              src={JustMeSquare}
              borderRadius={1000000}
              w={72}
              bgGradient={useColorModeValue(
                "linear(to-l, brand.1200, brand.1000)",
                "linear(to-l, brand.1000, brand.1200)"
              )}
              boxShadow="outline"
            />
          </Hide>
          <Box
            textColor={useColorModeValue("white", "brand.400")}
            w="fit-content"
            h="fit-content"
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
            >
              About Me
            </Text>
          </Box>
          <Divider
            backgroundColor={useColorModeValue("brand.1200", "brand.1000")}
            borderRadius={10}
            shadow="2xl"
            width="70%"
            height={4}
            orientation="horizontal"
            variant="solid"
            size="5"
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
            My name is Daniel Grant, and I am a Student and Software Developer.
            I am excited by creating fun projects with new and interesting
            tools, and just overall love coding! Thank you for checking out my
            website!
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AboutMe;
