---
title: 'Yarn Package Manager: Será que é melhor do que NPM?'
author: André Lucas
type: post
date: 2016-12-23T19:52:34+00:00
url: /yarn-package-manager-sera-que-e-melhor-do-que-npm/
mvp_post_template:
  - def
mvp_featured_image:
  - show
post_views_count:
  - 376
categories:
  - Desenvolvimento Web
tags:
  - desenvolvimento
  - git
  - node.js
  - npm
  - programação
  - software
  - yarn

---
Se você programa em NODE.js, provavelmente tem uma relação bem próxima com o gerenciador de pacotes (Package Manager) [NPM][1]. Desde o início da criação do NODE o NPM teve um papel central e em alguns casos determinante no sucesso da tecnologia. A facilidade de gerenciar bibliotecas e pedaços de códigos com o NPM fez a comunidade de NODE ser ativa da mesma maneira que as gemas (Gems) no Ruby on Rails.

Contudo, recentemente um concorrente andou ganhando destaque no universo da plataforma em JavaScript: o [Yarn][2].

<a href="https://www.igluonline.com/8-blibiotecas-de-javascript-para-ficar-de-olho-2017/" target="_blank">Aproveite também para conferir as melhores bibliotecas JavaScript para 2017.</a>

## Histórico

Em um passado recente para se desenvolver um software ou um site você tinha que achar o pacote ou biblioteca online, fazer o download da versão em .zip, extrair, adicionar ao seu projeto e torcer para estar tudo ok. Poucas pessoas eram ativas no desenvolvimento e melhora desses packages e o controle de versão era uma complicação imensa.

Para solucionar essa dificuldade, gestores de pacotes (que agora vou me referir apenas como package managers) como o Bower começaram a surgir. Como a maior parte dos packages são open source (código aberto) e sua disponibilidade era em repositórios de controle de versão, como o [Github][3], essas ferramentas ajudaram a organizar, baixar, atualizar e aplicar códigos para sua reutilização em diversos projetos.

O [Se você programa em NODE.js, provavelmente tem uma relação bem próxima com o gerenciador de pacotes (Package Manager) [NPM][1]. Desde o início da criação do NODE o NPM teve um papel central e em alguns casos determinante no sucesso da tecnologia. A facilidade de gerenciar bibliotecas e pedaços de códigos com o NPM fez a comunidade de NODE ser ativa da mesma maneira que as gemas (Gems) no Ruby on Rails.

Contudo, recentemente um concorrente andou ganhando destaque no universo da plataforma em JavaScript: o [Yarn][2].

<a href="https://www.igluonline.com/8-blibiotecas-de-javascript-para-ficar-de-olho-2017/" target="_blank">Aproveite também para conferir as melhores bibliotecas JavaScript para 2017.</a>

## Histórico

Em um passado recente para se desenvolver um software ou um site você tinha que achar o pacote ou biblioteca online, fazer o download da versão em .zip, extrair, adicionar ao seu projeto e torcer para estar tudo ok. Poucas pessoas eram ativas no desenvolvimento e melhora desses packages e o controle de versão era uma complicação imensa.

Para solucionar essa dificuldade, gestores de pacotes (que agora vou me referir apenas como package managers) como o Bower começaram a surgir. Como a maior parte dos packages são open source (código aberto) e sua disponibilidade era em repositórios de controle de versão, como o [Github][3], essas ferramentas ajudaram a organizar, baixar, atualizar e aplicar códigos para sua reutilização em diversos projetos.

O][4] tinha seus problemas, então uma solução melhorada surgiu com o nome de NPM. Só que a partir do ponto que Node escolheu o NPM como seu package manager padrão ele cresceu imensamente e hoje é um dos maiores gerenciadores disponíveis.

<img class=" wp-image-277 aligncenter" src="http://blog.igluonline.com/wp-content/uploads/2016/12/pexels-photo-169573.jpeg" alt="" width="993" height="662" srcset="https://www.igluonline.com/wp-content/uploads/2016/12/pexels-photo-169573.jpeg 1280w, https://www.igluonline.com/wp-content/uploads/2016/12/pexels-photo-169573-300x200.jpeg 300w, https://www.igluonline.com/wp-content/uploads/2016/12/pexels-photo-169573-768x512.jpeg 768w, https://www.igluonline.com/wp-content/uploads/2016/12/pexels-photo-169573-1024x682.jpeg 1024w" sizes="(max-width: 993px) 100vw, 993px" />

## Problemas com NPM

