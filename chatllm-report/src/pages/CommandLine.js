
import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const CommandLine = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Command Line
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        In this project we mainly used Command Line to fine-tune the models.
      </Text>
      <Image src="pictures/report_pic_8.png" alt="Evaluate & Predict trained models" mb={4} />
      <Text fontSize="lg" mb={4} textAlign="justify">
        Here is the basic Command Line with its comments. And more command line interface introduction can be found on the LLaMA-Factory homepage and by using ‘llamafactory-cli help’ to show help information.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        More of our work and command line introduction will be shown in 6.2 Exploring Hyperparameter Setting.
      </Text>
    </Box>
  );
};

export default CommandLine;
