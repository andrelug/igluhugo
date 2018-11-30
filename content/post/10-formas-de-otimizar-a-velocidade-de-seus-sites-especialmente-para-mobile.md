+++
author = "André Lucas"
categories = ["Desenvolvimento web", "WordPress"]
date = "2018-11-30T19:07:09-02:00"
disqus = false
hugo_image = "/images/uploads/2018/11/30/otimizar-velocidade-website-imagens-smush.jpg"
tags = ["Velocidade do site", "Otimizar websites", "Sites rápidos"]
title = "10 Formas de otimizar a velocidade de seus sites (especialmente para Mobile)"
url = ""
youtube = ""

+++
Qual foi a última vez que você testou a velocidade do seu website? Já sabemos que a velocidade de um site é um dos maiores fatores de engajamento ou rejeição quando um usuário navega pelas páginas dos nossos tão trabalhandos sites.

Fazer sites velozes já é uma tarefa difício, porém nos aparelhos móveis - nos quais muitas vezes dependemos de conexões 3g ou 4g não tão boas - o desafio da criação de um site rápido é ainda mais complicado.

Em um mundo ideal, o seu website deveria carregar rapidamente em qualquer aparelho e em qualquer conexão, mas na prática precisamos tomar uma série de ações para tentar chegar perto dessa proesa e nem sempre é possível.

De um lado temos os designers com o desejo de criar uma experiência sensacional com animações, transições, vídeos e imagens de alta qualidade. Do outro temos os desenvolvedores que querem ganhar produtividade utilizando pesadas bibliotecas prontas , frameworks ou plataformas como WordPress e ao mesmo tempo precisam descobrir como fazer para o site carregar rápido com uma imagem de 1mb no banner.

Nesse artigo vou passar por 10 dias práticas que todo designer e desenvolvedor web precisa saber para criar websites que performam bem tanto no desktop quanto no mobile.

Antes de começar, aproveite para já testar o seu site com essas ferramentas do Google:

