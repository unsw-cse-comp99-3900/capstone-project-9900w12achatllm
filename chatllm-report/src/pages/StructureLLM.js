// src/pages/LiteratureReviewLLM.js
import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';

const LiteratureReviewLLM = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        The Structure of Large Language Models
      </Heading>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Large-scale language modelling (LLM) is a state-of-the-art technology based on deep learning that employs the Transformer architecture proposed by Vaswani et al. in 2017 to process and generate natural language text. The core of this architecture lies in the self-attention mechanism, which effectively captures the complex relationships between elements in a text sequence. There are three main types of transformer architectures: Encoder-only, Encoder-Decoder and Decoder-only. 
      </Text>
      <Image src="pictures/report_pic_3.png" alt="An illustration of main components of the transformer model from the ‘Attention is All You Need’ paper" mb={4} />
      <Text fontSize="lg" mb={4} textAlign="justify">
        In the Encoder-Decoder architecture, the encoder part first inputs sequence codes and uses them as context vectors, and then feeds these vectors into the decoder. The encoder is responsible for processing the input text, converting it into a series of context vectors. Each encoder layer consists of two main parts: a multi-head self-attention mechanism and a feed-forward neural network. The multi-head self-attention mechanism enables the model to understand the textual information from different perspectives, while the feed-forward neural network processes this information further. Then, the decoder also consists of multiple layers, each containing not only a multi-head attention layer for self-attention, but also an additional multi-head attention layer for interacting with the encoder output, and a feed-forward neural network layer. This setup allows the decoder to refer to the contextual information provided by the encoder when generating the target language sequence, leading to more accurate language conversion and generation.  For example, both early sequence-to-sequence (seq2seq) models and ChatGLM (Zeng et al., 2022) based on the Generalised Language Model (GLM) architecture, which greatly improves the model's performance in dialogue generation tasks, employ the encoder-decoder framework. In the context of understanding and generating multiple rounds of dialogue, the encoder-decoder architecture enables ChatGLM to efficiently process successive dialogue messages, resulting in more natural and coherent responses.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        In an Encoder-only architecture, the model consists of multiple identical encoder layers stacked on top of each other, each of which contains a multi-head self-attention layer and a feed-forward neural network layer. These layers work together to convert the input speech sequence into fixed-length context vectors that are enriched with semantic and structural features of the input information include only the encoder part and do not involve a decoder. This architecture is mainly used for tasks that require only encoding the input sequence without generating the output sequence, such as text categorisation, sentiment analysis and semantic representation. For example, BERT (Bidirectional Encoder Representation Transformer) (Devlin et al., 2018) is a model that employs a encoder-only architecture, this design allows BERT to demonstrate superior performance on a wide range of natural language processing tasks, such as language understanding, question and answer systems, and text categorisation.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        The Decoder-only architecture is typically applied to text generation tasks such as chatbots or creative writing assistance. It starts directly from a given starting symbol and progressively expands the text sequence, generating the next word at each step, building the output text incrementally by repeating the decoder layer, each step utilising the output of the previous step as input. During this process, the model utilises a self-attentive mechanism to maintain attention on the generated text parts, ensuring linguistic fluency and logical coherence. For example, models like Llama2 (Hugo et al., 2023), Qwen2 (Jinze, Paik et al., 2023), and several GPT models (Brown, 2020) use this architecture. These models utilise the power of the transformer architecture and are capable of handling complex natural language tasks such as text generation, language translation and content understanding. In particular, the GPT family, which employs a pure decoder architecture, has set new standards in the field of language modelling, demonstrating the advantages of this architecture in generating coherent and innovative texts.
      </Text>
      <Text fontSize="lg" mb={4} textAlign="justify">
        Furthermore, a significant advantage of the transformer architecture is that it does not rely on the sequential nature of the sequences, which allows the model to achieve efficient parallel computation, greatly improving the speed of processing. The introduction of the self-attention mechanism allows the model to find the relationships between the contents in the sequence, which is particularly important for processing long texts, as it is able to understand and utilise the global contextual information in the text. By simplifying the model structure, pure encoder and pure decoder architectures not only optimise computational efficiency, but also show even better performance in certain specific generation and comprehension tasks. Together, the design philosophy and technical details of these architectures ensure their widespread use and superior performance in modern natural language processing tasks.
      </Text>
      <Image src="pictures/report_pic_4.jpg" alt="An illustration of main components of the transformer model from the ‘Attention is All You Need’ paper" mb={4} />
    </Box>
  );
};

export default LiteratureReviewLLM;
