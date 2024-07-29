// src/pages/Limitations.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Limitations = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Limitations
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        First, as we mentioned before, computing resources are crucial for fine tuning in Large Language Models. Due to a lack of clear understanding of the computational resources required for fine-tuning the large language model, we encountered resource errors while running Qwen2-7b-instruct and LLaMA3-8b-instruct and Full fine-tuning method, and tried various GPU computing platforms, wasting a lot of practical trial and error. Also, because the model training time is long, it requires more computing power and time to find the best hyperparameter combination. Therefore, due to lack of experience, we spent more time learning and practicing. To be specific, our limited resource restricts us from exploring larger parameters range. For example, in hyper-parameters exploration, larger batch size, wider epoch and learning rate range could be fully experimented if the resource is sufficient. Also, the choice of Large Language Models could be versatile, we can go for larger models such as Qwen2-7b-instruct and LLaMA3-8b-instruct. Also, on fine tuning techniques, we can conduct full parameters tuning on every model to do a detailed comparison.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Besides, Bleu-4 and Rouge-L are not perfect measurements of text quality. They have two problems, disregarding semantics and ignoring sentence structure. For the former, Bleu-4 and Rouge-L only consider matching at the lexical level, not the semantics of the sentence. This means that two sentences, even if they are exactly equivalent in meaning, but still score low if not worded in the exact same way. For the latter, both evaluations do not consider the sentence grammar and structure, therefore may give high scores to sentences that are grammatically incorrect but have a high lexical match. In the future work, more evaluation methods could be explored to increase the validation of text quality measurement. For example, BERT deep learning model could be introduced as an evaluation.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        As this project has limited time, we don’t have enough time to conduct a detailed investigation towards all fine-tuning methods and have a full understanding towards LLM. If given time, more research could be explored, and we could have full understanding towards LLM and fine-tuning techniques and conduct a more comprehensive comparison.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        What’s more, we can improve on team collaborations. Our team should increase the frequency of communication about progress. Regular updates will ensure that everyone is aware of the status and what others are working on, enhancing overall coordination and efficiency. And we should organize all the experimental processes and results we have so far and document them in detail to ensure reproducibility. Therefore, we will improve documentation by uploading the loss graphs with recording the different hyperparameter settings to GitHub on time and creating the charts to record the results of the evaluation such as accuracy, ensuring that all findings and decisions were properly documented, to reduce the time which we need to locate and collate it.
      </Text>
    </Box>
  );
};

export default Limitations;
