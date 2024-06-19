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
    target_data = []
    for item in data:
        options = item.get('options', [])
        options_str = ','.join(map(str, options))
        instruction = f"{item.get('question', '')}, options: {options_str}, meta_info: {item.get('meta_info', '')}"
        instruction = re.sub(r'\u3000', ' ', instruction)
        question_entry = {
            "instruction": instruction,
            "input": "",
            "output": item.get("answer", ""),
            "system": "",
            "history": ""
        }
        target_data.append(question_entry)
    return target_data

def convert_json_to_target_format(data):
    target_data = []
    for key, item in data.items():
        system = f"LABELS: {item.get('LABELS', [])}, MESHES: {item.get('MESHES', [])}, YEAR: {item.get('YEAR', '')}"
        question_entry = {
            "instruction": item.get("QUESTION", ""),
            "input": f"{item.get('CONTEXT', [])}",
            "output": item.get("LONG_ANSWER", ""),
            "system": system,
            "history": ""
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
            
            raw_data = load_jsonl(jsonl_file)
            target_formatted_data = convert_jsonl_to_target_format(raw_data)
            
            # cover previuos files
            save_to_jsonl(jsonl_file, target_formatted_data)


for root, dirs, files in os.walk('./PubMedQA'):
    for file in files:
        if file.endswith('.json')  and not file.startswith('._'):
            json_file = os.path.join(root, file)
            
            raw_data = load_json(json_file)
            target_formatted_data = convert_json_to_target_format(raw_data)

            # cover the previous files
            save_to_json(json_file, target_formatted_data)

print("Transformation done.")
