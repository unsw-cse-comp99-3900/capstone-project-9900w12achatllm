// src/pages/IntroLLM.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const IntroLLM = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Introduction of Large Language Models
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        In the past few years, large language models (LLM) such as GPT-4, Llama 2, etc. have performed well in various natural language processing tasks, not only in traditional fields such as law, programming, and medicine, but also in agriculture, diverse fields such as psychology show great potential. As the parameter sizes of these models grew into the hundreds of billions, maintaining a separate set of weights for each model became inefficient and costly. In addition, the model needs to reload all weights when adapting to different tasks, which is often slow and limits the practical flexibility of the model.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        To overcome these challenges, researchers developed parameter efficient fine-tuning (PEFT) technology. This innovative approach only needs to adjust a very small portion of the weights in the model while keeping most of the weights stable, allowing it to quickly adapt to new tasks. This approach not only speeds up the model's adaptation to new tasks, but also significantly reduces maintenance and operating costs. Therefore, PEFT technology is quickly becoming a key tool for managing and optimizing large models due to its efficiency and economy.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Common PEFT techniques include Adapters, LoRA (Low-Rank Adaptation), Q-LoRA, Prefix Tuning, and Prompt Tuning. Adapters insert small sub-networks between the layers of the model, LoRA performs a low-rank approximation of the weight matrix, Prefix Tuning adds trainable prefixes before the input, and Prompt Tuning adjusts the model with specific cues. The advantages of PEFT are parameter efficiency, adaptability, and reduced computational cost, which enables the model to perform well in computationally resource-constrained environments.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Application scenarios include resource-constrained environments, multi-task learning, personalized and customized systems, and the problem of reducing catastrophic forgetting in continuous learning. Except for PEFT, Retrieval-Augmented Generation (RAG) is also widely used in LLMs, offering reliable and up-to-date external knowledge, providing huge convenience for numerous tasks. With this knowledge to improve the factual accuracy, RAG can furthermore reduce the hallucinations problem.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        However, there are some limitations to this approach. Firstly, if the model does not have sufficient knowledge of a particular domain, the RAG may not be able to provide an accurate answer, as so-called "domain thinking" requires the incorporation of a large amount of domain-specific data into a large model. Secondly, the content of the answer will be constrained by the search results.
      </Text>
    </Box>
  );
};

export default IntroLLM;
