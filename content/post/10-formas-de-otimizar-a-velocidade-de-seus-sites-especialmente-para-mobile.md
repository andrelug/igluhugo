+++
author = "André Lucas"
categories = []
date = "2018-11-30T19:07:09-02:00"
disqus = false
draft = true
hugo_image = ""
tags = []
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

### Concatene seus arquivos

É comum termos mais do que um arquivo JavaScript em nossos sites. Seja por estarmos chamando bibliotecas, plugins ou outros códigos separados é importante saber que quanto mais requisições de arquivos JavaScript, mais demorado será o carregamento deles. Devo dizer também que isso está um pouco em cheque [agora que HTTP/2 está se tornando mais comum](https://www.igluonline.com/o-que-e-http-como-funciona-e-qual-a-sua-diferenca-para-http-2/), mas ainda assim é uma boa prática de se ter.

Put JavaScript at the bottom of files: Browsers won’t load other elements while JavaScript is loading. Solve this problem by moving JS scripts to the bottom of the page when you can. That way HTML content renders first and you can use a visual cue to let users know more data is coming if necessary.

Optimize and minify: Smaller files load faster. Don’t forget this applies to code as well.

Use asynchronous JavaScript: Opt for asynchronous JS loading until after the first render for all non-critical elements. This allows scripts to load at the same time rather than one-by-one.