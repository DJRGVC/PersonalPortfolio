import {
  Box,
  Divider,
  Hide,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import BellarmineLogo from "./Images/BellarmineLogo.png";
import BowdoinLogo from "./Images/BowdoinLogo.png";
import React from "react";

const Education = () => {
  return (
    <Box
      bg={useColorModeValue("brand.300", "brand.100")}
      w="95vw"
      borderRadius={10}
    >
      <VStack>
        <Text
          textAlign="center"
          fontSize={50}
          backgroundColor={useColorModeValue("brand.350", "brand.200")}
          fontWeight="bold"
          borderRadius={10}
          padding={3}
          marginTop={8}
          textColor={useColorModeValue("white", "brand.400")}
          w={{ base: "80vw", md: "60vw", lg: "40vw" }}
          _hover={{ opacity: ".8" }}
        >
          Education
        </Text>
        <Tabs
          variant="solid-rounded"
          colorScheme={useColorModeValue("teal", "red")}
          textColor={useColorModeValue("white", "brand.400")}
          size={{ base: "md", lg: "lg" }}
          width="92vw"
          isFitted
        >
          <TabList padding={3}>
            <Tab
              _hover={{
                bg: useColorModeValue("teal", "red"),
                opacity: ".5",
              }}
              margin={1}
              textColor={useColorModeValue("white", "brand.400")}
            >
              Highschool
            </Tab>
            <Tab
              _hover={{
                bg: useColorModeValue("teal", "red"),
                opacity: ".5",
              }}
              margin={1}
              textColor={useColorModeValue("white", "brand.400")}
            >
              College
            </Tab>
            <Tab
              isDisabled
              textColor={useColorModeValue("#d3d3d3", "brand.300")}
            >
              Graduate School?
            </Tab>
          </TabList>
          <Divider
            backgroundColor={useColorModeValue("teal", "brand.1000")}
            width="90%"
            size="5"
            variant="solid"
            orientation="horizontal"
            borderRadius={10}
            p={2}
            margin="auto"
          />

          <TabPanels>
            <TabPanel>
              <HStack spacing={5} p={5} justifyContent="center">
                <VStack margin={10} spacing={10}>
                  <Hide above="md">
                    <Image
                      src={BellarmineLogo}
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
                      w={{ base: "80vw", md: "60vw", lg: "50vw" }}
                      backgroundColor={useColorModeValue(
                        "brand.350",
                        "brand.200"
                      )}
                      fontWeight="bold"
                      borderRadius={10}
                      padding={3}
                      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    >
                      Bellarmine College Preparatory
                    </Text>
                  </Box>
                  <Divider
                    backgroundColor={useColorModeValue("teal", "brand.1000")}
                    width="70%"
                    size="5"
                    variant="solid"
                    borderRadius={10}
                    shadow="2xl"
                    height={4}
                    orientation="horizontal"
                  />
                  <Box
                    backgroundColor={useColorModeValue(
                      "brand.350",
                      "brand.200"
                    )}
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
                    Bellarmine College Preparatory is located in San Jose,
                    California, where I grew up. It is a all-boys Jesuit
                    highschool whose mascot is, as the name may suggest, a Bell.
                    I loved my time there, and since graduating in 2021, I have
                    continued to be guided by Bellarmine's Jesuit teachings. Go
                    Bells! 🔔🔔🔔
                  </Box>
                </VStack>
                <Hide below="md">
                  <Image
                    src={BellarmineLogo}
                    borderRadius={1000000}
                    w={72}
                    bgGradient={useColorModeValue(
                      "linear(to-l, brand.1200, brand.1000)",
                      "linear(to-l, brand.1000, brand.1200)"
                    )}
                    boxShadow="dark-lg"
                  />
                </Hide>
              </HStack>
            </TabPanel>

            <TabPanel>
              <HStack spacing={5} p={5} justifyContent="center">
                <VStack margin={10} spacing={10}>
                  <Hide above="md">
                    <Image
                      src={BowdoinLogo}
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
                      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                      backgroundColor={useColorModeValue(
                        "brand.350",
                        "brand.200"
                      )}
                      fontWeight="bold"
                      borderRadius={10}
                      padding={3}
                      w={{ base: "80vw", md: "60", lg: "50vw" }}
                    >
                      Bowdoin College
                    </Text>
                  </Box>
                  <Divider
                    backgroundColor={useColorModeValue("teal", "brand.1000")}
                    width="70%"
                    size="5"
                    variant="solid"
                    borderRadius={10}
                    shadow="2xl"
                    height={4}
                    orientation="horizontal"
                  />
                  <Box
                    backgroundColor={useColorModeValue(
                      "brand.350",
                      "brand.200"
                    )}
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
                    I am currently attending Bowdoin College, and will be
                    starting my sophomore year this Fall. I am studying Computer
                    Science and Mathematics, and am considering a physics minor.
                    I decided to go the route of a smaller, liberal-arts college
                    to foster personal connections with a smaller, tight-knit
                    community. Thus far Bowdoin has been everything I was hoping
                    for and more! 🐻‍❄️
                  </Box>
                </VStack>
                <Hide below="md">
                  <Image
                    src={BowdoinLogo}
                    borderRadius={1000}
                    w={72}
                    bgGradient={useColorModeValue(
                      "linear(to-l, brand.1200, brand.1000)",
                      "linear(to-l, brand.1000, brand.1200)"
                    )}
                    boxShadow="dark-lg"
                  />
                </Hide>
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default Education;
