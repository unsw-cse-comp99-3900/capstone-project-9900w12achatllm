// src/pages/HyperparameterSetting.js
import React from 'react';
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Image } from '@chakra-ui/react';

const HyperparameterSetting = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Hyperparameter Setting
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Before the comparative experiment, we explored the hyper-parameters setting for each LLM with a specific method to select the best performed parameters combination. We adjust batch size, max example, learning rate and epoch. For batch size, we try to find the max batch size within the hardware constraints. A large batch size can improve training stability and speed, but leading to the decrease of model generalization if the number goes too high. But this is not our concern as our hardware limitations prevent us from reaching excessively large batch sizes. For max sample size, we try to find the smallest acceptable maximum number of samples that does not affect the training results. This means the model can converge with a certain number of high-quality samples. A smaller sample size can reduce training time, while a larger sample size may lead to overfitting. For learning rate and epoch, we try to find the best figure by observing the oscillation of the loss curve and analyzing the model's performance. As shown in loss charts in the appendix, following are the best hyper-parameters setting for each LLM with different fine-tuning method:
      </Text>
      <Text fontSize="lg" mb={4} fontWeight="bold">
        Phi-3-mini-4k-instruct:
      </Text>
      <Table variant="striped" colorScheme="telegram" mb={4}>
        <Thead>
          <Tr>
            <Th>Method</Th>
            <Th>Batch Size</Th>
            <Th>Sample Size</Th>
            <Th>Learning Rate</Th>
            <Th>Epochs</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Freeze</Td>
            <Td>6</Td>
            <Td>500</Td>
            <Td>5e-05</Td>
            <Td>3</Td>
          </Tr>
          <Tr>
            <Td>LoRA</Td>
            <Td>6</Td>
            <Td>500</Td>
            <Td>5e-05</Td>
            <Td>3</Td>
          </Tr>
          <Tr>
            <Td>QLoRA</Td>
            <Td>6</Td>
            <Td>500</Td>
            <Td>5e-05</Td>
            <Td>3</Td>
          </Tr>
        </Tbody>
      </Table>
      <Text fontSize="lg" mb={4} fontWeight="bold">
        Qwen2-1.5B-instruct:
      </Text>
      <Table variant="striped" colorScheme="telegram" mb={4}>
        <Thead>
          <Tr>
            <Th>Method</Th>
            <Th>Batch Size</Th>
            <Th>Sample Size</Th>
            <Th>Learning Rate</Th>
            <Th>Epochs</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Freeze</Td>
            <Td>3</Td>
            <Td>500</Td>
            <Td>5e-05</Td>
            <Td>3</Td>
          </Tr>
          <Tr>
            <Td>LoRA</Td>
            <Td>3</Td>
            <Td>500</Td>
            <Td>1e-04</Td>
            <Td>3</Td>
          </Tr>
          <Tr>
            <Td>QLoRA</Td>
            <Td>4</Td>
            <Td>750</Td>
            <Td>5e-05</Td>
            <Td>5</Td>
          </Tr>
        </Tbody>
      </Table>
      <Text fontSize="lg" mb={4} fontWeight="bold">
        Qwen2-0.5B-instruct:
      </Text>
      <Table variant="striped" colorScheme="telegram" mb={4}>
        <Thead>
          <Tr>
            <Th>Method</Th>
            <Th>Batch Size</Th>
            <Th>Sample Size</Th>
            <Th>Learning Rate</Th>
            <Th>Epochs</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Freeze</Td>
            <Td>5</Td>
            <Td>500</Td>
            <Td>5e-05</Td>
            <Td>3</Td>
          </Tr>
          <Tr>
            <Td>LoRA</Td>
            <Td>5</Td>
            <Td>500</Td>
            <Td>1e-05</Td>
            <Td>3</Td>
          </Tr>
          <Tr>
            <Td>QLoRA</Td>
            <Td>6</Td>
            <Td>1000</Td>
            <Td>1e-05</Td>
            <Td>3</Td>
          </Tr>
          <Tr>
            <Td>Full</Td>
            <Td>5</Td>
            <Td>500</Td>
            <Td>5e-07</Td>
            <Td>3</Td>
          </Tr>
        </Tbody>
      </Table>
      <Text fontSize="lg" mb={4} textAlign="justify">
        After setting the optimal hyperparameters according to the tables shown above, we trained the three models using the three fine-tuning methods Freeze, LoRA, QLoRA (Qwen2-0.5B-instrcut added the Full method) and the two datasets PubMedQA and MedQA separately, and the results are shown below:
      </Text>
      <Image src="pictures/report_pic_9.png" alt="Accuracy formula" mb={4} />
    </Box>
  );
};

export default HyperparameterSetting;
