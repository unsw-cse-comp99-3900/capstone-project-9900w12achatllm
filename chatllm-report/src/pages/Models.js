// src/pages/Models.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Models = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Models
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Since the introduction of the Transformer architecture, the use of large-scale language models in natural language processing has gained extreme speed. By training on massive text datasets, these models have not only mastered complex linguistic structures, but also learnt to recognise deep semantic relationships. As a result, they have demonstrated excellent capabilities in both language understanding, text generation, translation, and question and answer systems. Such models typically have huge parameter sizes, often in the billions or even tens of billions, such as OpenAI's GPT-3 model, which contains a staggering 175 billion parameters (Brown, 2020). This allows GPT-3 to generate extremely coherent and highly relevant text. However, as the number of parameters proliferates, the performance of the model improves dramatically, but also imposes higher computational resource requirements and training costs.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        At the beginning of the project, we used to choose Qwen2-0.5B-instruct, Qwen2-7B-instruct and LlaMA3-8B-instruct as our models, but because of the insufficient computational resources that we held, we replaced Qwen2-7B-instruct and LlaMA3-8B- instruct, those were replaced by Qwen2-1.5B-instruct and Phi3-mini-4K-instruct. Therefore, due to the model deployment environment in our team is located on mobile devices, which is the limited computing resources found by our group for this project, we need to choose a smaller and more efficient model. We also tried to rent or even remotely rent larger computing resources, but all ended in failure. In addition, the project requires fine-tuning of the model, smaller models are relatively simple in structure, making the training and adjustment process faster and more convenient, which is very suitable for our needs. Considering that our dataset only focuses on the medical field rather than involving extensive and complex contextual understanding tasks, choosing a smaller model is undoubtedly the most appropriate choice. This model can not only meet the needs of rapid deployment, but also effectively handle specific problems in professional fields, ensuring efficient execution and excellent performance of the project. At the same time, we chose models with the suffix "instruct" because such models are often used to specifically respond to clearly defined instructions, enabling them to handle specific tasks or problems more directly and effectively, interpret user intentions and needs more accurately, and perform better in user interaction. This makes them very suitable for applications that require direct interaction with human users, such as chatbots, virtual assistants, etc. These characteristics are very suitable for the language model and medical dataset we selected. Overall, we finally choose Qwen2-0.5B-instruct, Qwen2-1.5B-instruct and Phi3-mini-4K-instruct.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Qwen2 (Bai et al. 2023) is a family of language models introduced by Tencent with a pure decoder architecture designed to balance performance and resource consumption. In this project we choose the small parameter model Qwen2-0.5B-instruct and Qwen2-1.5B-instruct. Compared with the traditional Encoder-Decoder architecture, the Decoder-Only architecture is simpler and more computationally efficient, which enables the model to more effectively utilize computing resources when processing large-scale data, thereby improving the performance of the model. The Qwen2-0.5B-instruct and Qwen2-1.5B-instruct models have a smaller number of parameters, so fewer computing resources are required during training and inference. In addition, due to the smaller parameter size, these models are faster to train and fine-tune, and can quickly adapt to specific task requirements, especially when the data set focuses on the medical field and can more accurately process data and context in professional fields. Therefore, these models can effectively control the use of computing resources while maintaining high processing power, finding a balance between performance and cost-effectiveness.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Phi-3 models (Abdin et al, 2024) provide performance comparable to larger models while maintaining a small model size. These models are particularly suitable for application scenarios that require fast response and low latency, while reducing bandwidth and storage requirements, such as on mobile devices or edge computing devices. Phi3-mini-4K-instruct (Hugging Face, 2024) is a lightweight, state-of-the-art open model with 3.8B parameters, trained using the Phi-3 dataset. When benchmarked on common sense, language understanding, math, code, long context, and logical reasoning, Phi-3-mini-4K-instruct demonstrates strong and remarkable performance among models with less than 13 billion parameters. Therefore, Phi3-mini-4K-instruct perfectly meets the requirements of our group.
      </Text>
    </Box>
  );
};

export default Models;
