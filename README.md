# 🍔 CreateBurger

## 💻 Sobre o Projeto

**CreateBurger** é uma aplicação **Full Stack** que simula um site de venda de hambúrgueres. Desenvolvida com **React**, **Axios**, **Node.js**, **Express** e **MySQL**, a aplicação possui autenticação de usuários, sistema de pedidos, carrinho interativo e layout responsivo.

Este projeto foi desenvolvido enquanto eu aprendia **Node.js**, com foco especial em **Express** para a criação e gerenciamento da API.

---

## 🚀 Tecnologias Utilizadas

- **Front-end**
  - React
  - Axios
  - JavaScript
  - HTML
  - CSS

- **Back-end**
  - Node.js
  - Express
  - MySQL

---

## 🧩 Funcionalidades

- Layout responsivo para dispositivos móveis e desktops
- Registro e login de usuários
- Validação de login e formulários vazios
- Restrição de acesso a páginas sem autenticação
- Pop-up de confirmação ao adicionar itens ao carrinho
- Adição múltipla de itens ao carrinho com cliques sucessivos
- Destaque visual no menu da página ativa
- Aumento e diminuição da quantidade de itens no carrinho
- Remoção automática de itens ao chegar em quantidade 0
- Cálculo em tempo real do total do carrinho
- Exibição condicional do botão "Finalizar Pedido"
- Processo de finalização de pedido com formulário de dados do usuário
- Redirecionamento automático para aba de pedidos após finalização
- Sistema de pedidos com banco de dados relacional

### 🗃️ Banco de Dados

- Cada item/pedido contém: `id`, `bread`, `meat`, `meat_state`, `salads`, `cheese`, `name`, `image`, `price`, `quantity` e uma **foreign key** `OrderStack` para associar à pilha de pedidos.
- A tabela `OrderStack` contém:
  - `id`
  - `idLogin` → referência ao usuário logado
  - `idCostumerInformation` → referência aos dados de localização do cliente
- As informações são recuperadas com uso de **INNER JOINS**.

---

## 🔖 Layout da Aplicação

### 🔐 Página de Login e Registro

![Login](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/login.png)
![Registro](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/registro.png)

### 🏠 Página Principal

![Main 1](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/main(1).png)
![Main 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/main(2).png)
![Main 3](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/main(3).png)

### 🍳 Página de Criação de Hambúrguer

![Criar 1](https://raw.githubusercontent.com/MatheusZuchiBalbinot/CreateBurger/main/Imagens/github_images/criar_hamburguer(1).png)
![Criar 2](https://raw.githubusercontent.com/MatheusZuchiBalbinot/CreateBurger/main/Imagens/github_images/criar_hamburguer(2).png)
![Criar 3](https://raw.githubusercontent.com/MatheusZuchiBalbinot/CreateBurger/main/Imagens/github_images/criar_hamburguer(3).png)

### 🛒 Página de Carrinho

![Carrinho 1](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/carrinho(1).png)
![Carrinho 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/carrinho(2).png)

### ✅ Confirmação de Pedido

![Confirmar 1](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/confirmOrder(1).png)
![Confirmar 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/confirmOrder(2).png)
![Confirmar 3](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/confirmOrder(3).png)

### 📦 Pedidos Realizados

![Pedidos 1](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/makedOrder(1).png)
![Pedidos 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/makedOrder(2).png)
![Pedidos 3](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images/confmakedOrder(3).png)

---

## 📱 Design Responsivo

![Carrinho 1](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/carrinho(1).png)
![Carrinho 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/carrinho(2).png)
![Confirmar Pedido](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/confirmOrder(1).png)
![Confirmar Pedido 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/confirmOrder(2).png)
![Criar Burguer 1](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/createburguer(1).png)
![Criar Burguer 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/createburguer(2).png)
![Login 1](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/login(1).png)
![Login 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/login(2).png)
![Main 1](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/main(1).png)
![Main 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/main(2).png)
![Registro 1](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/register(1).png)
![Registro 2](https://github.com/MatheusZuchiBalbinot/CreateBurger/blob/main/Imagens/github_images(responsive)/register(2).png)

---

## 📌 Observações

Este projeto tem fins educacionais e foi desenvolvido como parte do meu aprendizado prático em desenvolvimento web Full Stack. Feedbacks são bem-vindos!
