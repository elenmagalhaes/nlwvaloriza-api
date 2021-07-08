![image](https://user-images.githubusercontent.com/51779470/124994009-8f6dab00-e01b-11eb-8db1-921190c1b774.png)

<h2 align="center">
  NLW Valoriza
</h2>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/elenmagalhaes/nlwvaloriza-api?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Elen Magalhães" src="https://img.shields.io/badge/made%20by-Elen Magalhães-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/elenmagalhaes/nlwvaloriza-api/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/elenmagalhaes/nlwvaloriza-api?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#link-recursos">Recursos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bulb-evolução-do-projeto-em-processo">Evolução do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o projeto

Foi construído uma API para gerenciamento de elogios usando Node.js, no qual além das rotas principais de cadastro de Uusários, Tags e Elogios, também  foi desenvolvido uma rota para autenticação e para validação do perfil do usuário. 

## :wrench: Tecnologias

- [Node.js](https://nodejs.org/en/about/)
- [Express.js](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [JWT](https://jwt.io/)

Aplicação criada baseada no desafio de Node.js disponibilizado pela Rocketseat durante a Next Level Week.

## :link: Recursos

### Usuário

``GET - /users`` - Listar todos os usuários

*Auth:*

| Params    | Type    |
|-----------|---------|
|`token`    |*JWT*    |

*Response:*

| Params     | Type     |
|------------|----------|
|`id`        |*string*  |
|`name`      |*string*  |
|`email`     |*string*  |
|`admin`     |*boolean* |
|`created_at`|*date*    |
|`updated_at`|*date*    |

``POST - /users`` - Criar um novo usuário

*Request Body:*

| Params    | Type    | Required    |
|-----------|---------|-------------|
|`name`     |*string* | x           |
|`email`    |*string* | x           |
|`password` |*string* | x           |
|`admin`    |*string* |             |

*Response:*

| Params     | Type     |
|------------|----------|
|`id`        |*string*  |
|`name`      |*string*  |
|`email`     |*string*  |
|`admin`     |*boolean* |
|`created_at`|*date*    |
|`updated_at`|*date*    |

``POST - /login`` - Autenticação de usuário

*Request Body:*

| Params    | Type    | Required    |
|-----------|---------|-------------|
|`email`    |*string* | x           |
|`password` |*string* | x           |

*Response:*

| Params     | Type     |
|------------|----------|
|`token`     |*string*  |

### Tags

``GET - /tags`` - Listar todas as tags

*Auth:*

| Params    | Type    |
|-----------|---------|
|`token`    |*JWT*    |

*Response:*

| Params      | Type     |
|-------------|----------|
|`id`         |*string*  |
|`name`       |*string*  |
|`created_at` |*date*    |
|`updated_at` |*date*    |
|`name_custom`|*string*  |

``POST - /tags`` - Criar uma nova tag

*Auth:*

| Params    | Type    |
|-----------|---------|
|`token`    |*JWT*    |

*Request Body:*

| Params    | Type    | Required    |
|-----------|---------|-------------|
|`name`     |*string* | x           |

*Response:*

| Params     | Type     |
|------------|----------|
|`id`        |*string*  |
|`name`      |*string*  |
|`created_at`|*date*    |
|`updated_at`|*date*    |

### Elogios

``GET - /users/compliments/receive`` - Listar todos os elogios recebidos

*Auth:*

| Params    | Type    |
|-----------|---------|
|`token`    |*JWT*    |

*Response:*

| Params        | Type     |
|---------------|----------|
|`id`           |*string*  |
|`user_sender`  |*string*  |
|`user_receiver`|*string*  |
|`tag_id`       |*string*  |
|`message`      |*string*  |
|`created_at`   |*date*    |
|`userSender`   |*object*  | 
|`userReceiver` |*object*  | 

userSender => propriedades do usuário que enviou o elogio
userReceiver => propriedades do usuário que receber o elogio

``GET - /users/compliments/send`` - Listar todos os elogios enviados

*Auth:*

| Params    | Type    |
|-----------|---------|
|`token`    |*JWT*    |

*Response:*

| Params        | Type     |
|---------------|----------|
|`id`           |*string*  |
|`user_sender`  |*string*  |
|`user_receiver`|*string*  |
|`tag_id`       |*string*  |
|`message`      |*string*  |
|`created_at`   |*date*    |
|`userSender`   |*object*  | 
|`userReceiver` |*object*  | 

userSender => propriedades do usuário que enviou o elogio
userReceiver => propriedades do usuário que receber o elogio

``POST - /compliments`` - Criar um novo elogio

*Auth:*

| Params    | Type    |
|-----------|---------|
|`token`    |*JWT*    |

*Request Body:*

| Params        | Type    | Required    |
|---------------|---------|-------------|
|`tag_id`       |*string* | x           |
|`user_receiver`|*string* | x           |
|`message`      |*string* | x           |

*Response:*

| Params        | Type     |
|---------------|----------|
|`id`           |*string*  |
|`user_sender`  |*string*  |
|`user_receiver`|*string*  |
|`tag_id`       |*string*  |
|`message`      |*date*    |
|`created_at`   |*date*    |

## :bulb: Evolução do projeto (em processo)

- [ ] Criar um Error handle para capturar os nossos erros;
- [ ] Implementar TDD;
- [ ] Alerta de e-mail para o usuário que receber um elogio;
- [ ] Autenticação por meio de login social;
- [ ] Implementar front-end.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito por Elen Magalhães - **Projeto em desenvolvimento**
