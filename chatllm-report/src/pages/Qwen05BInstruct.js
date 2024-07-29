import React, { useState, useEffect } from 'react';
import { Box, Heading, Select, VStack, Text, Image, Flex } from '@chakra-ui/react';

const Qwen05BInstruct = () => {
  const [fineTuneMethod, setFineTuneMethod] = useState('LoRA');
  const [parameterName, setParameterName] = useState('Batch Size');
  const [parameterValue, setParameterValue] = useState('2');

  const fineTuneOptions = ['LoRA', 'QLoRA', 'Full Parameter Fine-Tuning'];
  const hyperparameterOptions = ['Batch Size', 'Max Example', 'Learning Rate', 'Epoch'];

  const getHyperparameterValues = (fineTuneMethod, parameterName) => {
    switch (parameterName) {
      case 'Batch Size':
        if (fineTuneMethod === 'Full Parameter Fine-Tuning') {
          return [1, 2];
        }
        return [2, 6];
      case 'Max Example':
        if (fineTuneMethod === 'Full Parameter Fine-Tuning') {
          return [100, 250, 500];
        }
        return [250, 500, 1000];
      case 'Learning Rate':
        if (fineTuneMethod === 'Full Parameter Fine-Tuning') {
          return ['5e-6', '1e-6', '5e-7'];
        }
        return ['5e-5', '1e-5', '1e-4', '5e-4'];
      case 'Epoch':
        return [2, 3, 5];
      default:
        return [];
    }
  };

  useEffect(() => {
    const values = getHyperparameterValues(fineTuneMethod, parameterName);
    setParameterValue(values[0]);
  }, [fineTuneMethod, parameterName]);

  const getLossChartSrc = (type) => {
    const methodMap = {
      'LoRA': 'lora',
      'QLoRA': 'qlora',
      'Full Parameter Fine-Tuning': 'full'
    };
    const method = methodMap[fineTuneMethod];
    const paramValue = String(parameterValue).toLowerCase();
    const paramSuffix = parameterName === 'Batch Size' ? `batch${paramValue}`
                      : parameterName === 'Max Example' ? `me${paramValue}`
                      : parameterName === 'Learning Rate' ? `${paramValue}`
                      : `epoch${paramValue}`;

    const src = `/pictures/Q0.5B_${method}_${paramSuffix}_${type}.png`;
    console.log(src); 
    return src;
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Loss curve for the Qwen2-0.5B-instruct model</Heading>
      <Text mb={4}>Please select the fine-tuning method and hyperparameters to compare loss.</Text>
      
      <Flex spacing={4} align="center" mb={4}>
        <Box mr={4}>
          <Text>Fine-Tuning Method</Text>
          <Select value={fineTuneMethod} onChange={(e) => setFineTuneMethod(e.target.value)}>
            {fineTuneOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Box>

        <Box mr={4}>
          <Text>Hyperparameter Name</Text>
          <Select value={parameterName} onChange={(e) => setParameterName(e.target.value)}>
            {hyperparameterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Box>

        <Box>
          <Text>Hyperparameter Value</Text>
          <Select value={parameterValue} onChange={(e) => setParameterValue(e.target.value)} isDisabled={!parameterName}>
            {getHyperparameterValues(fineTuneMethod, parameterName).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>

      <Box mt={8}>
        <Flex justifyContent="space-around" alignItems="flex-start">
          <Box textAlign="center">
            <Heading as="h3" size="md" mb={1}>Training Set</Heading>
            <Image src={getLossChartSrc('train')} alt="Training Loss Chart" maxH="500px" objectFit="contain" />
          </Box>
          <Box textAlign="center">
            <Heading as="h3" size="md" mb={1}>Validation Set</Heading>
            <Image src={getLossChartSrc('eval')} alt="Validation Loss Chart" maxH="500px" objectFit="contain" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Qwen05BInstruct;










