import React from 'react';
import { Box, Heading, Text, Code, Link } from '@chakra-ui/react';

const HyperparameterExplore = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Hyperparameter Exploration
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        In this section, we will describe how to debug the hyperparameter settings to ensure that the best hyperparameters are found. As shown in the example below, Qwen2-0.5B-instruct uses Full for fine-tuning.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        First, we will introduce some basic setting:
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
      <Box p={4} mb={4} as="pre" overflowX="auto" bg="gray.100">
        <Code>
          {`--model_name_or_path model/ Qwen2-0.5B-Instruct`}
        </Code>
      </Box>
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        We can change the Qwen2-0.5B-Instruct to Qwen2-1.5B-Instruct or Phi-3-mini-4k-instruct, to achieve loading different models.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
      <Box p={4} mb={4} as="pre" overflowX="auto" bg="gray.100">
        <Code>
          {`--finetuning_type full`}
        </Code>
      </Box>
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        This step is setting the fine-tuning method, the ‘full’ can be changed to ‘Freeze’, ‘LoRA’ and so on.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Then, we mainly focused on those 4 hyperparameters in this project:
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
      <Box p={4} mb={4} as="pre" overflowX="auto" bg="gray.100" display="flex" alignItems="center">
        <Code>
          {`--learning_rate 1e-06
--num_train_epochs 2.0
--per_device_train_batch_size 2
--max_samples 500`}
        </Code>
      </Box>
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Those hyperparameters always have significant impact on the performance and efficiency of the training process in machine learning. Therefore, we varied the values of these hyperparameters by LLaMA-Factory command lines, observed and collected loss graphs (as shown in the Appendix) and made analyses in week 5 and week 8, and finally collected the optimal hyperparameter settings for our training model under insufficient computational resources.
      </Text>
      <Box p={4} mb={4} as="pre" overflowX="auto" bg="gray.100">
        <Code>
        {`!llamafactory-cli train \\
    --stage sft \\
    --do_train True \\
    --model_name_or_path model/Qwen2-0.5B-Instruct \\
    --preprocessing_num_workers 16 \\
    --finetuning_type lora \\
    --template qwen \\
    --flash_attn auto \\
    --dataset_dir data \\
    --dataset MedQA_train,PubMedQA_pqal_train \\
    --cutoff_len 1024 \\
    --learning_rate 5e-05 \\
    --num_train_epochs 3.0 \\
    --max_samples 500 \\
    --per_device_train_batch_size 2 \\
    --gradient_accumulation_steps 8 \\
    --lr_scheduler_type cosine \\
    --max_grad_norm 1.0 \\
    --logging_steps 5 \\
    --save_steps 1000 \\
    --warmup_steps 0 \\
    --optim adamw_torch \\
    --packing False \\
    --report_to none \\
    --output_dir saves/Qwen2-0.5B-Instruct/bz/train_lora_bz=2 \\
    --fp16 True \\
    --plot_loss True \\
    --ddp_timeout 180000000 \\
    --include_num_input_tokens_seen True \\
    --lora_rank 8 \\
    --lora_alpha 16 \\
    --lora_dropout 0 \\
    --lora_target all \\
    --val_size 0.1 \\
    --eval_strategy steps \\
    --eval_steps 10 \\
    --per_device_eval_batch_size 2
        `}
        </Code>
      </Box>
      <Text fontSize="lg" mb={4} textAlign="justify">
        More Codes like other models and other fine-tuning methods with different hyperparameter settings can be found in our GitHub: 
        <Link href="https://github.com/unsw-cse-comp99-3900-24t1/capstone-project-9900w12achatllm/tree/main/Notebook" isExternal color="teal.500">
          https://github.com/unsw-cse-comp99-3900-24t1/capstone-project-9900w12achatllm/tree/main/Notebook
        </Link>
      </Text>
    </Box>
  );
};

export default HyperparameterExplore;

