#!/bin/bash

mkdir unix_tests
cd unix_tests
pwd
touch trybe.txt
cp trybe.txt trybe_backup.txt
mv trybe.txt default_name.txt
mkdir backup
mkdir storage
mv trybe_backup backup
mv backup/trybe_backup storage
rmdir backup
mv storage backup
rm -rf backup
touch skills.txt
cat > skills.txt

# ---// [cat] Logs //
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
# ---//

head -n 4 skills.txt
tail -n 4 skills.txt
rm *.txt
ls
clear
