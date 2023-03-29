#!/bin/bash

mkdir git_repository
cd git_repository
git init
touch .gitkeep
git add .
git commit -m "[CREATE] - .gitkeep"
git checkout -b add-gitignore
touch .gitignore
git add .
git commit -m "[CREATE] - .gitignore"
git checkout master
git merge add-gitignore
git checkout -b add-readme
touch README.md
git add .
git commit -m "[CREATE] - README.md"
git checkout master
git merge add-readme
cd ..
rm -rf git_repository
