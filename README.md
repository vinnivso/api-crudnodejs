# backend-crud-api
CRUD com TypeORM - Typescript Back End

#### Funcionalidades - Categorias

- **Cadastrar Categorias**

    Um cliente pode registrar a criação de uma categoria para os futuros videos na plataforma, com NAME e DESCRIPTION.


- **Atualizar Categorias**

    Um cliente pode ser capaz de atualizar NAME/DESCRIPTION ou AMBOS para uma categoria preliminarmente cadastrada.


- **Deletar Categorias**

    Um cliente deve conseguir remover uma categoria previamente cadastrada.


- **Listar Categorias**

    Deve ser possível retornar todas as categorias cadastradas no banco de dados.


#### Funcionalidades - Videos

- **Cadastrar Videos**

    Um cliente pode registrar a criação de um video, respeitando as categorias preliminarmente cadastradas no DB, passando NAME, DESCRIPTION, DURATION e CATEGORY(RELACIONAL).


- **Atualizar Categorias**

    Um cliente pode ser capaz de atualizar NAME, DESCRIPTION, DURATION e CATEGORY(RELACIONAL).


- **Deletar Video**

    Um cliente deve conseguir remover um video previamente cadastrado.


- **Listar Videos**

    Deve ser possível retornar todas os videos cadastrados no banco de dados.

==========================
#### Configurando um banco de dados para testar a solução
- Criar um arquivo .env na root do projeto, ou seja, onde encontra-se o package.json.
- Inserir as informações abaixo no arquivo .env com seus respectivos valores:

TYPEORM_CONNECTION = mysql
TYPEORM_HOST = "Name or IP address of the server host"<br/>
TYPEORM_USERNAME = "Name of the user to connect with"<br/>
TYPEORM_PASSWORD = "The user's password"<br/>
TYPEORM_DATABASE = "The database to use"<br/>
TYPEORM_PORT = "port running your DB"<br/>
TYPEORM_MIGRATIONS = src/database/migrations/*.ts<br/>
TYPEORM_MIGRATIONS_DIR = src/database/migrations<br/>
TYPEORM_ENTITIES = src/entities/*.ts<br/>
TYPEORM_ENTITIES_DIR = src/entities<br/>

#### Solução
Rode os seguintes comandos dentro da pasta que estiver com o package.json.
- npm i
- npm run dev or npm start

#### Link da Documentação
- https://documenter.getpostman.com/view/16818323/UVXnGZQM

## O que temos aqui?
- [x]  NodeJS
- [x]  TypeScript
- [x]  Express
- [x]  Nodemon
- [x]  UUID
- [x]  TypeORM
- [x]  MySQL

## INTEGRANTE
Perfil      | Link do perfil no GITHUB
--------- | ------
[<img src="https://avatars.githubusercontent.com/u/52759918?v=4" width="75px;"/>](https://github.com/vinnivso) | [Vinícius Oliveira](https://github.com/vinnivso)
