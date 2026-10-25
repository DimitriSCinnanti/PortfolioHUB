# 3. Gestão de usuários e segurança

## Modelo adotado

O PortfolioHUB disponibilizado pelo GitHub Pages é um **site estático público**. Ele **não implementa contas internas ou login**. O controle de quem pode alterar o código, aprovar contribuições ou fazer publicações é feito nas configurações do repositório do GitHub.

## Permissões

- **Proprietário do repositório:** administra configurações, acesso e publicação.
- **Visitante do site:** pode ver o conteúdo e os repositórios públicos; não pode alterar o site.
- **Colaborador GitHub (se incluído):** recebe permissões de acordo com a necessidade, configuradas no GitHub. Não conceder administração sem motivo.

## Controles implementados no código

1. A API do GitHub é consultada por HTTPS, sem tokens no front-end.
2. Os campos externos, como nome e descrição de repositórios, são exibidos por `textContent`, não por HTML interpretado, reduzindo o risco de injeção de scripts.
3. Links para GitHub e LinkedIn usam `rel="noopener noreferrer"` e `target="_blank"`.
4. A busca e os filtros trabalham somente com dados já obtidos publicamente.
5. Erros da API são tratados com mensagem clara e fallback para links públicos previamente listados.
6. `.gitignore` impede inclusão acidental de arquivos comuns de ambiente `.env`; ainda assim, revisões humanas são necessárias.

## Configurações recomendadas para realizar e comprovar no GitHub

- [ ] Verificar se a autenticação de dois fatores (2FA) está ativa.
- [ ] Conferir **Settings > Collaborators and teams** (ou área equivalente) e revisar quem tem acesso.
- [ ] Avaliar proteção de `main`/ruleset e fluxo por pull request (conforme opções do plano e repositório).
- [ ] Confirmar que o repositório público não contém credenciais, `.env`, dados privados ou informações de clientes.
- [ ] Conferir as configurações de segurança do repositório, incluindo eventuais alertas disponíveis.
- [ ] Salvar capturas **das configurações realmente verificadas**, sem mostrar informações sensíveis.

## Limitações

Não existe sistema próprio de login, OAuth, alteração de permissões pela interface do site ou armazenamento privado. Essas funcionalidades **não podem ser afirmadas como implementadas**. Para ampliá-las, seria preciso desenvolver backend seguro, autenticação adequada e fluxo de autorização específico.
