import { Box, Flex, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import DropDownIcon from "./DropDownIcon";
import { Destination } from "./Hamburger";

const DropDownMenu: React.FC<any> = ({ location, onToggle }) => {
  return (
    <Box
      h="fit-content"
      w="fit-content"
      p={4}
      backgroundColor={useColorModeValue("brand.400", "brand.100")}
      borderRadius={10}
      display="flex"
      justifyContent="center"
    >
      <VStack>
        {location.map((place: { name: string; address: string }) => {
          return (
            <DropDownIcon
              name={place.name}
              address={place.address}
              onToggle={onToggle}
            />
          );
        })}
      </VStack>
    </Box>
  );
};

export default DropDownMenu;
