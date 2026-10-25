# PortfolioHUB | Dimitri Cinnanti

Portfólio acadêmico para o **Desafio Final do Bootcamp I: Implantação PortfolioHUB + IA Gemini**.

## Objetivo

Centralizar projetos de desenvolvimento em uma página pública, integrando-se ao GitHub, documentando práticas de versionamento, segurança, controle de acesso e implantação. O **Gemini deve ser utilizado de fato pelo estudante**, registrando exemplos de prompts e suas contribuições para a implementação.

## Funcionalidades

- Página responsiva em HTML, CSS e JavaScript, sem dependências de compilação.
- Integração dinâmica com a API pública do GitHub: `GET /users/DimitriSCinnanti/repos`.
- Consulta somente repositórios públicos, próprios, não-forks e com conteúdo.
- Filtros por projetos em destaque, Web e Outros; busca por palavra-chave.
- Estado de contingência com links para 3 repositórios públicos de referência quando a API estiver indisponível (por exemplo, por limite de requisições).
- Links externos seguros (`rel="noopener noreferrer"`).
- Estrutura pronta para **GitHub Pages** e documentação acadêmica.

> **Importante:** a integração é de **leitura de dados públicos**, não de autenticação ou edição de repositórios. A gestão de colaboradores e seus acessos é realizada no GitHub, não na interface estática.

## Publicação do zero no GitHub (caminho recomendado)

1. Entre em https://github.com/new com sua conta `DimitriSCinnanti`.
2. Crie um repositório **público** chamado `PortfolioHUB`. Não crie README inicial, porque o pacote já tem um.
3. Descompacte o ZIP recebido. Abra o Git Bash ou terminal na pasta `PortfolioHUB_Dimitri_Cinnanti`.
4. Execute:

```bash
git init
git branch -M main
git add .
git commit -m "feat: implementa PortfolioHUB com integracao GitHub"
git remote add origin https://github.com/DimitriSCinnanti/PortfolioHUB.git
git push -u origin main
```

O GitHub solicitará autenticação pela forma configurada no seu computador. Não cole tokens em comandos compartilhados, relatórios ou capturas. Se o repositório já existir, adapte o passo de inicialização.

5. No GitHub, vá a **Settings > Pages**.
6. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
7. Escolha a branch `main`, a pasta `/(root)`, e clique **Save**.
8. Após a implantação, visite **https://dimitriscinnanti.github.io/PortfolioHUB/** e confirme que funciona. Esse endereço é o esperado para esse nome de repositório, **não uma publicação já verificada**.
9. Teste os botões, filtros, visualização móvel e links. Guarde capturas reais na pasta `evidencias/`.

Guia oficial do GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Alternativa: envio de arquivos pelo navegador

No repositório novo, use **Add file > Upload files** e envie `index.html`, a pasta `assets/` e os documentos (mantendo a estrutura de pastas). O Git local é preferível para demonstrar commits e versionamento.

## Integração opcional com Google Workspace

Para demonstrar integração documental com o Google Workspace, crie um documento real no **Google Docs** com o planejamento ou um resumo de testes. Configure compartilhamento **somente para leitura**, se optar por torná-lo público, remova qualquer dado pessoal/sensível e atualize a constante `GOOGLE_DOCS_URL` no arquivo `assets/app.js`. O site exibirá um link para a documentação no rodapé de contato.

O uso do Google Gemini como apoio, exigido no desafio, deve ser documentado em `docs/GEMINI.md`; um link para o Gemini não equivale a demonstrar seu uso.

## Segurança e gestão de usuários

- Administrador: proprietário do repositório no GitHub.
- Colaboradores: configure **Settings > Collaborators and teams** (se realmente houver colaboração; não conceda acessos desnecessários).
- Proteja a conta com autenticação de dois fatores.
- Recomenda-se proteção de branch e revisão de alterações antes de mesclar, conforme recursos disponíveis.
- Nunca adicione senhas, tokens, chaves da API Gemini ou dados sensíveis ao repositório público.
- O site **não** implementa login. A gestão de permissões de escrita acontece no GitHub.

Detalhes em `docs/SEGURANCA.md` e `docs/COLABORACAO.md`.

## Estrutura

```text
PortfolioHUB_Dimitri_Cinnanti/
├── index.html
├── assets/
│   ├── app.js
│   ├── style.css
│   └── favicon.svg
├── docs/
│   ├── PLANEJAMENTO.md
│   ├── SEGURANCA.md
│   ├── COLABORACAO.md
│   ├── TESTES.md
│   ├── GEMINI.md
│   └── ROTEIRO_VIDEO.md
├── evidencias/
│   └── LEIA-ME.txt
├── .nojekyll
└── README.md
```

## Evidências e entrega

O trabalho do professor exige **relatório individual em PDF** e um **vídeo de cerca de 5 minutos no YouTube**. Edite o modelo de relatório fornecido separadamente, inserindo os links reais do repositório, do site publicado, do vídeo e das evidências. Não descreva como executados testes ou ações que ainda não realizou.

**Prazo conforme enunciado:** 25/10/2026, às 23h55.
