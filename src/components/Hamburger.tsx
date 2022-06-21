import React from "react";
import {
  Collapse,
  useDisclosure,
  VStack,
  useColorModeValue,
  IconButton,
  Box,
} from "@chakra-ui/react";
import DropDownMenu from "./DropDownMenu";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export interface Destination {
  location: {
    name: string;
    address: string;
  }[];
}

const Hamburger = () => {
  const { isOpen, onToggle } = useDisclosure();
  const SwitchIcon = isOpen ? CloseIcon : HamburgerIcon;

  const locations: Destination["location"] = [
    { name: "Home", address: "landing-page" },
    { name: "About Me", address: "about-me" },
    { name: "Education", address: "education" },
    { name: "Skills", address: "skills" },
    { name: "Contact Me", address: "contact-me" },
  ];

  return (
    <VStack spacing={3} position="fixed" align="flex-start">
      <IconButton
        onClick={onToggle}
        size="md"
        fontSize="lg"
        icon={<SwitchIcon />}
        variant="ghost"
        backgroundColor="brand.250"
        textColor={useColorModeValue("brand.400", "offwhite")}
        _hover={{ bg: useColorModeValue("brand.200", "brand.300") }}
        aria-label={`Open Hamburger Menu`}
        marginBottom="1vh"
      />
      <Box>
        <Collapse in={isOpen} animateOpacity>
          <DropDownMenu location={locations} onToggle={onToggle} />
        </Collapse>
      </Box>
    </VStack>
  );
};

export default Hamburger;
