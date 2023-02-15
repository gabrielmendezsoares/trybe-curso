#!/bin/bash

# Made by: Gabriel Mendez Soares
# Feito por : Gabriel Mendez Soares

mkdir unix_tests
cd unix_tests
touch trybe.txt
cp trybe.txt trybe_backup.txt
mv trybe.txt default_name.txt
mkdir backup
mv trybe_backup backup
mkdir backup2
mv backup/trybe_backup backup2
rm backup
mv backup2 backup
pwd
ls
rm -rf backup
clear
touch skills.txt
cat > skills.txt

# ---// Insertion Log //
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
# ---// Insertion Log //

head -n 5 skills.txt
tail -n 4 skills.txt
rm *.txt
