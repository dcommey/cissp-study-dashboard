import os
import json

base_dir = os.path.dirname(os.path.abspath(__file__))
output_file = os.path.join(base_dir, "data.js")

# Find all folders matching the pattern DD_*
folders = []
for name in os.listdir(base_dir):
    dir_path = os.path.join(base_dir, name)
    if os.path.isdir(dir_path) and name[:2].isdigit() and "_" in name:
        folders.append(name)

# Sort folders numerically by index
folders.sort()

cissp_data = []

print(f"Compiling data for {len(folders)} folders...")

for folder in folders:
    folder_path = os.path.join(base_dir, folder)
    meta_path = os.path.join(folder_path, "metadata.json")
    notes_path = os.path.join(folder_path, "study_notes.md")
    quiz_path = os.path.join(folder_path, "quiz.json")
    
    if os.path.exists(meta_path):
        with open(meta_path, "r", encoding="utf-8") as mf:
            meta = json.load(mf)
            
        notes_content = ""
        if os.path.exists(notes_path):
            with open(notes_path, "r", encoding="utf-8") as nf:
                notes_content = nf.read()
                
        quiz_content = []
        if os.path.exists(quiz_path):
            with open(quiz_path, "r", encoding="utf-8") as qf:
                quiz_content = json.load(qf)
                
        cissp_data.append({
            "index": meta.get("index"),
            "title": meta.get("title"),
            "video_id": meta.get("video_id"),
            "url": meta.get("url"),
            "notes": notes_content,
            "quiz": quiz_content
        })
        print(f"  Compiled: {meta.get('title')}")

# Write to data.js as a global javascript variable
with open(output_file, "w", encoding="utf-8") as out:
    out.write("// CISSP Study Dashboard Local Data\n")
    out.write("const cisspData = ")
    json.dump(cissp_data, out, indent=2, ensure_ascii=False)
    out.write(";\n")

print(f"Database compiled successfully to {output_file}")
