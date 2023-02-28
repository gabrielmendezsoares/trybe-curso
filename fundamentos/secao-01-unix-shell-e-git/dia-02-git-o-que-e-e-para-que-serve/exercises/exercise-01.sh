#!/bin/bash

mkdir git_repository
cd git_repository
git init
code .
touch README.md
git add .
git commit -m "README file creation 📄"
git checkout -b add-readme
cat > README.md

# ---// Concatenation Log //
README file
First change
# ---//

git add .
git commit -m "Changing README file 📝"
git checkout main
git merge add-readme
git checkout -b update-readme
touch INFO.txt
cat > INFO.txt

# ---// Concatenation Log //
README file
First change
# ---//

git add .
git commit -m "INFO file creation 📄"
cat >> INFO.txt

# ---// Concatenation Log //
Name: Gabriel
Last name: Mendez Soares
# --//

git add .
git commit -m "Changing INFO file 📝"
git checkout -b add-info
cat >> INFO.txt

# ---// Concatenation Log //
User information
Last change
# ---//

git add .
git commit -m "Changing INFO file 📝"
git checkout update-readme
git merge add-info
git checkout main
git merge update-readme
