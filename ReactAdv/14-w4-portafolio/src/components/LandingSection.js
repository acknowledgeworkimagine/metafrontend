import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am El Pete";
const bio1 = "A frontend enthusiast";
const bio2 = "interested in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <VStack>
    <Avatar size='xl' src="https://i.pravatar.cc/150?img=66" />
      <Heading as='h1' size='md'>{greeting}</Heading>
      <Heading as='h1'>{bio1}</Heading>
      <Heading as='h1'>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
