
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const UserDrivenEvaluationConclusion = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        User-Driven Evaluation Conclusion
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The fine-tuning technique significantly improved the performance of all models on the PubMedQA dataset. The baseline model performed the worst on almost all evaluation metrics, highlighting the need for fine-tuning techniques. The Freeze method performed well on the Phi-3 model with a high number of parameters, achieving the highest BLEU-4 (36.268805) and ROUGE-L (26.933665) scores, demonstrating its superiority in high-quality text generation tasks. LoRA (rank 8) performs best on the Qwen2-0.5 and Qwen2-1.5 models, successfully balancing generation quality and prediction speed. QLoRA is the slowest in terms of overall prediction speed and underperforms the other approaches on the Qwen2-0.5 and Qwen2-1.5 models. Although full-parameter fine-tuning showed high ROUGE-L scores on the Qwen2-0.5 model, it had lower BLEU-4 scores and was more efficient and resource-intensive. Taken together, the Phi-3 model using the Freeze method is the best choice for generating high-quality text, while Qwen2-0.5 and Qwen2-1.5 provide a good balance when using the LoRA (rank 8) method for tasks that require efficient and high-quality generation.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        On the MedQA dataset, the Phi-3 model is significantly more accurate than the other two models under all fine-tuning methods, and its excellent performance on MedQA is mainly due to the strong performance of its base model. Although the Freeze method performed relatively well on the Phi-3 model, the LoRA and QLoRA methods were more prominent in terms of accuracy. LoRA (rank 8) performed well across all models, showing the best accuracy especially on the Qwen2-1.5 model. QLoRA, despite being the slowest in terms of overall prediction speed, showed the best accuracy on both the Qwen2-0.5 and the Qwen2-1.5 models. Qwen2-0.5 was the fastest in terms of prediction speed but not as good as Phi-3 in terms of accuracy. Qwen2-1.5 showed the best performance in terms of both quality of generation and accuracy when using the LoRA (rank 8) method, albeit a little slower than Qwen2-0.5. In summary, the Phi-3 model showed the best performance in terms of quality of generation and accuracy under all the fine-tuning methods performs best on the MedQA dataset, especially when using the Freeze method; Qwen2-0.5 provides a good balance when using the LoRA (rank 8) method for tasks that require a fast response; and Qwen2-1.5 provides the highest generation quality and accuracy when using the LoRA (rank 8) method for tasks requiring high accuracy.
      </Text>
    </Box>
  );
};

export default UserDrivenEvaluationConclusion;
