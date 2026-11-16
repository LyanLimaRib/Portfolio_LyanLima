# Portfólio Pessoal

**Aluno:** LYAN APARECIDO DE LIMA RIBEIRO

## Descrição do portfólio

Site de apresentação profissional com quatro partes: **Perfil** (quem eu sou), **Habilidades** (o que sei fazer), **Projetos** (trabalhos que desenvolvi) e **Contato** (como falar comigo). O objetivo é reunir meus trabalhos em um só lugar, de forma organizada e fácil de navegar, inclusive no celular.

## Tecnologias utilizadas

- HTML5
- CSS3
- Bootstrap 5.3 (navbar, grid, cards, barras de progresso e validação de formulário)
- JavaScript
- Git e GitHub
- GitHub Pages (publicação)

## Link do site publicado

https://github.com/LyanLimaRib

## Como o projeto funciona

- **Menu de navegação:** a navbar do Bootstrap fica fixa no topo. Cada link leva à sua seção por âncora (`#perfil`, `#habilidades`, `#projetos`, `#contato`). O *scrollspy* do Bootstrap destaca o link da seção que está na tela, e o menu vira botão "hambúrguer" em telas pequenas.
- **Perfil:** apresentação, foto e botões que levam aos projetos e ao contato.
- **Projetos:** cards do Bootstrap com título, descrição e link. Botões de filtro permitem ver todos os projetos ou só os de uma categoria.
- **Contato:** dados para contato e um formulário. O Bootstrap valida os campos e, se estiverem corretos, o programa de e-mail do visitante abre com a mensagem preenchida.
- **Layout responsivo:** o grid do Bootstrap reorganiza as colunas conforme o tamanho da tela.

## Recurso novo adicionado

**Seção de Habilidades com barras de progresso animadas**, além de **filtro de projetos por categoria** e **efeitos de hover** nos cards e botões. As barras começam vazias e só enchem quando o visitante chega na seção, com um contador de porcentagem acompanhando o preenchimento.

## Como o recurso foi implementado

1. **HTML:** cada habilidade é um bloco `.skill` com o atributo `data-valor` (por exemplo, `data-valor="90"`) e uma barra `.progress` do Bootstrap.
2. **CSS:** a barra começa com `width: 0` e tem `transition: width 1.4s`, então qualquer mudança de largura é animada.
3. **JavaScript:** um `IntersectionObserver` detecta quando o bloco aparece na tela. Nesse momento o script lê o `data-valor`, define a largura da barra e atualiza o número da porcentagem. Depois disso, deixa de observar o bloco, para a animação acontecer só uma vez.
4. **Filtro de projetos:** cada card tem `data-categoria`. Ao clicar em um botão de filtro, o JavaScript adiciona ou remove a classe `.oculto` (`display: none`) nos cards que não pertencem à categoria escolhida.
5. **Hover:** regras `:hover` com `transition` no CSS elevam os cards e escurecem os botões.
6. **Acessibilidade:** a animação é desligada para quem ativa "reduzir movimento" no sistema (`prefers-reduced-motion`).

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub e envie `index.html`, `style.css`, `script.js` e `README.md`.
2. No repositório, abra **Settings > Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`, e clique em **Save**.
4. Aguarde alguns minutos e copie o link gerado para a seção "Link do site publicado" acima.