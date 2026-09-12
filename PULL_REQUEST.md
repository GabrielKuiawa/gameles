# docs: atualiza planejamento, protótipo e modelagem do Gameles

## Descrição

Esta pull request atualiza o `README.md` para documentar a próxima etapa de evolução do Gameles. A documentação passa a apresentar o escopo atual do aplicativo, o protótipo no Figma, a arquitetura planejada para a API e o banco de dados, além do cronograma de desenvolvimento para os 78 dias disponíveis.

Não há alteração no código-fonte ou no comportamento atual do aplicativo.

## Alterações realizadas

- Adicionada a seção **Sobre o app**, com checklist das funcionalidades concluídas e planejadas.
- Incluído o link público do protótipo no Figma.
- Removidas imagens de telas, usuários de teste e o conteúdo sobre testes unitários/E2E, pois não são necessários nesta etapa da documentação.
- Documentada a arquitetura com aplicativo React Native, API REST em Java Spring Boot, PostgreSQL e API externa RAWG.
- Adicionado diagrama entidade-relacionamento em Mermaid.
- Especificado que os jogos são consultados na RAWG sob demanda e só são persistidos quando adicionados à wishlist.
- Incluído planejamento detalhado em seis sprints, cobrindo os 78 dias restantes do projeto.
- Atualizada a lista de tecnologias previstas.

## Arquitetura planejada

```text
Aplicativo React Native
        |
        v
API REST — Java Spring Boot
        |                |
        v                v
PostgreSQL         API externa RAWG
```

## Validação

- [x] Link do Figma inserido no README.
- [x] Diagrama Mermaid incluído para documentar o banco de dados.
- [x] Planejamento dividido em sprints compatíveis com o prazo de 78 dias.
- [x] Verificada a formatação Markdown com `git diff --check`.

## Checklist

- [x] A documentação representa o escopo planejado do projeto.
- [x] Não foram incluídas alterações funcionais no aplicativo.
- [x] A branch `develop` contém a atualização do README.
