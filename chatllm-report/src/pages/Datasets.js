// src/pages/Datasets.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Datasets = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Datasets
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        For our project design we choose two medical domain datasets. One of them is the PubMedQA, which is a dataset designed for biomedical research QA. The format is long answering questions, and it is made up of three subsets: PQA-Labeled (1,000 instances), PQA-Unlabeled (61,200 instances), PQA-Artificial (211,300 instances) (Jin, Qiao et al, 2019). The other one is MedQA, a large-scale OpenQA dataset from professional medical board exams, in the format of single choice questions, which covers three languages: English, simplified Chinese, and traditional Chinese (Jin, Di, et al, 2021).
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The reason why we chose PubMedQA as our dataset is because the dataset is biomedical text and covers a wide range of biomedical topics. It has a high degree of correlation and consistency between questions and contexts with a high degree of logic. The best-performing model using multi-phase fine-tuning of BioBERT achieved 68.1% accuracy, which is significantly lower than the single-human performance of 78.0%, so exploring this dataset could encourage the development of better systems.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Similarly, we chose MedQA as our dataset because it reflects a real-world scenario simulation of a complex medical problem, where doctors must integrate knowledge from multiple sources to make informed clinical decisions. At the same time, the dataset is extracted from professional exams, ensuring high-quality questions. Like PubMedQA, the dataset also challenges existing OpenQA models, demonstrating the complexity and difficulty of the dataset, so that exploration can encourage advances in the field.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        In summary, our team believes that these datasets are the ideal choices for testing scientific models and training models.
      </Text>
    </Box>
  );
};

export default Datasets;
