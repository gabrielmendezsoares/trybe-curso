#!/bin/bash

# Made by: Gabriel Mendez Soares
# Feito por : Gabriel Mendez Soares

mkdir git_repository
cd git_repository
git init
code .
touch README.md
git add .
git commit -m "README file creation 📄"
git checkout -b add-readme
cat > README.md

# ---// Insertion Log //
Git repository
First change
# ---//

git add .
git commit -m "Changing README file 📝"
git checkout main
git merge add-readme
git checkout -b update-readme
touch INFO.txt
cat > INFO.txt

# ---// Insertion Log //
Information file
First change
# ---//

git add .
git commit -m "INFO file creation 📄"
cat >> INFO.txt

# ---// Insertion Log //
Name: Gabriel
Last name: Mendez Soares
# --//

git add .
git commit -m "Changing INFO file 📝"
git checkout -b add-info
cat >> INFO.txt

# ---// Insertion Log //
User information above
Last change
# ---//

git add .
git commit -m "Changing INFO file 📝"
git checkout update-readme
git merge add-info
git checkout main
git merge update-readme
