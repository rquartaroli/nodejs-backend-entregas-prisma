## 💻 Projeto
Backend de entregas com rotas para a criação de clientes, entregadores e entregas. Fazendo o fluxo de criação de um pedido de entregas, juntamente com a conclusão desse mesmo pedido por parte do entregador após realizar a entrega.


## ✨ Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)


## ⚙️ Banco de dados

- [PostgreSQL](https://www.postgresql.org/)

Antes de executar o projeto, é necessário que você tenha criado sua base de dados no PostgreSQL.


## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.

Crie agora um arquivo **.env** e cole o seguinte código nele:
```cl
DATABASE_URL="postgresql://user:password@localhost:5432/database?schema=public"
```
Você também encontrará esse mesmo código no arquivo **.env.example**, com o código inserido no arquivo **.env** recém criado, altere as informações conforme a sua base de dados.<br />
**Exemplo:** <br />
user: Você colocará o usuário de sua base de dados. Ex: **admin**. <br />
password: Você colocará o password de sua base de dados. Ex: **admin**. <br />
database: Você colocará o nome de sua base de dados. Ex: **base_entregas**. <br />
Ficando assim: **DATABASE_URL="postgresql://admin:admin@localhost:5432/base_entregas?schema=public"** <br />
**Observação:** Caso você vá utilizar em produção, não é recomendado que utilize usuário e senha como admin. Só foram usados como exemplo aqui.

Com o arquivo **.env** configurado de acordo com sua base de dados, agora execute o seguinte código para a criação das migrate:
```cl
yarn prisma migrate dev
```

Em seguida, inicie o projeto.

```cl
yarn dev
```

Caso queira visualizar suas tabelas no painel do prisma, abra outro terminal e execute:
```cl
yarn prisma studio
```

Com isso você já deverá estar com o ambiente rodando e pronto para a utilização das rotas.


## 🎏 Rotas

- **Client** 
<p>
  <img alt="POST" src="https://img.shields.io/badge/-POST-brightgreen">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/client/&color=inactive&labelColor=8257e5">
</p>

Body: JSON
```json
{
	"username": "rafael",
	"password": "123456"
}
```
<br />
<br />

<p>
  <img alt="POST" src="https://img.shields.io/badge/-POST-brightgreen">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/client/authenticate&color=inactive&labelColor=8257e5">
</p>

Body: JSON
```json
{
	"username": "rafael",
	"password": "123456"
}
```
<br />
<br />

<p>
  <img alt="GET" src="https://img.shields.io/badge/-GET-blue">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/client/deliveries&color=inactive&labelColor=8257e5">
</p>

Bearer: Token: Utilizar o token de autenticação.
<br />
<br />
<br />

- **Deliveries (Entregas)**
<p>
  <img alt="POST" src="https://img.shields.io/badge/-POST-brightgreen">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/delivery&color=inactive&labelColor=8257e5">
</p>

Body: JSON
```json
{
	"item_name": "Lanche"
}
```
Bearer: Token: Utilizar o token de autenticação do client.
<br />
<br />

<p>
  <img alt="GET" src="https://img.shields.io/badge/-GET-blue">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/delivery/available&color=inactive&labelColor=8257e5">
</p>

Bearer: Token: Utilizar o token de autenticação do deliveryman.
<br />
<br />
<br />

- **Deliveryman (Entregador)**
<p>
  <img alt="POST" src="https://img.shields.io/badge/-POST-brightgreen">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/deliveryman&color=inactive&labelColor=8257e5">
</p>

Body: JSON
```json
{
	"username": "jojo",
	"password": "1234"
}
```
<br />
<br />

<p>
  <img alt="POST" src="https://img.shields.io/badge/-POST-brightgreen">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/deliveryman/authenticate&color=inactive&labelColor=8257e5">
</p>

Body: JSON
```json
{
	"username": "jojo",
	"password": "1234"
}
```
<br />
<br />

<p>
  <img alt="GET" src="https://img.shields.io/badge/-GET-blue">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/deliveryman/deliveries&color=inactive&labelColor=8257e5">
</p>

Bearer: Token: Utilizar o token de autenticação do deliveryman.
<br />
<br />

<p>
  <img alt="PUT" src="https://img.shields.io/badge/-PUT-orange">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/delivery/updateDeliveryman/:id&color=inactive&labelColor=8257e5">
</p>

:id = Utilizar o id referente ao produto a ser entrega, é o id do deliveries (entregas), ou seja, id do produto a ser entregue.
Bearer: Token: Utilizar o token de autenticação do deliveryman.
<br />
<br />

<p>
  <img alt="PUT" src="https://img.shields.io/badge/-PUT-orange">
  <img alt="ROTA" src="https://img.shields.io/static/v1?label=baseURL&message=/delivery/updateEndDate/:id&color=inactive&labelColor=8257e5">
</p>

:id = Utilizar o id referente ao produto a ser entrega, é o id do deliveries (entregas), ou seja, id do produto a ser entregue.
Bearer: Token: Utilizar o token de autenticação do deliveryman.
<br />
<br />

**Recomendação**: Para executar as rotas, recomendo a utilização do [Insomnia](https://insomnia.rest/).

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito por Rafael Quartaroli através das aulas ministradas pela [Rocketseat](https://rocketseat.com.br/).

<br />
