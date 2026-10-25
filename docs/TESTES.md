# 5. Plano de testes e validação

> Matriz pronta para preenchimento. Todos os testes estão inicialmente como **PENDENTES**. Atualize após executá-los e registre evidência, se possível.

| ID | Teste | Resultado esperado | Status | Evidência |
|---|---|---|---|---|
| T01 | Abrir `index.html` ou site publicado | Tela inicial aparece sem erros visuais | PENDENTE | |
| T02 | Consultar seção de projetos com rede disponível | Cartões públicos carregam; status da API confirma | PENDENTE | |
| T03 | Buscar um nome que consta nos cartões | Lista é filtrada | PENDENTE | |
| T04 | Clicar em `Destaques`, `Web`, `Outros` | Filtros alteram os cartões | PENDENTE | |
| T05 | Clicar em um projeto | Link abre repositório GitHub válido | PENDENTE | |
| T06 | Simular bloqueio da API no navegador | Mensagem de fallback; cartões conhecidos continuam visíveis | PENDENTE | |
| T07 | Abrir em largura de celular | Conteúdo sem corte horizontal | PENDENTE | |
| T08 | Navegar usando tecla Tab | Links, botões e busca recebem foco visível | PENDENTE | |
| T09 | Consultar URL do GitHub Pages | Site publicado acessível pela internet | PENDENTE | |
| T10 | Verificar credenciais nos arquivos enviados | Nenhuma senha, token ou segredo publicado | PENDENTE | |

## Como executar os testes

- Abra o site em um navegador atualizado.
- Teste a busca pelo termo `Study`.
- Compare os links com seu perfil GitHub.
- Use a ferramenta do navegador para visualizar em dispositivo móvel.
- Para fallback: no DevTools > Network, bloqueie a requisição para `api.github.com` e recarregue.
- Confira a aba Console para erros inesperados.
- Para segurança: verifique a lista de arquivos do repositório antes e após publicar.

## Registro de execução

- Data/hora: _____________________
- Navegador e dispositivo: _____________________
- Total de testes aprovados: ____ / 10
- Falhas encontradas e correções: _____________________
- URL publicada: _____________________
