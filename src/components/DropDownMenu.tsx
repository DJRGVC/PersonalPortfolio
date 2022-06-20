import { Box, Flex, useColorModeValue, VStack } from "@chakra-ui/react";
import DropDownIcon from "./DropDownIcon";
import { Destination } from "./Hamburger";

const DropDownMenu: React.FC<Destination> = ({ location }) => {
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
        {location.map((place) => {
          return <DropDownIcon name={place.name} address={place.address} />;
        })}
      </VStack>
    </Box>
  );
};

export default DropDownMenu;
