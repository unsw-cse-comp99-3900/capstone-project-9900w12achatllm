import React, { useState, useEffect } from 'react';
import { Box, Heading, Select, VStack, Text, Image, Flex } from '@chakra-ui/react';

const Qwen15BInstruct = () => {
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

    const src = `/pictures/Q1.5B_${method}_${paramSuffix}_${type}.png`;
    console.log(src); 
    return src;
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Loss curve for the Qwen2-1.5B-instruct model</Heading>
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
          <strong>Hyperparameter 1 – Batch Size</strong><br />
          Under the constraints of available hardware, we tested the maximum batch size that can be used. A larger batch size can improve training stability and reduce training time. Although an excessively large batch size may degrade the model's generalization ability, our hardware limitations prevent us from using overly large batch sizes.
        </Text>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Summary:</strong><br />
          During the training process, we observed that larger batch sizes resulted in more stable loss curves. However, due to limited computational resources, we had to opt for smaller batch sizes. Larger batch sizes reduce the number of training steps, resulting in a smoother training loss curve with a trend towards continuous convergence. Increasing the training samples or extending the training epochs can further enhance convergence.
        </Text>

        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Hyperparameter 2 – Max Example</strong><br />
          We tested the smallest acceptable max example that does not affect the training results. This means the model might only need a certain number of high-quality samples to achieve convergence. A smaller max example can reduce training time, but an excessively large max example may lead to overfitting.
        </Text>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Summary:</strong><br />
          Qwen2-1.5B-instruct, when fine-tuned with LoRA, achieves convergence with a max example of 500.<br />
          Qwen2-1.5B-instruct, when fine-tuned with QLoRA, achieves convergence with a max example of 750.<br />
          Qwen2-1.5B-instruct, when fine-tuned with Freeze, achieves convergence with a max example of 500.
        </Text>

        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Hyperparameter 3 – Learning Rate</strong><br />
          Adjusting the learning rate to observe its impact on model performance. An appropriate learning rate can accelerate model convergence and improve performance.
        </Text>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Summary:</strong><br />
          Qwen2-1.5B-instruct, when fine-tuned with LoRA, shows moderate performance with a default learning rate of 5e-5. Lowering the learning rate did not improve performance, while increasing the learning rate to 1e-4 showed excellent results. However, an excessively high learning rate, such as 5e-4, led to overfitting.<br />
          Qwen2-1.5B-instruct, when fine-tuned with QLoRA, shows excellent performance with a default learning rate of 5e-5. Lowering the learning rate did not improve performance, and increasing the learning rate to 1e-4 did not outperform the default learning rate of 5e-5. An excessively high learning rate, such as 5e-4, led to overfitting.<br />
          Qwen2-1.5B-instruct, when fine-tuned with Freeze, shows excellent performance with a default learning rate of 5e-5. Lowering the learning rate led to a more stable curve, while increasing the learning rate to 1e-4 led to overfitting.
        </Text>

        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Hyperparameter 4 – Training Epoch</strong><br />
          Adjusting the training epochs by observing the loss curve convergence.
        </Text>
        <Text fontSize="lg" mb={4} textAlign="justify">
          <strong>Summary:</strong><br />
          Qwen2-1.5B-instruct, when fine-tuned with LoRA, achieves test loss convergence with epochs of 2 or 3, but an excessively high epoch of 5 leads to overfitting.<br />
          Qwen2-1.5B-instruct, when fine-tuned with QLoRA, does not achieve sufficient test loss convergence with an epoch of 2. An epoch of 3 achieves test loss convergence, but an excessively high epoch of 5 leads to overfitting.<br />
          Qwen2-1.5B-instruct, when fine-tuned with Freeze, does not achieve sufficient convergence with epochs of 2 or 3. An epoch of 5 results in better test loss convergence.
        </Text>
      </Box>
    </Box>
  );
};

export default Qwen15BInstruct;


