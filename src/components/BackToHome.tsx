import { Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-scroll";

const BackToHome = () => {
  return (
    <Button
      variant="solid"
      backgroundColor="brand.250"
      textColor={useColorModeValue("brand.500", "white")}
      fontSize="115%"
      _hover={{ bg: useColorModeValue("brand.200", "brand.300") }}
    >
      <Link
        to="landing-page"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Daniel Grant
      </Link>
    </Button>
  );
};

export default BackToHome;
