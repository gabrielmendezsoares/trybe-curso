#!/bin/bash

mkdir git_repository
cd git_repository
git init
touch README.md
git add .
git commit -m "[CREATE] README.md"
git checkout -b newBranch
echo -e "Lorem ipsum\nLorem ipsum\nLorem ipsum\nLorem ipsum" >README.md
git add .
git commit -m "[CHANGE] README.md"
