// src/pages/References.js
import React from 'react';
import { Box, Heading, Text, Link, List, ListItem } from '@chakra-ui/react';

const References = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={6}>
        References
      </Heading>
      <List spacing={3}>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention is all you need. Advances in Neural Information Processing Systems, 30. Curran Associates, Inc.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Hochreiter, S., & Schmidhuber, J. (1997). Long short-term memory. Neural Computation, 9(8), 1735-1780. <Link href="https://doi.org/10.1162/neco.1997.9.8.1735" color="blue.500" isExternal>https://doi.org/10.1162/neco.1997.9.8.1735</Link>
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Brown, T. B., et al. (2020). Language models are few-shot learners. Advances in Neural Information Processing Systems, 33.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Zeng, A., Liu, X., Du, Z., Wang, Z., Lai, H., Ding, M., Yang, Z., Xu, Y., Zheng, W., Xia, X., et al. (2022). GLM-130b: An open bilingual pre-trained model. arXiv preprint arXiv:2210.02414.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2018). BERT: Pre-training of deep bidirectional transformers for language understanding. arXiv:1810.04805v2 [cs.CL].
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Touvron, H., Martin, L., Stone, K., et al. (2023). Llama 2: Open foundation and fine-tuned chat models. arXiv preprint arXiv:2307.19458.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Bai, J., Bai, S., Chu, Y., Cui, Z., Dang, K., Deng, X., Fan, Y., et al. (2023). Qwen technical report. arXiv preprint arXiv:2309.16609.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Abdin, M., Huynh, J., et al. (2024). Phi-3 technical report: A highly capable language model locally on your phone. arXiv preprint arXiv:2404.14219.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Wolf, T., et al. (2019). HuggingFace's Transformers: State-of-the-art natural language processing. arXiv preprint arXiv:1910.03771.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Houlsby, N., Giurgiu, A., Jastrzebski, S., Morrone, B., De Laroussilhe, Q., Gesmundo, A., ... & Gelly, S. (2019). Parameter-efficient transfer learning for NLP. In International conference on machine learning (pp. 2790-2799). PMLR.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Pfeiffer, J., Kamath, A., Rücklé, A., Cho, K., & Gurevych, I. (2020). Adapterfusion: Non-destructive task composition for transfer learning. arXiv preprint arXiv:2005.00247.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Rücklé, A., Geigle, G., Glockner, M., Beck, T., Pfeiffer, J., Reimers, N., & Gurevych, I. (2020). Adapterdrop: On the efficiency of adapters in transformers. arXiv preprint arXiv:2010.11918.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Li, X. L., & Liang, P. (2021). Prefix-tuning: Optimizing continuous prompts for generation. arXiv preprint arXiv:2101.00190.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Lester, B., Al-Rfou, R., & Constant, N. (2021). The power of scale for parameter-efficient prompt tuning. arXiv preprint arXiv:2104.08691.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Guo, D., Rush, A. M., & Kim, Y. (2020). Parameter-efficient transfer learning with diff pruning. arXiv preprint arXiv:2012.07463.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Hu, E. J., Shen, Y., Wallis, P., Allen-Zhu, Z., Li, Y., Wang, S., ... & Chen, W. (2021). Lora: Low-rank adaptation of large language models. arXiv preprint arXiv:2106.09685.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Fan, A., Grave, E., & Joulin, A. (2021). Reducing transformer depth on demand with structured dropout. ICLR.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Zhang, Q., Chen, M., Bukharin, A., He, P., Cheng, Y., Chen, W., & Zhao, T. (2023). Adaptive budget allocation for parameter-efficient fine-tuning. In International Conference on Learning Representations. Openreview.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Dettmers, T., Pagnoni, A., Holtzman, A., & Zettlemoyer, L. (2024). Qlora: Efficient finetuning of quantized llms. Advances in Neural Information Processing Systems, 36.
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Hugging Face. (2024). Phi-3-mini-4k-instruct. Retrieved July 24, 2024, from <Link href="https://huggingface.co/microsoft/Phi-3-mini-4k-instruct" color="blue.500" isExternal>https://huggingface.co/microsoft/Phi-3-mini-4k-instruct</Link>
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Jin, Q., et al. (2019). PubMedQA: A dataset for biomedical research question answering. arXiv:1909.06146. <Link href="https://doi.org/10.48550/arXiv.1909.06146" color="blue.500" isExternal>https://doi.org/10.48550/arXiv.1909.06146</Link>
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Jin, D., et al. (2021). What Disease does this Patient Have? A large-scale open domain question answering dataset from medical exams. arXiv:2009.13081. <Link href="https://doi.org/10.48550/arXiv.2009.13081" color="blue.500" isExternal>https://doi.org/10.48550/arXiv.2009.13081</Link>
          </Text>
        </ListItem>
        <ListItem>
          <Text fontSize="lg" textAlign="justify">
            Code Labs Academy. (n.d.). Understanding BLEU Score in NLP: Evaluating Translation Quality. Retrieved July 26, 2024, from <Link href="https://codelabsacademy.com/blog/understanding-bleu-score-in-nlp-evaluating-translation-quality" color="blue.500" isExternal>https://codelabsacademy.com/blog/understanding-bleu-score-in-nlp-evaluating-translation-quality</Link>
          </Text>
        </ListItem>
      </List>
    </Box>
  );
};

export default References;
