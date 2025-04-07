import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack align="stretch" bg="white" borderRadius="lg">
    <Image rounded="lg" src={imageSrc} />
    <Heading ml={4} as='h1' size='md' color="black">{title}</Heading>
    <Text m={4} color="gray">{description}</Text>
    <HStack mb={4}>
      <Text  ml={4} color="gray">See more</Text>
      <FontAwesomeIcon icon={faArrowRight} color="black" size="1x" />
    </HStack>
  </VStack>
  );
};

export default Card;
