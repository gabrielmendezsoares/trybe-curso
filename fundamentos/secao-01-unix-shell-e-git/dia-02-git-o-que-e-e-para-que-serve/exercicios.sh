mkdir repositorio_git
cd repositorio_git
git init
code .
touch README.md
git add .
git commit -m "Criação do arquivo README"
git checkout -b adiciona-readme
cat > README.md

# ---//

Meu repósitorio Git
Minha alteração

# ---//

git add .
git commit -m "Alterando o README"
git checkout main
git merge adiciona-readme
git checkout -b atualiza-readme
touch infos.txt
cat > infos.txt

# ---//

Arquivo de informação
Nova alteração

# ---//

git add .
git commit -m "Alterando o arquivo infos"
cat >> infos.txt

# ---//

Nome: Gabriel
Sobrenome: Mendez Soares

# --//

git add .
git commit -m "Adicionando nome e sobrenome em infos"
git checkout -b adiciona-infos
cat >> infos.txt

# ---//

Outra atualização
Arquivo pronto

# ---//

git add .
git commit -m "Adicionando informações em infos"
git checkout atualiza-readme
git merge adiciona-infos
git checkout main
git merge atualiza-readme