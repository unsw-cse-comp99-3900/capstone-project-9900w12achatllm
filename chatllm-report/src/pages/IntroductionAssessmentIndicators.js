// src/pages/IntroductionAssessmentIndicators.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import MathJax from 'react-mathjax-preview';

const IntroductionAssessmentIndicators = () => {
  const bleuFormula = `BLEU-N = BP \\times \\exp\\left( \\sum_{n=1}^{N} W_n \\log P_n \\right)`;
  const bpFormula = `BP = \\begin{cases} 1 & \\text{if } l_c > l_s \\\\ e^{1 - \\frac{l_s}{l_c}} & \\text{if } l_c \\leq l_s \\end{cases}`;
  const accuracyFormula = `\\text{Accuracy} = \\frac{\\text{Number of correct answers}}{\\text{Total number of questions}}`;

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Introduction of the Assessment Indicators
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        For our two selected datasets, PubMedQA is question-and-answer and MedQA is multiple-choice. Based on the different nature of these two datasets, different metrics were selected for model performance evaluation. For PubMedQA, BLEU-4 and ROUGE-L were used because BLEU-4 and ROUGE-L are used to assess the similarity of the linguistic quality and content of the generated answers to the real answers, which is suitable for evaluating open-ended Q&A systems; for MedQA, Accuracy was used because the questions are multiple-choice based, which is a direct reflection of the model's ability to select the correct answers.
      </Text>
      <Heading as="h2" size="lg" mb={4} mt={4}>
        BLEU-4
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The BLEU algorithm is used to evaluate the translation quality in machine translation tasks. The core idea is to judge the accuracy of the translation by calculating the degree of n-gram matching between the candidate translation and the reference translation. N-gram refers to n consecutive words in a sentence. Precision is the proportion of n-grams in a candidate translation that appear in the reference translation. The formula for BLEU-N is:
      </Text>
      <MathJax math={`\\[${bleuFormula}\\]`} />
      <MathJax math={`\\[${bpFormula}\\]`} />
      <Text fontSize="lg" mb={4} textAlign="justify">
        Where BP is the brevity penalty, which is used to penalize candidate sentences that are too short; is the weight of each n-gram, usually equal weight; and is the precision of the n-gram. BLEU-4 specifically refers to the computation of the overlap to the 4-gram. We choose the 4-gram because longer n-grams (e.g., 5-grams or more) can theoretically provide the fluency and correctness of translations in more detail, but beyond 4-grams the advantage decreases because they increase computational complexity and processing time without a corresponding increase in evaluation accuracy (Code Labs Academy, 2024).
      </Text>
      <Heading as="h2" size="lg" mb={4} mt={4}>
        ROUGE-L
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        ROUGE-L uses the longest common subsequence to measure the degree of similarity between the generated text and the reference text. Unlike BLEU, ROUGE focuses more on Recall, which is the proportion of reference text fragments contained in the generated text. The Longest Common Subsequence (LCS) is the longest identical subsequence of two sequences. For example, the LCS of ‘machine learning’ and ‘learning machine’ is ‘learning’.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The main purpose of ROUGE-L is to evaluate the coverage of the generated summaries, not the exact match.
      </Text>
      <Heading as="h2" size="lg" mb={4} mt={4}>
        Accuracy
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Accuracy is a very straightforward and commonly used statistical metric to assess the overall performance of a classification model. It calculates the proportion of instances correctly predicted by the model out of the total number of instances. For our current choice of dataset MedQA is multiple-choice, which means each question has multiple options but usually only one correct answer. Therefore, accuracy is directly calculated as the ratio of the number of times the correct answer is chosen to the total number of questions.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The formula is:
      </Text>
      <MathJax math={`\\[${accuracyFormula}\\]`} />
    </Box>
  );
};

export default IntroductionAssessmentIndicators;
