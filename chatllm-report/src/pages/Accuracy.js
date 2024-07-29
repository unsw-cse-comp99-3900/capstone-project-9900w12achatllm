// src/pages/Dataset2.js
import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Accuracy = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Accuracy
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Accuracy is a very straightforward and commonly used statistical metric to assess the overall performance of a classification model. It calculates the proportion of instances correctly predicted by the model out of the total number of instances. For our current choice of dataset MedQA is multiple-choice, which means each question has multiple options but usually only one correct answer. Therefore, accuracy is directly calculated as the ratio of the number of times the correct answer is chosen to the total number of questions.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The formula is:
      </Text>
      <Image src="pictures/report_formula_3_4.1.3.jpg" alt="Accuracy formula" mb={4} />
    </Box>
  );
};

export default Accuracy;
