// src/pages/RougeL.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const RougeL = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        ROUGE-L
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        ROUGE-L uses the longest common subsequence to measure the degree of similarity between the generated text and the reference text. Unlike BLEU, ROUGE focuses more on Recall, which is the proportion of reference text fragments contained in the generated text. The Longest Common Subsequence (LCS) is the longest identical subsequence of two sequences. For example, the LCS of ‘machine learning’ and ‘learning machine’ is ‘learning’.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The main purpose of ROUGE-L is to evaluate the coverage of the generated summaries, not the exact match.
      </Text>
    </Box>
  );
};

export default RougeL;
