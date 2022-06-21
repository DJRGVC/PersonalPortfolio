import {
  Box,
  Progress,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Skills = () => {
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
      <VStack margin={10} padding="0%" spacing={10}>
        <Text
          textAlign="center"
          fontSize={50}
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          fontWeight="bold"
          borderRadius={10}
          padding={3}
          textColor={useColorModeValue("white", "brand.400")}
          w={{ base: "80vw", md: "60vw", lg: "40vw" }}
          _hover={{ opacity: ".8" }}
        >
          Skills
        </Text>
        <Box
          width="100%"
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          borderRadius={10}
          p={3}
          marginTop={90}
        >
          <Text
            textColor={useColorModeValue("white", "brand.400")}
            fontSize={20}
            fontWeight="bold"
            padding={1}
          >
            Java
          </Text>
          <Progress
            borderRadius={10}
            colorScheme={useColorModeValue("teal", "red")}
            size="lg"
            value={90}
            width="90%"
          />
        </Box>
        <Box
          width="100%"
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          borderRadius={10}
          p={3}
          marginTop={90}
        >
          <Text
            textColor={useColorModeValue("white", "brand.400")}
            fontSize={20}
            fontWeight="bold"
            padding={1}
          >
            Python
          </Text>
          <Progress
            borderRadius={10}
            colorScheme={useColorModeValue("teal", "red")}
            size="lg"
            value={85}
            width="90%"
          />
        </Box>
        <Box
          width="100%"
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          borderRadius={10}
          p={3}
          marginTop={90}
        >
          <Text
            textColor={useColorModeValue("white", "brand.400")}
            fontSize={20}
            fontWeight="bold"
            padding={1}
          >
            JavaScript/TypeScript
          </Text>
          <Progress
            borderRadius={10}
            colorScheme={useColorModeValue("teal", "red")}
            size="lg"
            value={75}
            width="90%"
          />
        </Box>
        <Box
          width="100%"
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          borderRadius={10}
          p={3}
          marginTop={90}
        >
          <Text
            textColor={useColorModeValue("white", "brand.400")}
            fontSize={20}
            fontWeight="bold"
            padding={1}
          >
            React
          </Text>
          <Progress
            borderRadius={10}
            colorScheme={useColorModeValue("teal", "red")}
            size="lg"
            value={68}
            width="90%"
          />
        </Box>
        <Box
          width="100%"
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          borderRadius={10}
          p={3}
          marginTop={90}
        >
          <Text
            textColor={useColorModeValue("white", "brand.400")}
            fontSize={20}
            fontWeight="bold"
            padding={1}
          >
            HTML/CSS
          </Text>
          <Progress
            borderRadius={10}
            colorScheme={useColorModeValue("teal", "red")}
            size="lg"
            value={60}
            width="90%"
          />
        </Box>
        <Box
          width="100%"
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          borderRadius={10}
          p={3}
          marginTop={90}
        >
          <Text
            textColor={useColorModeValue("white", "brand.400")}
            fontSize={20}
            fontWeight="bold"
            padding={1}
          >
            C++
          </Text>
          <Progress
            borderRadius={10}
            colorScheme={useColorModeValue("teal", "red")}
            size="lg"
            value={55}
            width="90%"
          />
        </Box>
        <Box
          width="100%"
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          borderRadius={10}
          p={3}
          marginTop={90}
        >
          <Text
            textColor={useColorModeValue("white", "brand.400")}
            fontSize={20}
            fontWeight="bold"
            padding={1}
          >
            Blender
          </Text>
          <Progress
            borderRadius={10}
            colorScheme={useColorModeValue("teal", "red")}
            size="lg"
            value={40}
            width="90%"
          />
        </Box>
        <Box
          width="100%"
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          borderRadius={10}
          p={3}
          marginTop={90}
        >
          <Text
            textColor={useColorModeValue("white", "brand.400")}
            fontSize={20}
            fontWeight="bold"
            padding={1}
          >
            PyTorch
          </Text>
          <Progress
            borderRadius={10}
            colorScheme={useColorModeValue("teal", "red")}
            size="lg"
            value={30}
            width="90%"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Skills;
