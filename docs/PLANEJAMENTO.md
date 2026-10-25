# 1. Planejamento da implantação

## Objetivo

Desenvolver e implantar o PortfolioHUB como uma página pessoal responsiva que liste projetos do GitHub e demonstre controle de versões, medidas de segurança, documentação, colaboração e apoio do Gemini.

## Escopo

**Incluído:** página pública, integração de leitura com API GitHub, filtros, busca, links para repositórios, instruções de publicação no GitHub Pages e documentação técnica.

**Não incluído nesta versão:** login de visitantes, permissões de acesso gerenciadas dentro do site, edição de repositórios pela página, banco de dados e integração autenticada com Google Workspace. Essas funções exigiriam backend, OAuth e controles adicionais.

## Arquitetura

```text
Navegador do visitante
   | HTML/CSS/JavaScript
   v
PortfolioHUB hospedado no GitHub Pages
   | GET HTTPS, sem autenticação
   v
API pública do GitHub -> repositórios públicos do perfil
```

## Etapas planejadas

| Ordem | Atividade | Evidência esperada |
|---|---|---|
| 1 | Definir objetivo, escopo e requisitos | Documento de planejamento |
| 2 | Criar ambiente GitHub dedicado | Repositório `PortfolioHUB` criado |
| 3 | Integrar repositórios pela API pública | Cartões dos projetos carregados |
| 4 | Estabelecer medidas de segurança e permissões | Capturas de configurações verificadas |
| 5 | Registrar apoio do Gemini e ajustes | Capturas e resumo de prompts realmente usados |
| 6 | Publicar com GitHub Pages | URL pública acessível |
| 7 | Executar testes | Matriz de testes preenchida |
| 8 | Produzir vídeo e PDF final | Links do vídeo e do PDF enviados |

## Principais riscos

- **Limite da API GitHub:** manter fallback com projetos públicos conhecidos e avisar o visitante.
- **Links desatualizados:** conferir URLs dos projetos antes da entrega.
- **Permissões excessivas:** conceder acesso apenas quando necessário e revisar os colaboradores.
- **Dados sensíveis:** jamais publicar credenciais, senhas, chaves de API, arquivos `.env` ou dados privados.
- **Falhas em dispositivos móveis:** validar layout responsivo em desktop e celular.

## Ferramentas

Git, GitHub, GitHub Pages, HTML, CSS, JavaScript, API REST GitHub, Google Gemini (apoio externo), Google Docs/Drive (opcional, para registro documental).
