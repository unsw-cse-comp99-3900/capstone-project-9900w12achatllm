
import React from 'react';
import { Box, Heading, Text, Code, Link } from '@chakra-ui/react';

const DataTransform = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        Data Transform
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Since the original data format could not be used directly in the model training, we performed a format transformation of our dataset.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Firstly, the data conversion for MedQA is shown here. We change the data from:
      </Text>
      <Box p={4} mb={4} as="pre" overflowX="auto" bg="gray.100">
        <Code>
          {`instruction = f"Answer the following multiple choice question: {item.get('question', '')}, {options_str}"
instruction = re.sub(r'\\u3000', ' ', instruction)
question_entry = {
    "instruction": instruction,
    "input": "",
    "output": answer,
}`}
        </Code>
      </Box>
      <Text fontSize="lg" mb={4} textAlign="justify">
        To:
      </Text>
      <Box p={4} mb={4} as="pre" overflowX="auto" bg="gray.100">
        <Code>
          {`# changed version
instruction = "Answer the following multiple choice question"
question_entry = {
    "instruction": instruction,
    "input": options_str,
    "output": answer,
}`}
        </Code>
      </Box>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Then, for data conversion for PubMedQA, we change the data from:
      </Text>
      <Box p={4} mb={4} as="pre" overflowX="auto" bg="gray.100">
        <Code>
          {`instruction = f"Answer the biomedical research question: {item.get('QUESTION', '')}"
question_entry = {
    "instruction": instruction,
    "input": f"{' '.join(item.get('CONTEXTS', []))}",
    "output": item.get("LONG_ANSWER", ""),
}
target_data.append(question_entry)`}
        </Code>
      </Box>
      <Text fontSize="lg" mb={4} textAlign="justify">
        To:
      </Text>
      <Box p={4} mb={4} as="pre" overflowX="auto" bg="gray.100">
        <Code>
          {`# changed version
instruction = "Answer the biomedical research question given the question and contexts"
input_text = "QUESTION: " + item.get('QUESTION', '') + "\\nCONTEXTS: " + ' '.join(item.get('CONTEXTS', []))

question_entry = {
    "instruction": instruction,
    "input": input_text,
    "output": item.get('final_decision', '') + ". " + item.get("LONG_ANSWER", ""),
}
target_data.append(question_entry)`}
        </Code>
      </Box>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The detailed data transformation code can be found in the Appendix and on GitHub: 
        <Link href="https://github.com/unsw-cse-comp99-3900-24t1/capstone-project-9900w12achatllm/tree/main/Notebook" isExternal color="teal.500">
          https://github.com/unsw-cse-comp99-3900-24t1/capstone-project-9900w12achatllm/tree/main/Notebook
        </Link>
      </Text>
    </Box>
  );
};

export default DataTransform;
