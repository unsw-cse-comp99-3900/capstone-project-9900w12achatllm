# Group Name: 9900W12AChatLLM 



## Project Title 

**P3 Comparative Analysis of Fine-Tuning Techniques for Large Language Models on Domain-Specific Tasks**



### Fine-tuning Part

**Description**: Refer to the fine-tuning framework - **[LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)** We deploy our fine-tuning experiment on **Kaggle platform** with free GPU computational resources. Our goal is to fine-tune **Qwen2-0.5B-instruct, Qwen2-1.5B-instruct and Phi-3-mini-4k** on medical field using **MedQA and PubMedQA** dataset.



#### Installation

Clone the repo and install dependencies.

```python
!git clone https://github.com/hiyouga/LLaMA-Factory.git
!cd LLaMA-Factory; pip install -e ".[torch,metrics]"
```



#### Data Preparation

Configure the dataset information on *data/dataset_info.json*, and upload the processed MedQA and PubMedQA datasets.

```python
import json

file_path = '/kaggle/working/LLaMA-Factory/data/dataset_info.json'

with open(file_path, 'r') as file:
    data = json.load(file)

new_data = {
    "MedQA_train": {"file_name": "MedQA/train.json"},
    "MedQA_test": {"file_name": "MedQA/test.json"},
    "PubMedQA_pqal_train": {"file_name": "PubMedQA/pqal_train_set.json"},
    "PubMedQA_pqal_test": {"file_name": "PubMedQA/pqal_test_set.json"}
}

data.update(new_data)

with open(file_path, 'w') as file:
    json.dump(data, file, indent=4)

!mkdir -p /kaggle/working/LLaMA-Factory/data/MedQA
!mkdir -p /kaggle/working/LLaMA-Factory/data/PubMedQA

!cp /kaggle/input/medqa-pubmedqa/MedQA/train.json /kaggle/working/LLaMA-Factory/data/MedQA/
!cp /kaggle/input/medqa-pubmedqa/MedQA/test.json /kaggle/working/LLaMA-Factory/data/MedQA/
!cp /kaggle/input/medqa-pubmedqa/PubMedQA/pqal_train_set.json /kaggle/working/LLaMA-Factory/data/PubMedQA/
!cp /kaggle/input/medqa-pubmedqa/PubMedQA/pqal_test_set.json /kaggle/working/LLaMA-Factory/data/PubMedQA/
```



#### Use command line to perform fine-tuning

```python
!llamafactory-cli train \
    --stage sft \
    --do_train True \
    --model_name_or_path Qwen/Qwen2-0.5B-Instruct \
    ...
```



#### Reference and Acknowledgements

Dataset source: [MedQA](https://github.com/jind11/MedQA) and [pubmedqa](https://github.com/pubmedqa/pubmedqa)

This project is developed based on [Llama-Factory](https://github.com/hiyouga/LLaMA-Factory). We have used the Llama-Factory framework as the foundation for fine-tuning large models and have made necessary modifications to adapt it to our datasets and specific requirements. 