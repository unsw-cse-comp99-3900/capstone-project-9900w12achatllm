// src/pages/FineTuningMethods.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const FineTuningMethods = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Fine-Tuning Methods
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Like the reason for choosing our model, our team's model deployment environment is on mobile devices, which means we must use smaller models to fit limited computing resources. Therefore, when choosing fine-tuning methods, we need to consider those that can be quickly deployed and run efficiently in resource-constrained environments. At the beginning of the project, we added the Full parameters fine-tuning method, but only Qwen2-0.5B-instruct ran successfully, Qwen2-1.5B-instruct and Phi3-mini-4K-instruct failed due to the limitation of computational resources we had, so we only recorded the full parametric fine-tuning results for Qwen2-0.5B-instruct's full-parameter fine-tuning results. Therefore, LoRA, QLoRA and Freeze, which not only meet our needs but also maintain the high performance of the model, are the best choices for our team.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        LoRA (Low-Rank Adaptation) compared with traditional full parameter fine-tuning, its core idea is to achieve fine-tuning without retraining the entire model by making low-rank modifications to the model's weight matrix, reducing interference with the original pre-trained model structure and maintaining the stability of the model and the knowledge learned during pre-training. This greatly reduces the demand for computing resources and the number of parameters that need to be adjusted, which allows LoRA to greatly reduce the burden of computing and storage while maintaining model complexity and capacity (Hu et al., 2021).
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        QLoRA is a variant of LoRA. Like LoRA, QLoRA also reconstructs weights by introducing a low-rank matrix. It inherits all the advantages of LoRA, but it further reduces the parameters that need to be updated through quantization technology, thereby reducing storage requirements and computational workload (Hu et al., 2021). This approach is particularly suitable for resource-limited environments, such as mobile devices or edge computing devices.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Freeze is a simpler and more direct fine-tuning technique that freezes most of the layers of the model, meaning that they do not participate in the subsequent training process. Only the last few layers of the model will be trained to adapt to new tasks. The Freeze method can quickly adapt an existing model to a new task, and freezing the pre-trained layers can keep the common features learned by the model on a large amount of data, reducing overfitting caused by a small data set (Fan et al, 2021).
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Overall, LoRA and QLoRA are methods that achieve efficient fine-tuning through low-rank reparameterization without sacrificing model performance. They are suitable for scenarios where effective parameter adjustment is required while maintaining the advantages of pre-training. The Freeze method is suitable for situations where existing models need to be adapted to new tasks and computing resources are limited. These three methods are fully compatible with our team's need to use two medical datasets to train three small models.
      </Text>
    </Box>
  );
};

export default FineTuningMethods;
