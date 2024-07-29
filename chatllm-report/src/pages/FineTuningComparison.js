// src/pages/FineTuningComparison.js
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const FineTuningComparison = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Fine-Tuning Comparison
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Compared with the Baseline model, all the fine-tuning methods show a better performance in almost all the evaluations. This indicates the necessity of fine-tuning techniques in LLMs. For the Freeze method, it has the highest trainable parameters. And it has good performance in the Phi3-mini-4K-instruct (briefed as Phi-3 in following) model, showing the highest BLEU-4 (36.268805) and ROUGE-L (26.933665) for PubMedQA but lower accuracy for MedQA compared to LoRA and QLoRA methods. In Qwen2-0.5B-instruct (brief as Qwen2-0.5 in following) and Qwen 2-0.5B-instruct (brief as Qwen2-1.5 in following), it has moderate performance but significantly high prediction speed for MedQA. For the LoRA (rank 8) method, it has the highest prediction speed in Phi-3 and Qwen2-1.5B-instruct (briefed as Qwen2-1.5), the second best in Qwen2-0.5. On Qwen2-0.5 and Qwen2-1.5, it has great performance for PubMedQA, but poor accuracy in MedQA. For the QLoRA (rank 8) method, it has the worst prediction speed overall. On Phi-3, it has moderate performance, slightly better than LoRA; however, on Qwen2-0.5 and Qwen2-1.5, it has lower score on Bleu-4 compared to other methods. As we have limited resources, LoRA (rank 16) only applies in the Phi-3 model, and full-parameters tuning only applies in the Qwen2-0.5 model. The following comparisons are within a single model. For the LoRA (rank 16) method, it has great performance in PubMedQA, best accuracy in MedQA. However, with double trainable parameters compared to LoRA(rank 8) and QLoRA(rank 8), it has the lowest prediction speed among these fine-tuning methods, still quicker than baseline model. For full-parameters tuning method, with the most trainable parameters, it has highest score in Rouge-L, fastest prediction speed, but low in Bleu-4 in PubMedQA. And it performs moderately in MedQA.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Thus, for the Phi-3 model with many parameters, the Freeze method was found to be best suited for the high-quality generation task, as shown by the performance of the Phi-3 model on the PubMedQA dataset (highest scores on Bleu-4 and Rouge-L). In contrast, for the Qwen2-0.5 and Qwen2-1.5 models, LoRA (rank 8) performs best with the best balance between generation quality and prediction speed.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        For models with a large number of parameters, such as Phi-3, the Freeze method will significantly outperform LoRA and QLoRA. This may be due to the fact that the Phi-3 model has a large number of parameters, and the low-rank LoRA is not able to represent the original model's parameter matrices well. The core of LoRA lies in the fact that the model's original weights are approximated and modified by the introduction of low-rank matrices, instead of training these weights directly. As a result, the representation capabilities within the LoRA model cause limited changes and provide little improvement in effectiveness for complex generative tasks. This also explains why LoRA and QLoRA work better on models with a smaller number of parameters (e.g., Qwen2-0.5 and Qwen2-1.5). Because these models have a smaller number of parameters, the LoRA method can represent and tune their parameter matrices more efficiently.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        What’s more, for the Phi-3 model, we adjusted the rank of LoRA to 16, and the results showed an improvement in the generation task, but the final result is still not as good as the Freeze method. So, the optimal fine-tuning method on PubMedQA depends on the number of parameters and complexity of the chosen model. It is worth noting that while full-parameter fine-tuning theoretically improves model performance (as shown by higher Bleu-4 and Rouge-L scores), it does not offer advantages in terms of efficiency and resource consumption. Finally, as mentioned at the beginning, the baseline model performs worst in almost all cases, further emphasising the importance of fine-tuning.
      </Text>
    </Box>
  );
};

export default FineTuningComparison;