O NPM é muito bom, mas também não é perfeito. Com o avanço das tecnologias e com a transformação do uso dessas tecnologias, veja alguns dos problemas que hoje o gerenciador enfrenta:

  * **Dependências aninhadas** (Nested dependencies): A versão 2 do NPM aninha as suas dependências, o que leva a duplicações. Isto é, um mesmo pacote pode ser baixado várias vezes em um mesmo projeto. Ao mesmo tempo, se você é um usuário de Windows isso também levará a um problema de caminho grande. Deletar as pastas das dependências acaba se tornando um problema por esse motivo para esses usuários, mas na versão 3 do NPM isso foi resolvido.
  * **Instalação em fila**: Quando NPM busca as dependências de seus repositórios ele instala cada dependência uma depois da outra, o que gasta um tempo enorme para instalar um projeto e começar a trabalhar nele.
  * **Registro único**: Se um pacote não está no [NpmJS][1], você não vai conseguir baixá-lo.
  * **Não há instalação offline**

## Introduzindo Yarn

O [Yarn][2] nasceu de uma iniciativa de gigantes da tecnologia, como Facebook e Google, para a criação de um package manager melhor, mais rápido e mais seguro.

Essa ferramenta possibilita utilizar de pacotes e bibliotecas de múltiplos registros, como NpmJS e Bower e roda as instalações em paralelo. Se você já tiver algum pacote instalado, o Yarn cria uma cópia em cache, facilitando a instalação offline de pacotes. Além disso, já desde o início ele oferece uma estrutura plana de dependências, contrastando com a aninhada do NPM.

Se um request de um pacote qualquer falhar, não vai causar o erro na instalação imediatamente. Ele irá tentar novamente após falhas. Ou seja, considerando tudo que vimos o Yarn é uma melhor alternativa para o NPM por proporcionar uma dinâmica de trabalho melhor.

<img class=" wp-image-276 aligncenter" src="http://blog.igluonline.com/wp-content/uploads/2016/12/Screenshot_1-2.jpg" alt="" width="1132" height="623" srcset="https://www.igluonline.com/wp-content/uploads/2016/12/Screenshot_1-2.jpg 1314w, https://www.igluonline.com/wp-content/uploads/2016/12/Screenshot_1-2-300x165.jpg 300w, https://www.igluonline.com/wp-content/uploads/2016/12/Screenshot_1-2-768x423.jpg 768w, https://www.igluonline.com/wp-content/uploads/2016/12/Screenshot_1-2-1024x563.jpg 1024w" sizes="(max-width: 1132px) 100vw, 1132px" />

## Instalando o Yarn

Há duas formas hoje para instalar o Yarn no seu computador. O primeiro método é utilizar o próprio NPM &#8211; é tipo instalar o Chrome baixando ele no Internet Explorer).

<pre class=" language-javascript" data-title="javascript"><code class=" language-javascript">npm install &lt;span class="token operator">-&lt;/span>g yarn</code></pre>

Esse comando instala o Yarn globalmente e faz o comando yarn ficar disponível no terminal ou prompt de comando.

O segundo método é ir ao [site oficial][2] e baixar o instalador para o seu sistema operacional.

É importante mencionar que ambos jeitos necessitam que o Node.js esteja instalado previamente.

## Como o Yarn funciona

