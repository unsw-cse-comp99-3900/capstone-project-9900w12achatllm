import React, { useState, useEffect } from 'react';
import { Box, Heading, Select, VStack, Text, Image, Flex } from '@chakra-ui/react';

const PhiInstruct = () => {
  const [fineTuneMethod, setFineTuneMethod] = useState('LoRA');
  const [parameterName, setParameterName] = useState('Batch Size');
  const [parameterValue, setParameterValue] = useState('2');
  const [analysis, setAnalysis] = useState({});

  const fineTuneOptions = ['LoRA', 'QLoRA', 'Freeze'];
  const hyperparameterOptions = ['Batch Size', 'Max Example', 'Learning Rate', 'Epoch'];

  const getHyperparameterValues = (parameterName) => {
    switch (parameterName) {
      case 'Batch Size':
        return [2, 6];
      case 'Max Example':
        return [250, 500, 1000];
      case 'Learning Rate':
        return ['5e-5', '1e-5', '1e-4', '5e-4'];
      case 'Epoch':
        return [3, 5];
      default:
        return [];
    }
  };

  const analysisData = {
    'Batch Size': {
      intro: "Under the constraints of available hardware, we tested the maximum batch size that can be used. A larger batch size can improve training stability and reduce training time, but our hardware conditions mean that we cannot use a batch size that is too large. A small batch size can easily lead to unstable gradient estimation and loss curves.",
      summary: [
        "When the batch size is 6, we can see that the training curves of the three fine-tuning methods are relatively smooth. So we set the batch size to 6 for subsequent training.",
        "Freeze: 6",
        "LoRA: 6",
        "QLoRA: 6"
      ]
    },
    'Max Example': {
      intro: "We tested the smallest acceptable max example that does not affect the training results. This means the model might only need a certain number of high-quality samples to achieve convergence. A smaller max example can reduce training time, but an excessively large max example may lead to overfitting.",
      summary: [
        "It can be seen that the three fine-tuning methods did not reach convergence when max samples were 250, but when this value reached 500, the model converged.",
        "Freeze: 500",
        "LoRA: 500",
        "QLoRA: 500"
      ]
    },
    'Learning Rate': {
      intro: "Adjusting the learning rate to observe its impact on model performance. An appropriate learning rate can accelerate model convergence and improve performance.",
      summary: [
        "When the learning rate (lr) is 5e-04 (too high), we can see that the loss of the validation set is increasing, resulting in overfitting in all three fine-tuning methods. When it is set to 5e-05, both the training set and the validation set converge stably. When it is set to 1e-05 (too low), the model was in a local optimal point.",
        "Freeze: 5e-05",
        "LoRA: 1e-04",
        "QLoRA: 1e-04"
      ]
    },
    'Epoch': {
      intro: "We need to set a suitable epoch to ensure model convergence and alleviate overfitting. A high epoch will make the model converge more fully and more accurately. However, it is easy to cause overfitting and prolong the training time.",
      summary: [
        "When the epoch is set too high, the freeze method can be seen to overfit (the validation set loss increases). When the epoch is 3, both the training set and the validation set of all fine-tuning methods converge stably.",
        "Freeze: 3",
        "LoRA: 3",
        "QLoRA: 3"
      ]
    }
  };

  useEffect(() => {
    const values = getHyperparameterValues(parameterName);
    setParameterValue(values[0]);
  }, [fineTuneMethod, parameterName]);

  useEffect(() => {
    setAnalysis(analysisData[parameterName] || {});
  }, [parameterName]);

  const getLossChartSrc = (type) => {
    const methodMap = {
      'LoRA': 'lora',
      'QLoRA': 'qlora',
      'Freeze': 'freeze'
    };
    const method = methodMap[fineTuneMethod];
    const paramValue = String(parameterValue).toLowerCase();
    const paramSuffix = parameterName === 'Batch Size' ? `batch${paramValue}`
                      : parameterName === 'Max Example' ? `me${paramValue}`
                      : parameterName === 'Learning Rate' ? `${paramValue}`
                      : `epoch${paramValue}`;

    const src = `/pictures/Phi_${method}_${paramSuffix}_${type}.png`;
    console.log(src); 
    return src;
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Loss curve for the Phi3-mini-4K-instruct model</Heading>
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
            {getHyperparameterValues(parameterName).map((value) => (
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

      <Box mt={8}>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Hyperparameter – {parameterName}</strong><br />
          {analysis.intro}
        </Text>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Summary:</strong><br />
          {analysis.summary && analysis.summary.map((item, index) => (
            <Text key={index} mb={2}>{item}</Text>
          ))}
        </Text>
      </Box>
    </Box>
  );
};

export default PhiInstruct;
