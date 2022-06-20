import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Destination } from "./Hamburger";
import { Link } from "react-scroll";

const DropDownIcon: React.FC<any> = ({ name, address }) => {
  return (
    <Button
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      backgroundColor="brand.250"
      textColor={useColorModeValue("brand.400", "offwhite")}
      _hover={{ bg: useColorModeValue("brand.200", "brand.300") }}
      aria-label={`Hamburger Dropdown Menu Button`}
    >
      <Link to={address} spy={true} smooth={true} offset={-75} duration={500}>
        {name}
      </Link>
    </Button>
  );
};

export default DropDownIcon;
