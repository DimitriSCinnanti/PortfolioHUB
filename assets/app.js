/* PortfolioHUB: integração de LEITURA com repositórios públicos do GitHub.
   Não inclua chaves privadas, tokens ou senhas neste arquivo. */
'use strict';
const GITHUB_USER = 'DimitriSCinnanti';
// Opcional: crie um documento no Google Docs, compartilhe como LEITOR e coloque o link aqui.
const GOOGLE_DOCS_URL = '';
const DESTAQUES = new Set(['Meu_Study_Hub_TI', 'backend-ponto', 'programacao_web_cc_dimitri']);
const PUBLIC_REPOS_BACKUP = [
  {name:'Meu_Study_Hub_TI',html_url:'https://github.com/DimitriSCinnanti/Meu_Study_Hub_TI',description:'Repositório de organização e estudo de Ciência da Computação.',language:'Markdown',updated_at:null,featured:true},
  {name:'backend-ponto',html_url:'https://github.com/DimitriSCinnanti/backend-ponto',description:'Repositório de desenvolvimento backend.',language:null,updated_at:null,featured:true},
  {name:'programacao_web_cc_dimitri',html_url:'https://github.com/DimitriSCinnanti/programacao_web_cc_dimitri',description:'Exercícios e projetos de programação web.',language:null,updated_at:null,featured:true}
];
let repos = PUBLIC_REPOS_BACKUP;
let filtro = 'todos';
let busca = '';
const lista = document.getElementById('project-grid');
const status = document.getElementById('api-status');
const count = document.getElementById('repo-total');
function categoria(repo){const terms = `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase();return /(web|vue|javascript|typescript|html|css|frontend|react)/.test(terms)?'web':'outros';}
function prettyName(name){return name.replaceAll('_',' ').replaceAll('-',' ');}
function dataCurta(value){if(!value)return 'GitHub';const d=new Date(value);return Number.isNaN(d.getTime())?'GitHub':new Intl.DateTimeFormat('pt-BR',{month:'short',year:'numeric'}).format(d);}
function render(){const filtered=repos.filter(repo=>{const matchFiltro=filtro==='todos'||(filtro==='destaques'&&DESTAQUES.has(repo.name))||(filtro==='web'&&categoria(repo)==='web')||(filtro==='outros'&&categoria(repo)==='outros');const target=`${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLocaleLowerCase('pt-BR');return matchFiltro&&target.includes(busca);});count.textContent=String(repos.length);lista.replaceChildren();if(!filtered.length){const empty=document.createElement('p');empty.className='empty';empty.textContent='Nenhum projeto encontrado para esse filtro.';lista.appendChild(empty);return;}
  for(const repo of filtered){
    const card=document.createElement('article');card.className='project-card';
    const top=document.createElement('div');top.className='project-card-top';const icon=document.createElement('span');icon.className='repo-symbol';icon.textContent='⌘';icon.setAttribute('aria-hidden','true');const pill=document.createElement('span');pill.className='repo-label';pill.textContent=DESTAQUES.has(repo.name)?'Projeto em destaque':'Repositório público';top.append(icon,pill);
    const h=document.createElement('h3');h.textContent=prettyName(repo.name);
    const p=document.createElement('p');p.textContent=repo.description||'Projeto disponível para consulta e acompanhamento no GitHub.';
    const link=document.createElement('a');link.href=repo.html_url;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Abrir repositório ↗';link.setAttribute('aria-label',`Abrir repositório ${repo.name} no GitHub`);
    const meta=document.createElement('div');meta.className='project-meta';const lang=document.createElement('span');lang.className='language';const dot=document.createElement('span');dot.className='lang-dot';dot.setAttribute('aria-hidden','true');lang.append(dot,document.createTextNode(repo.language||'Projeto'));const date=document.createElement('span');date.textContent=dataCurta(repo.updated_at);meta.append(lang,date);
    card.append(top,h,p,link,meta);lista.append(card);
  }
}
for(const button of document.querySelectorAll('[data-filter]')){button.addEventListener('click',()=>{filtro=button.dataset.filter;for(const item of document.querySelectorAll('[data-filter]')){const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));}render();});}
document.getElementById('project-search').addEventListener('input',event=>{busca=event.target.value.trim().toLocaleLowerCase('pt-BR');render();});
document.getElementById('year').textContent=String(new Date().getFullYear());
if(GOOGLE_DOCS_URL.startsWith('https://docs.google.com/')){const el=document.getElementById('workspace-doc-link');el.href=GOOGLE_DOCS_URL;el.hidden=false;}
render();
async function carregarRepositorios(){try{const response=await fetch(`https://api.github.com/users/${encodeURIComponent(GITHUB_USER)}/repos?type=owner&sort=updated&per_page=100`,{headers:{Accept:'application/vnd.github+json'}});if(!response.ok)throw new Error(`HTTP ${response.status}`);const data=await response.json();if(!Array.isArray(data))throw new Error('Formato inválido');
  const valid=data.filter(r=>r&&!r.private&&typeof r.name==='string'&&typeof r.html_url==='string'&&r.html_url.startsWith('https://github.com/')&&!r.fork&&r.size>0).map(r=>({name:r.name,html_url:r.html_url,description:r.description,language:r.language,updated_at:r.updated_at}));if(!valid.length)throw new Error('Sem repositórios disponíveis');repos=valid.sort((a,b)=>Number(DESTAQUES.has(b.name))-Number(DESTAQUES.has(a.name))||new Date(b.updated_at)-new Date(a.updated_at));status.textContent='Integração ativa: repositórios públicos consultados na API do GitHub.';render();
}catch(err){status.textContent='Não foi possível consultar a API agora. Exibindo os projetos públicos de referência; consulte o GitHub para dados atualizados.';console.warn('Falha na leitura pública do GitHub:',err.message);}}
carregarRepositorios();
