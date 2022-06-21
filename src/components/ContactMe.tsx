import {
  Box,
  HStack,
  IconButton,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  AiFillLinkedin,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillMail,
} from "react-icons/ai";

const ContactMe = () => {
  const SwitchGithubIcon = useColorModeValue(AiFillGithub, AiOutlineGithub);
  const SwitchEmailIcon = useColorModeValue(AiFillMail, AiOutlineMail);
  const SwitchLinkedInIcon = useColorModeValue(
    AiFillLinkedin,
    AiOutlineLinkedin
  );

  return (
    <Box
      bg={useColorModeValue("brand.300", "brand.100")}
      w="95vw"
      paddingLeft={100}
      margin="auto"
      borderRadius={10}
      p={4}
      color="white"
      marginBottom={5}
    >
      <VStack margin={10} spacing={10}>
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
          Contact Me
        </Text>
        <HStack spacing={10}>
          <Link href="mailto:dgrant2@bowdoin.edu">
            <IconButton
              aria-label="Email"
              icon={<SwitchEmailIcon />}
              size="lg"
              fontSize="lg"
              variant="ghost"
              color="current"
              marginLeft="2"
              backgroundColor="brand.250"
              textColor={useColorModeValue("brand.400", "offwhite")}
              _hover={{ bg: useColorModeValue("brand.200", "brand.300") }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/daniel-grant-a85683221/">
            <IconButton
              aria-label="LinkedIn"
              icon={<SwitchLinkedInIcon />}
              size="lg"
              fontSize="lg"
              variant="ghost"
              color="current"
              marginLeft="2"
              backgroundColor="brand.250"
              textColor={useColorModeValue("brand.400", "offwhite")}
              _hover={{ bg: useColorModeValue("brand.200", "brand.300") }}
            ></IconButton>
          </Link>
          <Link href="https://github.com/DJRGVC">
            <IconButton
              aria-label="GitHub"
              icon={<SwitchGithubIcon />}
              size="lg"
              fontSize="lg"
              variant="ghost"
              color="current"
              marginLeft="2"
              backgroundColor="brand.250"
              textColor={useColorModeValue("brand.400", "offwhite")}
              _hover={{ bg: useColorModeValue("brand.200", "brand.300") }}
            />
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ContactMe;
