#!/bin/bash

mkdir git_repository
cd git_repository
git init
touch README.md
git add .
git commit -m "[CREATE] README.md"
git checkout -b add-readme
cat >> README.md

# ---// [cat] Logs //
Name: Gabriel
Last name: Soares
# ---//

git add .
git commit -m "[CHANGE] README.md"
git checkout main
git merge add-readme
git checkout -b update-readme
touch INFO.txt
cat >> INFO.txt

# ---// [cat] Logs //
Lorem ipsum
Lorem ipsum
Lorem ipsum
Lorem ipsum
# ---//

git add .
git commit -m "[CREATE] INFO.txt"
cat >> INFO.txt

# ---// [cat] Logs //
Lorem ipsum
Lorem ipsum
Lorem ipsum
Lorem ipsum
# --//

git add .
git commit -m "[CHANGE] INFO.txt"
git checkout -b add-info
cat >> INFO.txt

# ---// [cat] Logs //
Lorem ipsum
Lorem ipsum
Lorem ipsum
Lorem ipsum
# ---//

git add .
git commit -m "[CHANGE] INFO.txt"
git checkout update-readme
git merge add-info
git checkout main
git merge update-readme
