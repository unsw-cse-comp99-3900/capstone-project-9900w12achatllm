// src/pages/Bleu4.js
import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const Bleu4 = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        BLEU-4
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        For our two selected datasets, PubMedQA is question-and-answer and MedQA is multiple-choice. Based on the different nature of these two datasets, different metrics were selected for model performance evaluation. For PubMedQA, BLEU-4 and ROUGE-L were used because BLEU-4 and ROUGE-L are used to assess the similarity of the linguistic quality and content of the generated answers to the real answers, which is suitable for evaluating open-ended Q&A systems; for MedQA, Accuracy was used because the questions are multiple-choice based, which is a direct reflection of the model's ability to select the correct answers.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The BLEU algorithm is used to evaluate the translation quality in machine translation tasks. The core idea is to judge the accuracy of the translation by calculating the degree of n-gram matching between the candidate translation and the reference translation. N-gram refers to n consecutive words in a sentence. Precision is the proportion of n-grams in a candidate translation that appear in the reference translation. The formula for BLEU-N is:
      </Text>
      <Image src="pictures/report_fomula_1_4.1.1.jpg" alt="Bleu-4 formula 1" mb={4} />
      <Image src="pictures/report_formula_4.1.1_2.png" alt="Bleu-4 formula 2" mb={4} />
      <Text fontSize="lg" mb={4} textAlign="justify">
        Where BP is the brevity penalty, which is used to penalize candidate sentences that are too short; is the weight of each n-gram, usually equal weight; and is the precision of the n-gram. BLEU-4 specifically refers to the computation of the overlap to the 4-gram. We choose the 4-gram because longer n-grams (e.g., 5-grams or more) can theoretically provide the fluency and correctness of translations in more detail, but beyond 4-grams the advantage decreases because they increase computational complexity and processing time without a corresponding increase in evaluation accuracy (Code Labs Academy, 2024).
      </Text>
    </Box>
  );
};

export default Bleu4;
