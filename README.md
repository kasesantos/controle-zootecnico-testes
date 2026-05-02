# Controle Zootecnico API

Estrutura inicial de uma API REST com JavaScript e Express, preparada com autenticacao JWT, conexao com MongoDB e documentacao Swagger.

## Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT para autenticacao
- Swagger UI para documentacao

## Estrutura de pastas

```txt
src/
  app.js
  server.js
  config/
  controllers/
  docs/
  middleware/
  models/
  routes/
  services/
```

## Variaveis de ambiente

Crie um arquivo `.env` com base no `.env.example` e ajuste os valores:

Variaveis:

- `PORT`
- `BASE_URL`
- `MONGODB_URI`
- `JWT_SECRET`
- `JWT_EXPIRES_IN`

## Scripts

- `npm run start`: inicia o servidor de forma estatica
- `npm run dev`: inicia com reinicio automatico ao alterar arquivos

## Endpoints base

- `GET /health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/users/me` (protegido com Bearer token)

## Swagger

Com a API em execucao, acesse:

- `http://localhost:3000/api-docs`

A especificacao OpenAPI esta em `src/docs/swagger.json`.
