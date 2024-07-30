import React, { useState, useEffect } from 'react';
import { Box, Heading, Select, VStack, Text, Image, Flex } from '@chakra-ui/react';

const Qwen05BInstruct = () => {
  const [fineTuneMethod, setFineTuneMethod] = useState('LoRA');
  const [parameterName, setParameterName] = useState('Batch Size');
  const [parameterValue, setParameterValue] = useState('2');
  const [analysis, setAnalysis] = useState({});

  const fineTuneOptions = ['LoRA', 'QLoRA', 'Full Parameter Fine-Tuning'];
  const hyperparameterOptions = ['Batch Size', 'Max Example', 'Learning Rate', 'Epoch'];

  const analysisData = {
    'Batch Size': {
      intro: "Under the constraints of available hardware, we tested the maximum batch size that can be used. A larger batch size can improve training stability and reduce training time. Although an excessively large batch size may degrade the model's generalization ability, our hardware limitations prevent us from using overly large batch sizes.",
      summary: [
        "During the training process, we observe that the loss curve becomes more stable with a larger batch size. However, due to limited computational resources, we are constrained to using a smaller batch size. Although the final loss appears to be lower with a smaller batch size in the graph, this is because the larger batch size reduces the number of training steps. The larger batch size still shows a trend of continuous convergence, suggesting that increasing the training samples or learning epochs could lead to better convergence. Moreover, a larger batch size can help mitigate the impact of overfitting during full parameter fine-tuning.",
        "Full Parameter Fine-Tuning: 2",
        "LoRA: 5",
        "QLoRA: 6"
      ]
    },
    'Max Example': {
      intro: "We tested the smallest acceptable max example that does not affect the training results. This means the model might only need a certain number of high-quality samples to achieve convergence. A smaller max example can reduce training time, but an excessively large max example may lead to overfitting.",
      summary: [
        "When fine-tuning Qwen2-0.5B-Instruct with LoRA, a maximum sample size of 500 is sufficient to reach convergence.",
        "When fine-tuning Qwen2-0.5B-Instruct with QLoRA, a maximum sample size of 1000 is sufficient to reach convergence.",
        "When fine-tuning Qwen2-0.5B-Instruct with full parameter tuning, a maximum sample size of 100 leads to overfitting, likely due to the learning rate being too high.",
      ]
    },
    'Learning Rate': {
      intro: "Adjusting the learning rate to observe its impact on model performance. An appropriate learning rate can accelerate model convergence and improve performance.",
      summary: [
        "The default learning rate of 5e-5 for fine-tuning Qwen2-0.5B-Instruct using LoRA shows moderate performance. Lowering the learning rate does not bring performance improvement. Increasing the learning rate to 1e-4 shows excellent performance, but excessively high learning rates such as 5e-4 lead to overfitting.",
        "The default learning rate of 5e-5 for fine-tuning Qwen2-0.5B-Instruct using QLoRA shows moderate performance. Lowering the learning rate does not bring performance improvement. Increasing the learning rate to 1e-4 shows excellent performance, but excessively high learning rates such as 5e-4 lead to overfitting.",
        "The default learning rate of 5e-5 for full parameter fine-tuning Qwen2-0.5B-Instruct shows overfitting. Appropriately lowering the learning rate to 1e-6 and 5e-7 mitigates this issue. While the validation loss at 1e-6 is lower than at 5e-7, the model with a learning rate of 5e-7 still shows a convergence trend, suggesting that increasing the training epochs or samples might yield better results than with a learning rate of 1e-6.",
        "Due to the larger number of parameters in full parameter fine-tuning, the learning rate used needs to be significantly lower than those used for LoRA and QLoRA fine-tuning."
      ]
    },
    'Epoch': {
      intro: "We need to set a suitable epoch to ensure model convergence and alleviate overfitting. A high epoch will make the model converge more fully and more accurately. However, it is easy to cause overfitting and prolong the training time.",
      summary: [
        "When fine-tuning Qwen2-0.5B-Instruct with LoRA, an epoch count of 2 does not lead to sufficient convergence of the test set loss. An epoch count of 3 achieves convergence, but excessively high epoch counts such as 5 result in overfitting.",
        "When fine-tuning Qwen2-0.5B-Instruct with QLoRA, an epoch count of 2 does not lead to sufficient convergence of the test set loss. An epoch count of 3 achieves convergence, but excessively high epoch counts such as 5 result in overfitting.",
        "When performing full parameter fine-tuning on Qwen2-0.5B-Instruct, an epoch count of 2 already achieves sufficient convergence of the test set loss. Higher epoch counts, such as 3 or 5, tend to show signs of overfitting.",
        "Since the learning rate used for full parameter fine-tuning is much lower than that used for LoRA and QLoRA fine-tuning, the number of epochs required to reach convergence in full parameter fine-tuning is smaller than in LoRA and QLoRA fine-tuning."
      ]
    }
  };

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

  useEffect(() => {
    setAnalysis(analysisData[parameterName] || {});
  }, [parameterName]);

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

export default Qwen05BInstruct;










