import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Background = () => {
  return (
    <Box
      zIndex={-50}
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      background={useColorModeValue("brand.400", "brand.1400")}
    />
  );
};

export default Background;
