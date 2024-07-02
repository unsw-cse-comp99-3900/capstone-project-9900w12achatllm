import json
import os
import re
import chardet

def detect_encoding(filename):
    with open(filename, 'rb') as f:
        raw_data = f.read()
    result = chardet.detect(raw_data)
    return result['encoding']

def load_jsonl(filename):
    encoding = detect_encoding(filename)
    data = []
    with open(filename, 'r', encoding=encoding, errors='ignore') as f:
        for line in f:
            line = line.strip()
            if line:
                try:
                    data.append(json.loads(line))
                except json.JSONDecodeError as e:
                    print(f"Skipping invalid JSON line in {filename}: {line}")
    return data

def load_json(filename):
    encoding = detect_encoding(filename)
    with open(filename, 'r', encoding=encoding, errors='ignore') as f:
        content = f.read().strip()
        if content:
            try:
                return json.loads(content)
            except json.JSONDecodeError as e:
                print(f"Skipping invalid JSON file {filename}: {e}")
                return {}
        else:
            print(f"Empty file: {filename}")
            return {}

def convert_jsonl_to_target_format(data):
    '''convert jsonl to json'''
    target_data = []
    answer_option = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'] # give enough options to avoid error
    for item in data:
        options = item.get('options', [])

        if not options:
            continue
        
        if isinstance(options, list):
            question_option = []
            for ans, opt in zip(answer_option, map(str, options)):
                question_option.append(ans + ': ' + opt)

            options_str = ', '.join(map(str, question_option))

            option = item.get("answer_idx", '').upper() if 'answer_idx' in item else item.get("answer", '').upper()
            answer_index = answer_option.index(option) if option else ''
            answer = answer_option[answer_index] + ': ' + options[answer_index] if answer_index is not None else ''
        elif isinstance(options, dict):
            question_option = []
            for key, val in options.items():
                question_option.append(key + ": " + val.strip())

            options_str = ', '.join(map(str, question_option))

            option = item.get("answer_idx", '').upper() if 'answer_idx' in item else item.get("answer", '').upper()
            answer = option + ': ' + options[option].strip()

        # instruction = f"Answer the following multiple choice question: {item.get('question', '')}, {options_str}"
        # instruction = re.sub(r'\u3000', ' ', instruction)
        # question_entry = {
        #     "instruction": instruction,
        #     "input": "",
        #     "output": answer,
        # }

        # changed version
        instruction = "Answer the following multiple choice question"
        question_entry = {
            "instruction": instruction,
            "input": options_str,  # 将选项字符串放在 input 字段
            "output": answer,
        }

        target_data.append(question_entry)
    return target_data

def convert_json_to_target_format(data):
    target_data = []
    for key, item in data.items():
        # instruction = f"Answer the biomedical research question: {item.get('QUESTION', '')}"
        #
        # question_entry = {
        #     "instruction": instruction,
        #     "input": f"{' '.join(item.get('CONTEXTS', []))}",
        #     "output": item.get("LONG_ANSWER", ""),
        # }
        # target_data.append(question_entry)

        # changed version
        instruction = "Answer the biomedical research question given the question and contexts"
        input_text = "QUESTION: " + item.get('QUESTION', '') + "\nCONTEXTS: " + ' '.join(item.get('CONTEXTS', []))

        question_entry = {
            "instruction": instruction,
            "input": input_text,
            "output": item.get('final_decision', '') + ". " + item.get("LONG_ANSWER", ""),
        }
        target_data.append(question_entry)
    return target_data

def save_to_json(filename, data):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def save_to_jsonl(filename, data):
    with open(filename, 'w', encoding='utf-8') as f:
        for entry in data:
            f.write(json.dumps(entry, ensure_ascii=False) + '\n')

# loading jsonl data
for root, dirs, files in os.walk('./MedQA'):
    for file in files:
        if file.endswith('.jsonl') and not file.startswith('._'):
            jsonl_file = os.path.join(root, file)

            # get filename
            filename_with_extension = os.path.basename(jsonl_file)
            filename, _ = os.path.splitext(filename_with_extension)
            
            raw_data = load_jsonl(jsonl_file)
            target_formatted_data = convert_jsonl_to_target_format(raw_data)
            
            # cover previuos files
            if os.path.exists(jsonl_file):
                os.remove(jsonl_file)

            save_path = os.path.join(root, filename + '.json')
            save_to_json(save_path, target_formatted_data)

            print(f"{filename_with_extension} transformation done.")


for root, dirs, files in os.walk('./PubMedQA'):
    for file in files:
        if file.endswith('.json') and not file.startswith('._'):
            json_file = os.path.join(root, file)
            
            raw_data = load_json(json_file)
            target_formatted_data = convert_json_to_target_format(raw_data)

            # cover the previous files
            save_to_json(json_file, target_formatted_data)

            print(f"{os.path.basename(json_file)} transformation done.")

print("Transformation done.")
