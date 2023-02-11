mkdir unix_tests
cd unix_tests
touch trybe.txt
cp trybe.txt trybe_backup.txt
mv trybe.txt outro_nome.txt
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

# ---//

Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL

# ---//

head -n 5 skills.txt
tail -n 4 skills.txt
rm *.txt