O Yarn não substitui o NPM, mas sim o melhora. ele utiliza o mesmo arquivo **package.json** e salva as dependências na pasta **node_modules/**. Para testar, vamos ver um exemplo de um arquivo package.json de um projeto.

<pre class=" language-json" data-title="json"><code class=" language-json">
  &lt;span class="token property">"private"&lt;/span>&lt;span class="token operator">:&lt;/span> &lt;span class="token boolean">true&lt;/span>&lt;span class="token punctuation">,&lt;/span>
  &lt;span class="token property">"dependencies"&lt;/span>&lt;span class="token operator">:&lt;/span> &lt;span class="token punctuation">{&lt;/span>
    "agenda": "^0.8.1",
    "agendash": "^0.3.1",
    "bcrypt-nodejs": "*",
    "body-parser": "^1.15.0",
    "busboy": "^0.2.12",
    "cloudinary": "^1.3.1",
    "connect-flash": "*",
    "connect-mongo": "^1.1.0",
    "cookie-parser": "^1.4.1",
    "cookie-session": "^1.2.0",
    "errorhandler": "^1.4.3",
    "express": "^4.13.4",
    "express-session": "^1.13.0",
    "ip": "^1.1.2",
    "jade": "^1.11.0",
    "method-override": "^2.3.5",
    "mkdirp": "^0.5.1",
    "mongodb": "^2.1.8",
    "mongoose": "^4.4.7",
    "morgan": "^1.7.0",
    "multer": "^0.1.8",
    "node-moip": "0.0.2-2",
    "node-transloadit": "*",
    "nodemailer": "^2.3.0",
    "nodemon": "^1.9.1",
    "passport": "^0.3.2",
    "passport-facebook": "^2.1.0",
    "passport-google-oauth": "^1.0.0",
    "passport-local": "*",
    "passport-twitter": "^1.0.4",
    "qs": "^2.4.2",
    "request": "^2.73.0",
    "response-time": "^2.3.1",
    "sendgrid": "^2.0.0",
    "stylus": "^0.54.2"
  &lt;span class="token punctuation">}&lt;/span>
&lt;span class="token punctuation">}&lt;/span></code></pre>

Em seguida, podemos criar uma pasta chamada yarn e copiar o arquivo package.json para lá. Para instalar as dependências vá pelo terminal ou prompt de comando até a raiz desse diretório e rode o comando `yarn` ou `yarn install`.

Se você ainda não tiver um arquivo package.json, basta rodar o comando `yarn init.` Isso irá gerar uma série de perguntas para já criar um arquivo baseado dos seus objetivos.

## Adicionar, atualizar e remover dependências

Para adicionar uma dependência, o comando é:

<pre class=" language-bash" data-title="bash"><code class=" language-bash">yarn add &lt;span class="token punctuation">[&lt;/span>package-name&lt;span class="token punctuation">]&lt;/span></code></pre>

Se você quiser uma versão ou tag específica, pode fazer da seguinte forma:

<pre class=" language-bash" data-title="bash"><code class=" language-bash">yarn add &lt;span class="token punctuation">[&lt;/span>package&lt;span class="token punctuation">]&lt;/span>@&lt;span class="token punctuation">[&lt;/span>version-or-tag&lt;span class="token punctuation">]&lt;/span></code></pre>

Para dependências de desenvolvimento (dev dependencies), opcionais ou peer, pode usar os comandos `--dev` `--peer` `--optional`.

<pre class=" language-bash" data-title="bash"><code class=" language-bash">yarn add gulp --dev</code></pre>

Isso irá salvar o gulp no bloco de `devDependencies`. Para atualizar ou remover um pacote, precisamos apenas trocar  o comando `add` para ou `upgrade` ou `remove` seguido do nome do pacote.

<pre class=" language-bash" data-title="bash"><code class=" language-bash">&lt;span class="token comment" spellcheck="true"># atualizar o gulp de 3.9.1 para a versão 4&lt;/span>
yarn upgrade gulp@4.0

&lt;span class="token comment" spellcheck="true"># remover o gulp&lt;/span>
yarn remove gulp</code></pre>

## O arquivo yarn.lock

Após cada instalação, atualização ou remoção, o Yarn atualiza um arquivo chamado **yarn.lock** que irá manter um controle sobre cada pacote instalado na pasta **node_modules**.

Uma dica bacana é que você deverá adicionar esse arquivo no seu controle de versão se quiser uma consistência nos pacotes.

## Removendo o lixo

A maior parte dos packages managers vêm com muito lixo e coisas inúteis. Utilizando uma [imagem de guy fierri][5] podemos ver como o Yarn ajuda nessa questão ao rodarmos o comando `yarn clean`. Ele irá remover todo o lixo que conseguir.

<img class="size-full wp-image-275 aligncenter" src="http://blog.igluonline.com/wp-content/uploads/2016/12/clean.gif" alt="" width="959" height="233" />

Após o comando um arquivo chamado **.yarnclean** será criado e irá ajudar futuras instalações a não adicionarem lixo para o projeto. Esse é um arquivo que é bom manter no seu controle de versão.

## Atualizando o Yarn

Sempre novas versões são lançadas dos packages managers para os melhorar. No caso do Yarn, a forma que temos para atualizar o seu próprio sistema é rodando o comando:

<pre class=" language-bash" data-title="bash"><code class=" language-bash">yarn self-update</code></pre>

Se você quiser instalar uma versão específica do gerenciador, então é só utilizar o seguinte:

<pre class=" language-bash" data-title="bash"><code class=" language-bash">yarn self-update 0.15.1</code></pre>

[Para mais comandos, por favor consulte o site oficial.][6]

## O futuro do Yarn {#future-of-yarn}

Como o Yarn está sendo apoiado por empresas grandes e de peso, é muito provável que iremos ver novas funcionalidades que ajudam e melhoram o desenvolvimento de software. Não acho impossível em breve termos esse package manager como padrão em novas tecnologias ou mesmo sendo o substituto de antigos gestores de pacotes em tecnologias que usamos hoje. Quem sabe até do Node.js.

De qualquer maneira o projeto é muito bacana e vale a pena ser utilizado para simplificar a vida dos desenvolvedores.

Algo bobo, mas interessante: Usuários do Windows não possuem acesso aos emojis quando instalam as dependências:

<img class="size-full wp-image-274 aligncenter" src="http://blog.igluonline.com/wp-content/uploads/2016/12/imagem.gif" alt="" width="847" height="201" />

Fonte do artigo de referência: [Scotch.io][7]

 [1]: https://www.npmjs.com/
 [2]: https://yarnpkg.com/
 [3]: https://github.com/
 [4]: https://bower.io/
 [5]: https://medium.com/friendship-dot-js/i-peeked-into-my-node-modules-directory-and-you-wont-believe-what-happened-next-b89f63d21558#.trgwdqrkz
 [6]: https://yarnpkg.com/en/docs/cli/
 [7]: https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm#introducing-yarn