#！/bin/bash

# move all the pics into pictures
mv src/report* chatllm-report/public/pictures

# move to pictures
cd chatllm-report/public/pictures

# convert all the .jpeg files into .png
for file in *.jpg; do
    if [ -f "$file" ]; then
        convert "$file" "${file%.jpg}.png"
        rm "$file"
    fi
done

echo "All report images have been moved and converted."