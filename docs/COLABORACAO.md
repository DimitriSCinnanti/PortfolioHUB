# 4. Compartilhamento, Git e colaboração

## Estratégia

- Repositório próprio do PortfolioHUB para centralizar código e documentação.
- Branch principal `main` para versão publicada.
- Histórico de commits para rastrear modificações.
- Para mudanças futuras: criar branch `feature/nome`, registrar commits e abrir pull request para revisão.
- GitHub Issues podem registrar tarefas, melhorias e correções se forem de fato usados.

## Fluxo de exemplo

```bash
git checkout -b feature/melhora-filtro
# editar arquivos
git add .
git commit -m "feat: melhora filtro de projetos"
git push -u origin feature/melhora-filtro
```

No GitHub, abrir um pull request da branch `feature/melhora-filtro` para `main`, revisar e mesclar. **Só relate essa atividade como realizada se de fato executá-la.**

## Provas possíveis

- Histórico de commits do projeto.
- Página de configurações de colaboradores, se aplicável.
- Pull request ou issue de exemplo real, caso tenha criado.
- Captura mostrando o código e a publicação no GitHub Pages.

## Entrega individual

O desafio é individual. Se não houver outra pessoa colaborando, explicar que as ferramentas colaborativas foram preparadas e demonstrar um fluxo de branches/pull requests, sem alegar colaboração externa inexistente.
