## Ignews

um projeto de site de notícias e artigos com sistema de inscrição pagos.

Projeto desenvolvido em React, Typescript e Sass. Utiliza o conceito de Serverless através do Next e demonstra o uso de login social usando o Next Auth. Como foi utilizado o recurso de API routes do Next, achei apropriado usar o banco de dados FaunaDB para salvar os dados de autenticação e inscrição do usuário, uma vez que o mesmo foi desenvolvido pensando em aplicações serverless.

Como processamento de pagamentos, usamos a api do Stripe por nenhum motivo em específico, somente pela facilidade da API no modo de desenvolvimento, uma vez que o mesmo possui uma precificação adequada.

Esse projeto foi desenvolvido com o objetivo de testar o uso das tecnologias empregadas e como meio de aprendizado.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

# Setando o .env.local

O projeto acompanha um arquivo .env.local.example. Para usar o projeto é necessário mudar o nome para .env.local e setar as variáveis de ambiente requeridas.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
