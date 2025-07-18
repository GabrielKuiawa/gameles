# Gameles - Catálogo de Jogos

Uma aplicação mobile desenvolvida com React Native e Expo para explorar um catálogo de jogos organizados por categorias.


## Diferença entre Testes Unitários e Testes E2E (End to End) em aplicações mobile

**Testes Unitários** são responsáveis por validar pequenas partes isoladas do código, geralmente funções ou componentes individuais. O objetivo é garantir que cada unidade do sistema funcione corretamente de forma independente. Em aplicações mobile, testes unitários normalmente verificam a lógica de componentes, hooks, funções utilitárias e reducers, sem envolver a interface gráfica ou dependências externas.

**Exemplo de uso:**  
- Verificar se um componente de botão renderiza corretamente e dispara o evento ao ser pressionado.
- Testar se uma função de autenticação retorna o resultado esperado para diferentes entradas.

**Testes E2E (End to End)** simulam o comportamento do usuário na aplicação completa, testando o fluxo do início ao fim. Eles interagem com a interface gráfica, navegação, integrações e serviços, garantindo que todas as partes do sistema funcionam juntas como esperado. Em aplicações mobile, testes E2E validam cenários reais, como login, navegação entre telas, preenchimento de formulários e logout.

**Exemplo de uso:**  
- Simular um usuário abrindo o app, fazendo login, navegando até uma tela de detalhes e deslogando.
- Garantir que o fluxo de compra em um app de e-commerce funciona do início ao fim.

**Resumo:**  
- **Testes unitários** focam em partes isoladas do código, são rápidos e fáceis de manter.
- **Testes E2E** validam o funcionamento integrado da aplicação, simulando o uso real pelo usuário.

Ambos são importantes para garantir a qualidade e a confiabilidade de aplicações mobile.

## Screenshots

### Tela de Login
<img src="./assets/screenshots/login.png" width="300" alt="Tela de Login"/>

### Lista de Jogos
<img src="./assets/screenshots/home.png" width="300" alt="Lista de Jogos"/>

### Detalhes do Jogo
<img src="./assets/screenshots/details.png" width="300" alt="Detalhes do Jogo"/>

### Menu de Logout
<img src="./assets/screenshots/logout.png" width="300" alt="Menu de Logout"/>

## Funcionalidades

**Autenticação de Usuário**
- Sistema de login com usuários mockados
- Proteção de rotas
- Logout com confirmação

**Catálogo de Jogos**
- Visualização por categorias
- Cards com imagens dos jogos
- Animações de interação
- Detalhes completos dos jogos

## Tecnologias

- React Native
- Expo Router
- TypeScript
- @expo/vector-icons
- @expo/react-native-action-sheet

## Screens

- **Login**: Autenticação do usuário
- **Home**: Lista de jogos por categoria
- **GameDetails**: Detalhes completos do jogo

## Como Executar

1. Clone o repositório
```bash
git clone https://github.com/GabrielKuiawa/gameles.git
```

2. Instale as dependências
```bash
npm install
```

3. Execute o projeto
```bash
npx expo start
```

## Usuários de Teste

```json
{
  "admin": {
    "username": "admin",
    "password": "123456"
  },
  "user": {
    "username": "user",
    "password": "123456"
  }
}
```

## Tema

A aplicação utiliza um tema escuro com as seguintes cores:
- Fundo principal: `#0a0f1c`
- Destaque: `#4f8cff`
- Textos: `#fff` e `#ccc`
- Erro: `#ff4f4f`

## Estrutura do Projeto

```
gameles/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── login.tsx
│   ├── home.tsx
│   └── GameDetails.tsx
├── components/
│   └── Card.tsx
├── mock/
│   ├── games_categorize.json
│   └── users.ts
└── types/
    └── navigation.ts
```

## Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por Gabriel Kuiawa - UTFPR