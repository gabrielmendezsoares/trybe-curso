#!/bin/bash

delay=2
sleep $delay

mkdir unix_tests
cd unix_tests
pwd
touch trybe.txt
cp trybe.txt trybe_backup.txt
mv trybe.txt default_name.txt
mkdir backup
mkdir storage
mv trybe_backup.txt backup
mv backup/trybe_backup.txt storage
rmdir backup
mv storage backup
rm -rf backup
touch skills.txt
echo -e "Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL" > skills.txt
head -n 4 skills.txt
tail -n 4 skills.txt
rm *.txt
ls
clear