* [Test my site](https://testmysite.thinkwithgoogle.com/intl/pt-br)
* [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/)
* [Web.dev](https://web.dev/)

## 1- Otimize as imagens

Um dos maiores problemas com o tempo de carregamento dos websites é o tamanho das imagens que estão sendo carregadas. Em geral elas representam a maior parte do tamanho total dos sites e com alguns ajustes e tratamentos elas podem diminuir consideravelmente o tempo de carregamento.

A forma mais fácil de otimizar imagens para a web é tratá-las antes mesmo de as subir para o seu site. É importante as recortar para não ficarem maior do que precisam ter na página. Em seguida, é importante passar elas por algum software de otimização e compressão para que o tamanho do arquivo no final das contas seja o menor possível.

Algumas ferramentas gratuitas que pode utilizar para otimizar suas imagens:

* [ImageResize](https://imageresize.org/)
* [Tinyjpg](https://tinyjpg.com/)
* [Compress JPEG](https://compressjpeg.com/)
* [Compressor](https://compressor.io/compress)
* [JPEGmini](https://www.jpegmini.com/)
* [Optimizilla](https://imagecompressor.com/)

Caso prefira utilizar o WordPress, então temos esses plugins gratuitos para otimizar e diminuir o tamanho das suas imagens gratuitamente:

* [Smush](https://wordpress.org/plugins/wp-smushit/)
* [reSmush.it](https://pt.wordpress.org/plugins/resmushit-image-optimizer/)

![](/images/uploads/2018/11/30/otimizar-velocidade-website-imagens-smush.jpg)

## 2- Seu servidor faz diferença na velocidade do seu site

Está tudo bem em comprar aquele servidor que custa menos de R$ 5,00 por mês quando estamos começando com nosso primeiro website. Afinal, em geral não sabemos se vai dar certo ou não e queremos testar com o menor valor possível.

Contudo, provavelmente essa hospedagem não vai durar muito tempo e não podemos esquecer que junto com o crescimento dos nossos sites, devemos também aumentar e melhorar nossos servidores.

Várias vezes clientes me contactam para falar sobre o site que possuem está muito lento. Quando vou analisar os possíveis problemas, vejo que está utilizando um [daqueles servidores que parecem não atualizaram seus sistemas desde a década de 90](https://www.igluonline.com/nao-vale-pena-utilizar-servicos-brasileiros-de-hospedagem-de-sites/).

Se você não entende muito sobre como funciona os tipos de servidores, recomendo esse artigo. Porém, para simplificar temos a seguinte lista na ordem de mais poderosos para menos poderosos:

1. Servidores dedicados
   1. Você é o único a utilizar uma determinada máquina na nuvem.
2. Cloud hosting
   1. Um formato que funciona como um servidor dedicado, mas é mais caro e tem a capacidade de crescer e melhorar com facilidade dependendo da necessidade.
3. VPS (Virtual Private Servers)
   1. Você compartilha uma máquina com outras pessoas, mas não compartilha um nível determinado de recursos dessa máquina.
4. Compartilhado (Mais conhecido como shared hosting)
   1. Você compartilha a máquina e os recursos com outros usuários.

Naturalmente há uma infinidade de tipos diferentes no meio do caminho entre um tipo e outro e também níveis de potência e capacidade de cada um deles. Se você adquirir um servidor dedicado muito fraco, pode ser que ele seja mais lento do que um compartilhado que está uma máquina mais potente.

Para te ajudar nesse processo, vou recomendar alguns serviços para cada tipo de servidor mencionado. Um agradecimento também ao Darrel Wilson pelo [vídeo comparativo dos principais serviços hoje no mercado](https://www.youtube.com/watch?v=sIQ_LGL7cB8&t=0s&list=LLO_wisVMKeWvbKZOGgYMeBA&index=9).

### [Servidor compartilhado](https://www.greengeeks.com/track/andrelug)

* [GreenGeeks](https://www.greengeeks.com/track/andrelug) - Eles foram os mais rápidos no benchmark de performance e estabilidade dentre os principais serviços de hospedagem testados. Eu o utilizo e tenho excelentes resultados de performance.

  Eu confesso que tinha um pouco de preconceito com servidores compartilhados há um tempo atrás, mas depois de experimentar o serviço da GreenGeeks eu percebi que é mais uma questão de qual serviço escolhe do que do tipo de servidor em si.

### [Servidor VPS](https://m.do.co/c/896ce2aab5ed)

* [Digital Ocean](https://m.do.co/c/896ce2aab5ed) - O primeiro VPS que adquiri na vida foi através do Digital Ocean em 2012 e continuo achando eles a melhor opção pela facilidade, preço e confiança no serviço.

  O preço é muito bom e eles possuem tutoriais muito detalhados para praticamente qualquer coisa que deseja instalar na máquina.

### [Cloud hosting](https://aws.amazon.com/pt/)

* [Amazon AWS](https://aws.amazon.com/pt/) - A Amazon é o maior serviço de cloud hosting hoje no mercado e é de fato o melhor. Já utilizei o Azure e alguns outros, mas no fundo a AWS tem o melhor serviço e o maior número de ferramentas. É um serviço bastante complexo de ser utilizado, mas para sites que estão em constante e amplo crescimento vale muito a pena.

### [Servidor dedicado](http://www.dpbolvw.net/click-8287922-12098697)

* [LiquidWeb](http://www.dpbolvw.net/click-8287922-12098697) - A LiquidWeb é um serviço muito bacana e possuem um dos suportes mais amigaveis e bem preparados que já conheci.

### [Menção honrosa](https://www.umbler.com/br/seja-bem-vindo?u=rj00xd5j)

* [Umbler](https://www.umbler.com/br/seja-bem-vindo?u=rj00xd5j) - Esse serviço nacional possui algumas opções de hospedagem. Seja de maneira compartilhada ou até mesmo com recursos dedicados, eu hoje posso recomendá-los como melhor opção do Brasil para hospedar os seus sites.

**Dica bônus**: Existem alguns arquivos e conteúdos que drenam muitos recursos e a capacidade dos servidores. Elementos como vídeos, áudios e até mesmo arquivos maiores podem comprometer a velocidade do seu site se hospedados juntos. Para esses tipos de arquivos, procure ferramentas externas para hospedá-los como YouTube, Vimeo e até mesmo Amazon S3.

[![](/images/uploads/2018/11/30/web-hosting-velocidade-greengeeks.jpg)](https://www.greengeeks.com/track/andrelug)

## 3- Preste atenção no seu JavaScript

Como você provavelmente já sabe, o JavaScript é o responsável por praticamente todas as funcionalidades e animações bacanas nos websites. É possível fazer uma coisa ou outra com CSS, mas no fundo recorremos ao bom e velho JS para nos ajudar.

Apesar de que precisamos de muito código para realmente criar um arquivo pesado e que vai impactar o carregamento do site - e às vezes quando utilizamos bibliotecas externas chegamos a níveis críticos de quantidade de código -, o grande perigo aqui é como utilizamos o JavaScript em nosso site.

Para tal, seguem algumas dicas:

### Adicione os scripts no final do seu arquivo HTML.

O seu navegador vai travar o carregamento do site enquanto o JavaScript estiver carregando. Dessa maneira, quanto mais para baixo seus arquivos JS estiverem, mais informações e conteúdos os seus usuários já poderão ver no site rapidamente.

### Minifique seu código

Uma prática que ajuda a diminuir o tamanho dos arquivos JavaScript é a _minificação (minify)_ deles. Isto é, tirar todos os espaços em branco, reduzir o tamanho dos nomes das variáveis e mais alguns processos complexos que no final das contas fará seu arquvio ficar super compactado.

Ferramentas gratuitas:

* [JScompress](https://jscompress.com/)
* [JavaScript-minifier](https://javascript-minifier.com/)
* [Minifier](https://www.minifier.org/)

### Concatene seus arquivos

É comum termos mais do que um arquivo JavaScript em nossos sites. Seja por estarmos chamando bibliotecas, plugins ou outros códigos separados é importante saber que quanto mais requisições de arquivos JavaScript, mais demorado será o carregamento deles. Devo dizer também que isso está um pouco em cheque [agora que HTTP/2 está se tornando mais comum](https://www.igluonline.com/o-que-e-http-como-funciona-e-qual-a-sua-diferenca-para-http-2/), mas ainda assim é uma boa prática de se ter.

Ferramentas de graça:

* [JScompress](https://jscompress.com/)

### Utilize o async loading

Carregar os scripts de forma assíncrona vai fazer eles carregarem simultaneamente em vez de um a um. Dessa forma também vai ajudar a não bloquear o carregamento da página.

![](/images/uploads/2018/11/30/javascript-minificado-velocidade-website.png)

## 4- Utilize o lazy loading

O lazy loading - que traduzindo significa carregamento preguiçoso - é uma forma de carregar algumas partes do site depois que a parte visível para o usuário está já carregada.

A ideia é que não faz sentido carregar toda a página de uma vez só já que o usuário só vera a parte inicial logo nos primeiros momentos.

Ferramentas de Lazy Load para WordPress:

* [Lazy Load](https://wordpress.org/plugins/lazy-load/%20)
* [WP Rocket](https://wp-rocket.me/blog/lazy-load-images-wordpress-site/)

Código JavaScript para auxiliar no Lazy load:

* [CSS-Tricks](https://css-tricks.com/snippets/javascript/lazy-loading-images/)
* [Lazy Load](https://appelsiini.net/projects/lazyload/)

![](/images/uploads/2018/11/30/lazy-loading-velocidade-websites.jpg)

## 5- Utilize o cache

Existem várias formas e [tipos diferentes de cache](https://www.digitalocean.com/community/tutorials/web-caching-basics-terminology-http-headers-and-caching-strategies), mas para simplificar vamos dizer que tem dois: Cache do navegador, cache do servidor.

Ambos são super importantes e a forma de implementá-los vai variar muito de qual linguagem utiliza no Back-end, qual é servidor utilizado e por aí vai.

Alguns recursos para alguns tipos comuns:

* WordPress:
  * [W3 Total Cache](https://wordpress.org/plugins/w3-total-cache/)
  * [WP Super Cache](https://wordpress.org/plugins/wp-super-cache/)
  * [WP Rocket](https://wp-rocket.me/)
* [Apache](https://httpd.apache.org/docs/2.4/caching.html)
* [NGINX](https://www.nginx.com/blog/nginx-caching-guide/)
* [Node.js](https://medium.com/the-node-js-collection/simple-server-side-cache-for-express-js-with-node-js-45ff296ca0f0)
* [PHP](http://www.php-cache.com/en/latest/)

Algo que vale a pena mencionar aqui é que você também pode diminuir o tamanho dos arquivos enviados através da internet por meio de uma compactação. Hoje temos dois tipos de compactação muito boas e muito utilizadas:

* [GZIP](https://www.oficinadanet.com.br/artigo/programacao/como_funciona_a_compressao_gzip_deflate)
* [Brotli](https://braziljs.org/blog/compactacao-maxima-com-brotli/)

## 6- Diminua os redirecionamentos

Algo que poucas pessoas levam em consideração é quantos redirecionamentos estão acontecendo no seu website na hora que alguém clica em um link para seu domínio. Apesar dos redirecionamentos serem bem úteis e até fundamentais para muitos negócios, eles podem aumentar significamente o tempo de carregamento de uma determinada página.

O redirecionamento mais demorado e comum é o 301, que redireciona permanentemente uma página que não deseja mais ser utilizada para outra.

Outros redirecionamentos que às vezes não prestamos muita atenção são aqueles de www para sem www ou mesmo http para https.

Ferramentas gratuitas para analisar seus redirecionamentos:

* [Varvy's Redirect Mapper](https://varvy.com/tools/redirects/)
* [Redirect-checker](http://www.redirect-checker.org/)

![](/images/uploads/2018/11/30/redirect-check-speed-website.jpg)

## 7- AMP - Accelerated Mobile Pages

Talvez você já conheça o [Projeto AMP](https://www.ampproject.org/es/docs/getting_started/create), mas de qualquer maneira vou explicar brevemente. O AMP foi uma iniciativa da Google para criar um padrão de estrutura dos websites que facilitasse o carregamento em aparelhos móveis a partir de links vindos do Google.

Para um website ser validado e apresentado através da rede de distribuição otimizada da Google como AMP ele precisa cumprir uma série de requisitos e grande parte deles tem a ver com a eliminação de conteúdos e estruturas que tradicionalmente atrapalham a velocidade dos sites.

Basicamente os sites devem ser mais simples e orientar o Google através de sua estrutura o que cada parte significa.

Montar a estrutura do seu website de acordo com as especificações não é tão simples, mas traz benefícios enormes pois os sites carregam quase que isntantaneamente no mobile.

Ferramentas:

* [AMP para WordPress](https://wordpress.org/plugins/amp/)
* [Guia para AMP](https://www.ampproject.org/pt_br/)

## 8- Remova o atraso do toque no mobile

Não sei se já percebeu, mas há um atraso (delay) entre o toque na tela e a ação ser tomada em alguns sites quando se está utilizando um celular ou tablet. Esse atraso foi criado inicialmente para os aparelhos poderem reconhecer quando era apenas um toque ou um toque duplo. Contudo, hoje não há necessidade disso.

Para ajudar nesse processo, basta utilizar a seguinte tag abaixo no `<head>` do seu website:

`<meta name="viewport" content="width=device-width">`

[Uma interface que responde imediatamente passa a ideia de velocidade](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away). Então não necessariamente a percepção dessa velocidade tem a ver apenas com o tempo de carregamento da página, mas também da experiência do usuário.

## 9- PWA é uma ótima opção

Se você tem um site que é cheio de animações, funcionalidades e interações, talvez o transformar em um [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) possa ser a melhor solução para ajudar na velocidade.

PWA, assim como o AMP, se relaciona com a forma como você configura o seu website. Contudo, aqui existe uma série de especificações em JavaScript que também precisam ser seguidas para ter os benefícios.

A ideia de um PWA é que o seu site funciona como um aplicativo no celular, mas sem precisar baixá-lo na loja. Isso é bacana pois os usuários podem acessar o seu site até offline e receber notificações da mesma forma que aplicativos normais. Além disso, naturalmente, são muito mais rápidos.

Eu já utilizei essa estrutura aqui no site da Iglu por um tempo, mas o trabalho de manutenção da ferramenta acabou sendo muito maior do que eu gostaria de dedicar na época. Porém, a tecnologia está cada vez melhor e devo me aventurar em breve novamente.

## 10- Delete a maioria dos plugins

Sejam plugins do WordPress, JavaScript ou outra ferramenta que está utilizando para criar os seus sites, provavelmente eles estão atrapalhando o carregamento do seu site.

Plugins são muito úteis para habilitar funcionalidades especiais nos websites. Contudo, como eles são muito fáceis de instalar e adicionar aos sites (especialmente no WordPress), muitos projetos acabam com uma quantidade grande de plugins sem muito uso e apenas contribuindo para a lerdeza do carregamento das páginas.

Cada novo plugin significa um arquivo a mais de CSS, JS, um processamento do banco de dados e por aí vai.

Além disso, muitos plugins não foram desenvolvidos com as melhores práticas de código em mente e podem gerar não só um aumento do tempo de carregamento mas também problemas de segurança e estabilidade do seu servidor e website.

A melhor forma de encarar essa situação é rever todos os plugins que você hoje tem instalado em seu website e não só desabilitar mas remover completamente aqueles que não estão contribuindo tanto para a experiência dos seus usuários.

Uma atenção especial tem que ser dada para aqueles plugins que estão desatualizados e não funcionam bem com as novas versões das linguagens de programação que foram utilizadas para os desenvolver.

Recentemente atualizei a versão do PHP em um de meus sites da versão 5.6 para a 7.0. Como alguns plugins e temas do WordPress não haviam sido atualizados, acabaram gerando erros no meu site. A grande questão é que [a versão 7 do PHP melhorou muito a velocidade](https://www.isbrasil.info/blog/performance-e-velocidade-no-php7-vale-apena-migrar.html) e em sites e eu quero aproveitar todos possíveis benefícios que contribuem para o resultado final de performance.

Outra dica é encontrar plugins que você pode substituir por apenas um pouquinho mais de trabalho. Um exemplo é adicionar o script do Google Analytics no seu site. Com menos de 5 minutos você pode [aprender como adicionar diretamente](https://www.hostinger.com.br/tutoriais/como-adicionar-o-google-analytics-ao-wordpress/) o código no seu site diretamente no HTML.

## Conclusão

Ao longo desse longo artigo apresentei 10 formas de você otimizar a velocidade do seu website. É claro que existem muitas outras formas e cada plataforma e linguagem de programação terá sua maneira mais específica de otimização.

Se você gostou desse artigo, temos mais dois outros que aprofundam em alguns dos tópicos acima e até trazem outras informações sobre como aumentar a velocidade dos seus sites:

* [Como melhorar drasticamente a performance do seu site](https://www.igluonline.com/como-melhorar-drasticamente-a-performance-do-seu-site/)
* [4 tecnologias para aumentar a velocidade e confiança de seus sites](https://www.igluonline.com/4-tecnologias-para-aumentar-velocidade-e-confianca-de-seus-sites/)

Quero também mencionar a o website [Webdesignerdepot pela inspiração para a criação desse artigo](https://www.webdesignerdepot.com/2018/08/10-ways-to-design-your-website-for-mobile-speed/).

Se você gostou desse artigo, por favor considere a possibilidade de compartilhá-lo com outros colegas e nas redes sociais.

Divirta-se!