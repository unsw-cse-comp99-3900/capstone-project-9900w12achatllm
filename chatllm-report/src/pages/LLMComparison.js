
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const LLMComparison = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        LLM Comparison
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        For Phi-3, it performs the best on MedQA, with double accuracy over other two models, but has slowest prediction speed among three models for both datasets. For PubMedQA, also, it shows the best Bleu-4 and Rouge-L scores with the Freeze method. However, the baseline model performs moderately, while it has poor performance with LoRA (rank 8) and QLoRA methods. For Qwen2-0.5, overall, it has greatest prediction speed among three models. Noticeably, it has the second-best performance with LoRA and QLoRA method, after Qwen2-1.5. Besides, it performs the worst without any fine-tuning methods. For Qwen2-1.5, for baseline model or using LoRA, QLoRA methods, it has the greatest performance on PubMedQA with moderate prediction speed.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Overall, Phi-3 using the Freeze method performed well on the high-quality text generation task. In addition, the Phi3 model is also significantly more accurate on MedQA than the other two models under all fine-tuning methods. Firstly, because the Phi-3 base model itself performs well on MedQA compared to the other two models, and fine-tuning only adds logical reasoning to the model. In contrast, Qwen2-0.5 provides a good balance between prediction speed and quality and performs particularly well when using the LoRA (rank 8) method. Qwen2-1.5 generates the best quality when using the LoRA (rank 8) method, while also maintaining a balanced performance on both datasets. Qwen2-1.5 performs better on MedQA than Qwen2-0.5 is slower due to more adjustable parameters. As for the native model, it is not instructionally fine-tuned and usually generates a longer answer, resulting in a slower response to the question. The effect of instruction fine-tuning is more on the output format, but not on the learning of professional knowledge, even as a side effect, which is why on Qwen2-1.5, fine-tuning performs worse on MedQA. In other words, the core mechanism of instruction fine-tuning is not for the model to "learn" additional knowledge, but to align itself with the existing knowledge within the model. Therefore, it is not the injection of domain knowledge that ultimately determines the performance of instruction fine-tuning, but whether the process of instruction fine-tuning can achieve more effective self-alignment.
      </Text>
    </Box>
  );
};

export default LLMComparison;
