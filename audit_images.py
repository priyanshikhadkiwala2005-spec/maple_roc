import os
import re

pattern = re.compile(r'image-\d+-[a-z0-9\-]+\.(?:jpg|png|webp)')
usages = {}

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.jsx', '.js')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                matches = pattern.findall(content)
                for m in matches:
                    if m not in usages:
                        usages[m] = []
                    usages[m].append(filepath)

print(f"Total unique images referenced: {len(usages)}")
duplicates = {img: paths for img, paths in usages.items() if len(paths) > 1}
if duplicates:
    print(f"WARNING: {len(duplicates)} images have duplicate references:")
    for img, paths in duplicates.items():
        print(f"  {img} ({len(paths)} times):")
        for p in paths:
            print(f"    - {p}")
else:
    print("SUCCESS: Every image is used exactly once! ZERO duplicates.")

