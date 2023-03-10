#!/bin/bash

delay=2
sleep $delay

mkdir git_repository
cd git_repository
git init
touch README.md
git add .
git commit -m "[CREATE] README.md"
git checkout -b add-readme
echo -e "First name: Gabriel\nLast name: Soares" >README.md
git add .
git commit -m "[CHANGE] README.md"
git checkout main
git merge add-readme
git checkout -b update-readme
touch INFO.txt
echo -e "Lorem ipsum\nLorem ipsum\nLorem ipsum\nLorem ipsum" >INFO.txt
git add .
git commit -m "[CREATE] INFO.txt"
echo -e "Lorem ipsum\nLorem ipsum\nLorem ipsum\nLorem ipsum" >>INFO.txt
git add .
git commit -m "[CHANGE] INFO.txt"
git checkout -b add-info
echo -e "Lorem ipsum\nLorem ipsum\nLorem ipsum\nLorem ipsum" >>INFO.txt
git add .
git commit -m "[CHANGE] INFO.txt"
git checkout update-readme
git merge add-info
git checkout main
git merge update-readme
