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
        Over the past few years, large language models (LLMs) show a significant performance in dealing with natural language processing tasks. For example, models like GPT-4 and Llama 2 have demonstrated brilliant performance across numerous tasks and domains. Noticeably, these models show their abilities and hold immense potential in various domains like law, coding, medicine, agriculture, and psychology.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        When models scale to hundreds of billions of parameters, hosting a different set of weights for each model becomes widely inefficient and cost prohibitive while reloading all the weights for different tasks is too slow. Parameter-efficient fine-tuning (PEFT) techniques are introduced to solve this problem by modifying a very small portion of weights relative to the full model size while keeping the rest of the model frozen.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Common PEFT techniques include Adapters, LoRA (Low-Rank Adaptation), Q-LoRA, Prefix Tuning, and Prompt Tuning. Adapters insert small sub-networks between the layers of the model, LoRA performs a low-rank approximation of the weight matrix, Prefix Tuning adds trainable prefixes before the input, and Prompt Tuning adjusts the model with specific cues.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The advantages of PEFT are parameter efficiency, adaptability, and reduced computational cost, which enables the model to perform well in computationally resource-constrained environments. Application scenarios include resource-constrained environments, multi-task learning, personalized and customized systems, and the problem of reducing catastrophic forgetting in continuous learning.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Except for PEFT, Retrieval-Augmented Generation (RAG) is also widely used in LLMs, offering reliable and up-to-date external knowledge, providing huge convenience for numerous tasks. (Wenqi Fan). With this knowledge to improve the factual accuracy, RAG can furthermore reduce the hallucinations problem (Jiarui Li). However, this approach also has some limitations. Firstly, if the model lacks the knowledge base in a certain field, RAG still cannot answer correctly because the "domain thinking" needs to be internalized into the large model through a large amount of domain data; Secondly, the content will be limited by the retrieval results.
      </Text>
    </Box>
  );
};

export default IntroLLM;
