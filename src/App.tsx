import React, { createRef, Ref, useLayoutEffect, useRef } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  extendTheme,
  VStack,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import LandingPage from "./components/LandingPage";

const colors = {
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
  },
  styles: {
    global: {
      body: {
        background: "blue",
      },
    },
  },
};

export interface IPages {
  pages: {
    reference: React.MutableRefObject<HTMLDivElement>;
  }[];
}

const theme = extendTheme({ colors });

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <VStack spacing={4} align="center">
        <div id="landing-page">
          <LandingPage />
        </div>
        <div id="about-me">
          <AboutMe />
        </div>
        <div id="education">
          <AboutMe />
        </div>
        <div id="skills">
          <AboutMe />
        </div>
        <div id="contact-me">
          <AboutMe />
        </div>
      </VStack>
    </ChakraProvider>
  );
};
