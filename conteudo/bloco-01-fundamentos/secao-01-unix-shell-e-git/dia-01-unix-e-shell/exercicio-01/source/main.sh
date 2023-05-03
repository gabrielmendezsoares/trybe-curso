#!/bin/bash

mkdir unix_tests
cd unix_tests
touch template_default.txt
cp template_default.txt template_backup.txt
mv template_default.txt template_file.txt
mkdir backup
mkdir storage
mv template_backup.txt backup
mv backup/template_backup.txt storage
rmdir backup
mv storage backup
rm -rf backup
touch notes_file.txt

for index in 1 2 3 4 5; do
  echo "${index} Lorem ipsum" >>template_file.txt
done

for index in 1 2 3 4 5; do
  echo "${index} Lorem ipsum" >>template_default.txt
done

for index in 1 2 3 4 5; do
  echo "${index} Lorem ipsum" >>notes_files.txt
done

head -n 4 notes_file.txt
tail -n 4 notes_file.txt
rm *.txt
cd ..
rmdir unix_tests
