import React, { useState, useEffect } from 'react';
import { Box, Heading, Select, VStack, Text, Image, Flex } from '@chakra-ui/react';

const PhiInstruct = () => {
  const [fineTuneMethod, setFineTuneMethod] = useState('LoRA');
  const [parameterName, setParameterName] = useState('Batch Size');
  const [parameterValue, setParameterValue] = useState('2');

  const fineTuneOptions = ['LoRA', 'QLoRA', 'Freeze'];
  const hyperparameterOptions = ['Batch Size', 'Max Example', 'Learning Rate', 'Epoch'];

  const getHyperparameterValues = (fineTuneMethod, parameterName) => {
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

  useEffect(() => {
    const values = getHyperparameterValues(fineTuneMethod, parameterName);
    setParameterValue(values[0]);
  }, [fineTuneMethod, parameterName]);

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

      <Box mt={8}>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Hyperparameter 1: Batch Size</strong><br />
          <strong>Goal:</strong> Test the largest batch size possible, as long as the hardware allows. A large batch size can improve training stability and reduce training time, but our hardware conditions mean that we cannot use a batch size that is too large. A small batch size can easily lead to unstable gradient estimation and loss curves.
        </Text>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Conclusions:</strong> When the batch size is 6, we can see that the training curves of the three fine-tuning methods are relatively smooth. So we set the batch size to 6 for subsequent training.<br />
          Freeze: 6<br />
          LoRA: 6<br />
          QLoRA: 6
        </Text>

        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Hyperparameter 2: Max Samples</strong><br />
          <strong>Goal:</strong> Find the minimum number of samples that can make the model converge. Max samples control the number of random samples used as training samples. Due to limited computing power, we cannot choose too large training data. But fortunately, we found in our experiments that even if the sample size does not need to be too large, the model can converge, and a small max example can reduce training time. Therefore, the quality of data is more important than the quantity.
        </Text>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Conclusion:</strong> It can be seen that the three fine-tuning methods did not reach convergence when max samples were 250, but when this value reached 500, the model converged.<br />
          Freeze: 500<br />
          LoRA: 500<br />
          QLoRA: 500
        </Text>

        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Hyperparameter 3: Learning Rate</strong><br />
          <strong>Goal:</strong> Find the best learning rate. A low learning rate can find the optimal point more accurately. However, this will make the training time too long or the model will be in a local optimal point. A high learning rate will shorten the training time and will not easily reach the local optimal point, but it may deviate from the optimal point and there will be a risk of overfitting.
        </Text>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Conclusion:</strong> When the learning rate (lr) is 5e-04 (too high), we can see that the loss of the validation set is increasing, resulting in overfitting in all three fine-tuning methods. When it is set to 5e-05, both the training set and the validation set converge stably. When it is set to 1e-05 (too low), the model was in a local optimal point.<br />
          Freeze: 5e-05<br />
          LoRA: 1e-04<br />
          QLoRA: 1e-04
        </Text>

        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Hyperparameter 4: Epochs</strong><br />
          <strong>Goal:</strong> We need to set a suitable epoch to ensure model convergence and alleviate overfitting. A high epoch will make the model converge more fully and more accurately. However, it is easy to cause overfitting and prolong the training time.
        </Text>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Conclusion:</strong> When the epoch is set too high, the freeze method can be seen to overfit (the validation set loss increases). When the epoch is 3, both the training set and the validation set of all fine-tuning methods converge stably.<br />
          Freeze: 3<br />
          LoRA: 3<br />
          QLoRA: 3
        </Text>
      </Box>
    </Box>
  );
};

export default PhiInstruct;


