# backend

-Banco de dados:
PostgreSQL

## Getting Started

Primeiro rodar as migrations:

```bash
yarn migration:generate

# e

yarn migration:run

```

Depois executar o servidor:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

# Cadastro de usuarios

Para cadastrar um usuario envie um post para:

Abra [http://localhost:3000/users](http://localhost:3000/users)

exemplo body:

```json
{
  "name": "user1",
  "email": "user1@email.com",
  "password": "teste1234"
}
```

Retornará um usuario cadastrado.

# Login para obter JWT token

Para obter um token de autenticação envie um post para:

Abra [http://localhost:3000/sessions](http://localhost:3000/sessions)

```json
{
  "email": "user1@email.com",
  "password": "teste1234"
}
```

Retornará um token jwt.

# Cadastro de modulos

Após estar autenticado, enviar um post para o endereço abaixo, será cadastrado
um novo módulo.

Abra [http://localhost:3000/modules](http://localhost:3000/modules)

```json
{
  "name": "modulo3"
}
```

-Metodo get: para obter todos os modulos cadastrados, não é necessario autenticação.
-Metodo put: para atualizar um módulo, enviando o ID como params, e o novo nome
no body

```json
{
  "name": "novo nome"
}
```

--Metodo delete: para deletar um módulo enviando o ID como params.

# Cadastro de aulas

Após estar autenticado, enviar um post, com: nome da aula, id do modulo, data da aula
para o endereço abaixo, será cadastrado uma nova aula.

Abra [http://localhost:3000/lessons](http://localhost:3000/lessons)

```json
{
  "name": "Aula 9",
  "module": "25FDF853-C051-4DF2-8B49-B95AB07B44F8",
  "date": "2023-05-22 17:30:00"
}
```

-Metodo get: para obter todas as aulas cadastrados, não é necessario autenticação.
-Metodo get/id: passando o id como params, podemos ter acesso a uma aula em
especifico.
-Metodo put: para atualizar uma aula, enviando o ID como params, e as informações
que queremos atualizar no body

```json
{
  "name": "novo nome",
  "module": "25FDF853-C051-4DF2-8B49-B95AB07B44F8",
  "date": "2023-05-23 13:00:00"
}
```

--Metodo delete: para deletar uma aula enviando o ID como params.
