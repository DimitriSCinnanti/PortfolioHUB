# Registro de uso do Google Gemini — PortfolioHUB

**Projeto:** Implantação PortfolioHUB + IA Gemini — Bootcamp I  
**Estudante:** Dimitri Sofoulis Cinnanti — Ciência da Computação, UniCEUB  
**Data do registro:** 25/10/2026  
**Site:** https://dimitriscinnanti.github.io/PortfolioHUB/  
**Repositório:** https://github.com/DimitriSCinnanti/PortfolioHUB

## Objetivo da consulta

O Google Gemini foi utilizado como ferramenta de apoio para revisar a implantação do PortfolioHUB, especialmente a integração com GitHub, políticas de segurança, controle de acesso e testes. O objetivo foi receber recomendações, comparar cada uma com o projeto real e registrar decisões técnicas.

## Solicitação feita ao Gemini

Foi solicitada uma revisão da implantação com base nos links do site e do repositório, pedindo três melhorias ou verificações importantes e seus motivos, distinguindo o que a ferramenta verificou daquilo que estava apenas recomendando. A resposta da ferramenta foi copiada e fornecida para análise durante a preparação do relatório.

## Síntese das três recomendações recebidas

| Recomendação do Gemini | Análise e decisão |
| --- | --- |
| Conferir se existem segredos ou tokens expostos nos arquivos e no histórico do Git | O arquivo público `assets/app.js` foi conferido: acessa a API pública do GitHub por HTTPS sem token embutido. Isso não comprova a ausência de segredos em todo o histórico. A revisão completa e o Secret Scanning permanecem como recomendações. |
| Proteger o acesso a eventual painel administrativo, validando autenticação e autorização no servidor | Não se aplica à versão atual: o PortfolioHUB é um site estático, sem login, painel administrativo ou backend. O controle de edição dos arquivos é feito nas permissões do próprio GitHub. |
| Implementar pipeline de testes automatizados por GitHub Actions, com status no README | Considerada uma melhoria futura. O projeto teve 8 testes locais controlados, mas não possui workflow de CI/CD publicado. Não foi declarado como implementado. |

## O que foi efetivamente observado

1. O projeto está publicado pelo GitHub Pages, conforme capturas do estudante.
2. O código `assets/app.js` consulta apenas repositórios públicos do GitHub e não precisa de chave de API para essa funcionalidade.
3. A apresentação dos campos de repositórios utiliza `textContent`, e os links de nova aba usam `noopener noreferrer`.
4. O site não possui painel administrativo, login próprio ou banco de dados.
5. Oito testes locais com respostas simuladas da API foram registrados separadamente; eles não substituem uma revisão completa da produção.

## O que ainda precisa de comprovação

- Conferência das configurações de 2FA, colaboradores, rulesets e eventuais alertas de segurança na conta GitHub.
- Verificação de segredos em todo o histórico de commits.
- Testes manuais adicionais no endereço publicado.
- Caso exigido, anexar uma captura de tela da conversa original no Gemini.

## Conclusão

O Gemini atuou como apoio na análise da implantação. A recomendação sobre segredos ajudou a orientar a revisão do código; a sugestão sobre painel administrativo foi considerada não aplicável; e a proposta de GitHub Actions foi documentada como melhoria futura. A aplicação **não possui integração à API Gemini**, nem afirma executar testes ou autenticação via Gemini.

**Evidência:** resposta textual do Gemini fornecida pelo estudante em 25/10/2026; o registro não substitui a captura da conversa, caso ela seja necessária na avaliação.
