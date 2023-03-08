#!/bin/bash

mkdir git_repository
cd git_repository
git init
touch README.md
git add .
git commit -m "[CREATE] README.md"
git checkout -b newBranch
cat >> README.md

# ---// [cat] - Logs //
Lorem ipsum
Lorem ipsum
Lorem ipsum
Lorem ipsum
# ---//

git add .
git commit -m "[CHANGE] README.md"
