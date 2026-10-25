# Bootcamp I - Entrega Final
## Implantação PortfolioHUB + IA Gemini

**Estudante:** Dimitri Sofoulis Cinnanti  
**Projeto:** PortfolioHUB  
**Data de entrega indicada no enunciado:** 25/10/2026, às 23h55  
**Repositório GitHub:** [ADICIONAR LINK APÓS CRIAR]  
**Site publicado:** [ADICIONAR LINK APÓS PUBLICAR E TESTAR]  
**Vídeo de apresentação (YouTube):** [ADICIONAR LINK DO VÍDEO REAL]  
**Documentação Google Workspace:** [ADICIONAR LINK SE UTILIZADO]

> **ATENÇÃO: MODELO EM ELABORAÇÃO.** O código foi preparado como base de trabalho; não descreva como concluídos a publicação, o uso do Gemini, as configurações remotas ou os testes antes de executá-los. Troque os campos entre colchetes pelo que ocorreu de verdade.

### 1. Introdução e objetivo

O objetivo da atividade é implantar o PortfolioHUB, um portfólio digital voltado para a organização e apresentação de projetos desenvolvidos durante a formação em Ciência da Computação. O sistema utiliza HTML, CSS e JavaScript e integra os repositórios públicos de uma conta GitHub por meio de sua API REST. O trabalho contempla documentação de planejamento, procedimentos de segurança, versionamento, testes e publicação.

### 2. Planejamento da implantação

Foi definida uma arquitetura estática adequada ao GitHub Pages, eliminando a necessidade de backend para leitura de projetos públicos. O planejamento contém as etapas de definição de escopo, desenvolvimento da interface, integração com GitHub, política de segurança, validação e apresentação. Os riscos previstos incluem indisponibilidade da API, vazamento acidental de credenciais, problemas de responsividade e falhas na publicação.

**Etapas previstas:** (1) criação do repositório dedicado; (2) implementação da interface; (3) consulta à API pública do GitHub; (4) configuração de permissões; (5) apoio do Gemini; (6) publicação; (7) testes; (8) gravação e documentação da entrega.

### 3. Configuração inicial e integração com GitHub

O PortfolioHUB foi desenvolvido para consultar o endpoint público `https://api.github.com/users/DimitriSCinnanti/repos`, obter informações de repositórios públicos e apresentá-las como cartões. A interface possui busca por texto, filtros de categoria e atalhos que direcionam aos repositórios originais. A API é utilizada somente para leitura, sem autenticação e sem expor tokens.

A página também inclui tratamento de falhas de rede, exibindo mensagem informativa e uma lista de repositórios públicos conhecidos caso a consulta não esteja disponível.

**Evidência da integração real:** [CAPTURA OU DESCRIÇÃO APÓS TESTAR]

### 4. Gestão de usuários e políticas de segurança

A versão disponibilizada é estática e não inclui login próprio. O GitHub é o responsável por controlar os usuários com permissão para modificar os arquivos do projeto, enquanto visitantes acessam apenas a página pública. O código não armazena senhas ou chaves privadas. Dados da API são inseridos na tela utilizando `textContent`, o que evita tratar descrições externas como HTML executável. Links externos incluem configurações de segurança apropriadas. Foi preparado um arquivo `.gitignore` para reduzir o risco de inclusão acidental de arquivos de ambiente.

**Configurações verificadas no GitHub:** [INFORMAR 2FA, COLABORADORES, PROTEÇÃO DE BRANCH APENAS SE REALMENTE CONFIGURADOS]

### 5. Compartilhamento, versionamento e colaboração

O código e a documentação devem ser mantidos em repositório dedicado com branch `main`, histórico de commits e organização por arquivos e pastas. O fluxo de evolução pode usar branches de funcionalidades, pull requests e revisão antes da integração. Por se tratar de entrega individual, não é necessário afirmar a participação de outros colaboradores caso não tenha ocorrido.

**Evidências de versionamento:** [INSERIR LINK/CAPTURA DE COMMITS, BRANCHES OU PULL REQUEST REAL]

### 6. Uso do Google Gemini

O Google Gemini é previsto como ferramenta de apoio no planejamento, revisão de boas práticas de segurança, acessibilidade e elaboração do roteiro de testes. Cada uso precisa ser documentado com o prompt aplicado, a orientação recebida, a decisão tomada e uma captura real da conversa.

**Prompt(s) efetivamente usados:** [INSERIR PROMPTS REAIS]  
**Orientações aproveitadas:** [RELATAR RESULTADOS REAIS]  
**Evidências:** [INSERIR CAPTURA(S)]

### 7. Finalização, testes e implantação

A aplicação está estruturada para publicação por GitHub Pages a partir da branch `main` e pasta raiz. O plano de testes contempla carregamento inicial, integração GitHub, busca, filtros, links externos, contingência de API, visualização móvel, navegação por teclado, disponibilidade pública do site e ausência de credenciais no repositório.

**Resultado real dos testes:** [INSERIR QUANTIDADE E RESULTADOS APÓS EXECUÇÃO]  
**Endereço validado do site:** [INSERIR URL PUBLICADA]  
**Problemas encontrados e soluções:** [RELATAR SOMENTE OCORRÊNCIAS REAIS]

### 8. Integração documental com Google Workspace (se realizada)

O planejamento e as evidências podem ser organizados em um Google Docs ou Google Drive, respeitando permissões adequadas de compartilhamento. A interface inclui um campo configurável para adicionar o link de um Google Docs de leitura pública. A criação e configuração desse documento dependem de execução na conta do estudante.

**Documento configurado e utilizado:** [INSERIR LINK REAL OU INFORMAR QUE NÃO FOI UTILIZADO]

### 9. Conclusão e melhorias futuras

O PortfolioHUB foi concebido como uma interface de apresentação de projetos, integrando visualmente dados públicos do GitHub e reunindo práticas de documentação e segurança. O projeto demonstra como uma página estática pode consumir serviços externos de forma controlada. Como futuras melhorias, propõem-se autenticação OAuth em arquitetura com backend, edição autenticada de portfólio, testes automatizados e ampliação da integração com o ecossistema Google.

### 10. Apresentação em vídeo

Preparar uma apresentação de aproximadamente 5 minutos, publicar no YouTube e incluir no relatório o link. O roteiro está em `docs/ROTEIRO_VIDEO.md`.

### Checklist de entrega final

- [ ] Repositório público `PortfolioHUB` criado e arquivos enviados.
- [ ] GitHub Pages habilitado e link validado.
- [ ] Testes executados; resultados e evidências preenchidos.
- [ ] Configurações reais de segurança/documentação registradas.
- [ ] Gemini efetivamente utilizado e documentado com capturas.
- [ ] Google Workspace utilizado e documentado, se aplicável.
- [ ] Vídeo real de aproximadamente 5 minutos publicado no YouTube.
- [ ] Links reais adicionados ao PDF final.
- [ ] PDF individual enviado até 25/10/2026, às 23h55.

### Fontes técnicas

- GitHub REST API: https://docs.github.com/en/rest/repos/repos
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Gemini: https://gemini.google.com/
