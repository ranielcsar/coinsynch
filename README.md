### Projeto do Desafio Frontend para vaga de Frontend na EduSynch, feito por Raniel César

### Sobre

Aplicação que simula uma carteira de Cryptomoedas na qual o usuário poderá se registrar, logar, fazer logout,
adicionar moedas em sua carteira, remover, vender e/ou trocar e também se inscrever na Newsletter.

As informações sobre as Cryptomoedas vêm da API da CoinCap: https://coincap.io/
Os ícones das Cryptomoedas vêm da CoinIcons API: https://coinicons-api.vercel.app/api

### Principais funcionalidades

- Cadastro (register)
- Entrar (login)
- Sair (logout)
- Se inscrever na Newsletter (subscribe)
- Adicionar cryptomoeda na carteira
- Transferência de entrada/saída de cryptomoedas da carteira

#### Tecnologias:

- NextJS
- Typescript
- TailwindCSS
- Axios
- Headlessui
- React Hook Form
- React Query
- Zod
- Tanstack Table
- JSON Server

## Como rodar o projeto

Primeiro, instale o `json-server` localmente com:

```bash
npm install -g json-server
# or
yarn global add json-server
# or
pnpm add --global json-server
```

Ao installar o `json-server`, vá para a pasta do projeto e instale as dependências com:

```bash
npm install
# or
yarn install (or just yarn)
# or
pnpm install
```

Execute o `db.json` com o `json-server`:

```bash
json-server --watch src/data/db.json
```

e por fim execute a aplicação com:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver o resultado no seu navegador.

---
