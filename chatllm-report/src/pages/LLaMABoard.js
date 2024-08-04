
import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const LLaMABoard = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        LLaMA
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        In this project, we use LLaMA-Factory as the fine-tuning framework. LLaMA-Factory (hiyouga, 2024) is located on GitHub and is a highly acclaimed open-source framework, with 25,000 stars on the project's homepage indicating its popularity and reliability. Designed to facilitate the fine-tuning of large language models, the framework brings together a variety of PEFT methods in a module. It can fine-tune hundreds of LLMs with minimal resources and high data throughput, and it simplifies common training methods for LLMs. Therefore, we chose this framework to reduce code operation and save time to have more time and efficiency to analyze the fine-tuning results and adjust accordingly. This framework is used in two main ways, one is via LLaMA Board and the other is via Command Line.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        We will briefly introduce how to use LLaMA Board:
      </Text>
      <Image src="pictures/report_pic_6.png" alt="LLaMA Board Overview" mb={4} />
      <Image src="pictures/report_pic_6_2.png" alt="LLaMA Board Overview" mb={4} />
      <Text fontSize="lg" mb={4} textAlign="justify">
        Firstly, select our models in the ‘Model name’ modules, we can also load models that are not in this list by uploading the URL of the hugging face where the model is located.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Then, select the fine-tuning method in the 'Finetuning method' module. Because there is using the Colab platform in the shoot-screen, there are fewer computational resources so fine-tuning methods are only three options. Whereas during normal training for our group, more options for fine-tuning methods would be available on the remote server with more computational resources that we rented.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Thirdly, choose the dataset from the 'Dataset' module to train the model. We also can load other datasets that are not in this list by adding the direction in the ‘Data dir’ part.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Fourthly, set the hyperparameters. Each hyperparameter has its own default setting. Except for those basic hyperparameters such as learning rate and batch size shown below, we also can tap the following module for advanced hyperparameter settings.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Finally, after all the preparations are done, we can click on the 'Start' button to start the training, and during the training of the model, the 'loss' at the bottom right of the picture below will be updated in real time to let us know the current trend of the training.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        After finishing the training, we can update the test dataset to evaluate the models. We can choose the dataset and add the new dataset in the data direction, and set the hyperparameters for testing, also we can save our output and change the save direction.
      </Text>
      <Image src="pictures/report_pic_7.png" alt="Evaluate & Predict trained models" mb={4} />
    </Box>
  );
};

export default LLaMABoard;
