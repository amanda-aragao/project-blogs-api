# Blogs API

O projeto **Blogs API** foi desenvolvido como parte do currículo de formação da Trybe, uma escola de tecnologia focada na formação de Desenvolvedores Web. A aplicação é uma API em Node.js que utiliza o pacote Sequelize para realizar operações CRUD (Create, Read, Update, Delete) em posts. Ela segue os princípios do REST (Representational State Transfer) e inclui autenticação de usuário.

## Tecnologias Utilizadas

- MySQL
- Node.js
- Docker
- Express
- Sequelize

O projeto utiliza a arquitetura Model-Service-Controller (MSC) para organizar o código.

## Instruções

1. Clone este repositório:

   ```bash
   git clone git@github.com:amanda-aragao/project-blogs-api.git
Acesse o diretório do projeto e instale as dependências:

2. Acesse o diretório do projeto e instale as dependências:

   ```bash
   npm install 

3. Inicie os containers do compose blogs_api e blogs_api_db:

   ```bash
   docker-compose up -d

4. Acesse o terminal interativo do container criado pelo compose:

   ```bash
    docker-compose exec blogs_api bash

5. Instale as dependências dentro do container:

   ```bash
   npm install 

6. Para criar o banco de dados e popular, utilize os comandos:

   ```bash
   npm prestart
   npm seed

## Endpoints
### Users
* GET /users: Obtém todos os usuários.
* GET /users/:id: Obtém um usuário específico por ID.
* POST /users: Cria um novo usuário.
* DELETE /users/:id: Exclui um usuário existente.
### Categories
* GET /categories: Obtém todas as categorias.
* *POST /categories: Cria uma nova categoria.
### Posts
* GET /posts: Obtém todos os posts.
* GET /posts/:id: Obtém um post específico por ID.
* GET /posts/search?q=:searchTerm: Retorna um post do blog com o tema da URL.
* POST /posts: Cria um novo post.
* PUT /posts/:id: Atualiza um post específico por ID.
* DELETE /posts/:id: Exclui um post pelo ID.

#### Desenvolvido por Amanda Aragão - 2023.