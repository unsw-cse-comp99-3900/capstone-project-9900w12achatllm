import React from 'react';
import { Box, Heading, Text, Image, Link } from '@chakra-ui/react';

const HyperparameterExplore = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Hyperparameter Exploration
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        In this section, we will describe how to debug the hyperparameter settings to ensure that the best hyperparameters are found. As shown in the example below, Qwen2-0.5B-instruct uses Full for fine-tuning.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        First, we will introduce some basic setting:
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        <code>--model_name_or_path model/ Qwen2-0.5B-Instruct</code>
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        We can change the Qwen2-0.5B-Instruct to Qwen2-1.5B-Instruct or Phi-3-mini-4k-instruct, to achieve loading different models.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        <code>--finetuning_type full</code>
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        This step is setting the fine-tuning method, the ‘full’ can be changed to ‘Freeze’, ‘LoRA’ and so on.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Then, we mainly focused on those 4 hyperparameters in this project:
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        <code>--learning_rate 1e-06</code><br />
        <code>--num_train_epochs 2.0</code><br />
        <code>--per_device_train_batch_size 2</code><br />
        <code>--max_samples 500</code>
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Those hyperparameters always have significant impact on the performance and efficiency of the training process in machine learning. Therefore, we varied the values of these hyperparameters by LLaMA-Factory command lines, observed and collected loss graphs (as shown in the Appendix) and made analyses in week 5 and week 8, and finally collected the optimal hyperparameter settings for our training model under insufficient computational resources.
      </Text>
      <Image src="/pictures/Exploring Hyperparameter Setting.png" alt="Exploring Hyperparameter Setting" mb={4} maxW="60%" maxH="60%" />
      <Text fontSize="lg" mb={4} textAlign="justify">
        More codes like other models and other fine-tuning methods with different hyperparameter settings can be found in our GitHub: 
        <Link href="https://github.com/unsw-cse-comp99-3900-24t1/capstone-project-9900w12achatllm/tree/main/Notebook" isExternal color="teal.500">
          https://github.com/unsw-cse-comp99-3900-24t1/capstone-project-9900w12achatllm/tree/main/Notebook
        </Link>
      </Text>
    </Box>
  );
};

export default HyperparameterExplore;

