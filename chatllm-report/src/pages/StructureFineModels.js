import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';

const StructureFineModels = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>Our Structure of Fine-tuning the Models</Heading>
      <Image src="/pictures/StructureFineModels.png" alt="Structure of Fine-tuning Models" />
      <Text mt={4}>
        In this project, we will follow above structure diagram to experiments and collect the results, we will use Llama-Factory to train the models with different fine-tuning methods and datasets. Our choices of models, fine-tuning methods and datasets with its reasons of why we choose them will be explained in the next chapter.
      </Text>
    </Box>
  );
};

export default StructureFineModels;
