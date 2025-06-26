# 🎓 Sistema de Gestão Escolar - Frontend

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## 📋 Tabela de Conteúdos
- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias-utilizadas)
- [Instalação](#-como-executar-o-projeto)
  - [Sem Docker](#método-1-sem-docker-desenvolvimento)
  - [Com Docker](#método-2-com-docker)
- [Configuração](#-configuração-do-ambiente)
- [Estrutura](#-estrutura-de-diretórios)
- [Desenvolvimento](#-configuração-para-desenvolvimento)
- [Testes](#-testes)
- [Build](#-build-para-produção)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

## ✨ Visão Geral

Aplicação frontend desenvolvida com Vue.js 3 para o sistema de gestão escolar, integrando com um backend Laravel através de API REST.

![Screenshot da Aplicação](screenshot.png)

## 🛠️ Funcionalidades

- **CRUD Completo de Alunos**
  - Cadastro com validação
  - Edição de informações
  - Visualização detalhada
  - Exclusão com confirmação

- **Filtros Avançados**
  - Busca por nome
  - Filtro por turma
  - Filtro por status

- **Outras Funcionalidades**
  - Paginação
  - Ordenação de colunas
  - Responsividade mobile
  - Feedback visual

## 🚀 Tecnologias Utilizadas

**Frontend:**
- Vue.js 3 (Composition API)
- Vue Router
- Axios
- Pinia (Gerenciamento de estado)
- Bootstrap 5 + Icons

**Ferramentas:**
- Docker
- ESLint + Prettier
- Jest (Testes unitários)

## 🏗️ Como Executar o Projeto

### Pré-requisitos
- Node.js 16+
- npm ou yarn
- Docker (opcional)

### Método 1: Sem Docker (desenvolvimento)

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/escola-frontend.git
cd escola-frontend

# Instale as dependências
npm install

# Configure o ambiente
cp .env.example .env

# Inicie o servidor de desenvolvimento
npm run serve