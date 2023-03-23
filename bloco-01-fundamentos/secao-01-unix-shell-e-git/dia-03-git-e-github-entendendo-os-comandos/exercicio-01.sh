#!/bin/bash

mkdir git_repository
cd git_repository
git init
touch README.md
git add .
git commit -m "[CREATE] README.md"
git checkout -b update-readme

for index in 1 2 3 4 5; do
  echo "${index} Lorem ipsum" >>README.md
done

git add .
git commit -m "[CHANGE] README.md"
git checkout master
git merge update-readme
cd ..
rm -rf git_repository
