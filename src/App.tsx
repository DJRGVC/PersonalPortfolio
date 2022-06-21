import {
  ChakraProvider,
  extendTheme,
  VStack,
  ThemeConfig,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import LandingPage from "./components/LandingPage";
import { mode } from "@chakra-ui/theme-tools";
import Education from "./components/Education";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Background from "./components/Background";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  initialColorMode: "dark",
  brand: {
    100: "#cdd4db",
    200: "#a2b4c3",
    250: "#738697",
    300: "#44586a",
    350: "#283D4D",
    400: "#0b212f",
    500: "#010812",
    1000: "#FF6962",
    1100: "#FF681F",
    1200: "#FF9F00",
    1300: "#F6D12E",
    1400: "white",
  },
  styles: {
    global: () => ({
      body: {
        bg: mode("#F6D12E", "#F6D12E"),
      },
    }),
  },
};

export interface IPages {
  pages: {
    reference: React.MutableRefObject<HTMLDivElement>;
  }[];
}

const theme = extendTheme({ colors, config });

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Background />
      <NavBar />
      <VStack spacing={4} align="center">
        <div id="landing-page">
          <LandingPage />
        </div>
        <div id="about-me">
          <AboutMe />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="contact-me">
          <ContactMe />
        </div>
      </VStack>
    </ChakraProvider>
  );
};
