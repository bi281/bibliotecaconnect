BIBLIOCONNECT — ESTRUTURA MODULAR (ETAPA SEGURA)

Como testar:
1. Extraia a pasta.
2. Abra BiblioConnect no VS Code.
3. Execute index.html com Live Server.
4. Faça testes de login, catálogo, empréstimos, renovações, multas, reservas e leitor de PDF.

JavaScript dividido por responsabilidade:
- js/core/01-dados-e-armazenamento.js: dados iniciais e armazenamento.
- js/core/02-navegacao.js: roteamento e navegação.
- js/views/03-interface-e-telas.js: interface e renderização das telas.
- js/services/04-regras-de-negocio.js: ações e regras de negócio.

Os scripts são carregados em ordem e continuam sendo scripts clássicos para manter funções acessíveis a atributos onclick existentes.
O CSS foi mantido em css/styles.css nesta primeira etapa para evitar regressões de cascata. Pastas de CSS e de perfis estão preparadas para a próxima etapa.
O backup do JavaScript original está em backup/app-original.js.txt.
O sistema continua usando localStorage; não é backend multiusuário.
