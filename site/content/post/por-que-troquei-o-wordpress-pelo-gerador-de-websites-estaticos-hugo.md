+++
author = "André Lucas"
categories = ["WordPress", "Web Development"]
date = "2017-04-29T13:44:11+00:00"
hugo_image = "images/uploads/2017/04/29/gerador_website_estatico_hugo.jpg"
tags = ["hugo", "wordpress", "web development", "gerador de sites estáticos"]
title = "Por que troquei o WordPress pelo gerador de websites estáticos Hugo"
url = "/por-que-troquei-o-wordpress-pelo-gerador-de-websites-estaticos-hugo/"
youtube = ""

+++


Já há um bom tempo que estou acompanhando de longe o desenvolvimento da nova geração de geradores de websites estáticos, como o [Hugo](https://gohugo.io/), [Jenkins ](https://jenkins.io/)ou [Middlemen](https://middlemanapp.com/). Mas até essa última semana eu não tinha considerado de fato tirar o tempo para aprender e aplicar em algum projeto.

Eu estava passeando por alguns blogs que gosto e vi que o [Tableless estava de cara nova e aderiu ao gerador de sites estáticos Hugo](https://tableless.com.br/site-tableless-estatico/). Tive vontade então de me aprofundar e agora esse site aqui da Iglu também é estático e utiliza o Hugo.

Mesmo que em alguns pontos minhas considerações são parecidas com as explicadas no artigo da Tableless, quero reforçar a transição para outros profissionais que tenham sites e não estão completamente satisfeitos com seus WordPress.

## Por que mudar?

Sempre fui fã do WordPress e ainda adoro a plataforma. Utilizo ele não só para grande parte dos meus clientes quanto para muitos projetos pessoais. Contudo, recente comecei a ter que pagar pelo excesso de recursos computacionais uma vez que o blog da Iglu está aumentando a cada semana o número de visitas.

Além disso algo que me incomoda tremendamente no WordPress é sua velocidade.  Por mais que você otimize as imagens, configure bem seu servidor, reduza o número de plugins, utilize um sistema de cache, minifique e junte os arquivos de JS e CSS, utilize um CDN e faça outras dezenas de configurações menores, ele ainda não é rápido o suficiente.

Eu entendo que existem websites baseados em WordPress que são rápidos, mas em geral eles estão hospedados em servidores potentes e não utilizam muitos plugins ou temas complexos.

Para a maior parte dos sites é possível conseguir bons tempos de carregamento e otimização, mas eu queria ir além. Quero ficar com aquele tempo de [carregamento abaixo de 2 ou 3 segundos que o Google sempre aponta como ideal](http://www.profissionaldeecommerce.com.br/2-segundos-de-carregamento-dos-sites/).

## Gerador de websites estáticos

Se a raiz do problema é a quantidade de processamento necessário para gerar uma página dinâmica no WordPress pela quantidade de recursos e possibilidade, olhar para o início do desenvolvimento web pareceu uma ideia bacana.

Em websites comuns atualmente fazendo uso de vários arquivos em php - ou outra linguagem de programação - para criar uma página baseada em vários fatores. Esses fatores determinam o que aparece na página, proporcionando uma experiência única para cada visitante em cada página.

Um site estático, então, é aquele que é composto apenas de uma página .html e seus recursos adicionais de JavaScript, imagens e CSS. Essas páginas então não precisam de nenhum trabalho de conexão com banco de dados ou processamento de alguma funcionalidade. A página está pronta já para ser enviada para o navegador do visitante do site.

Um problema tradicional dessa abordagem é que para criar um novo artigo ou uma nova página teríamos que criar o código inteiro de cada nova página, o que é um tanto quanto complicado - especialmente para quem não sabe programar.

Aí então entram os geradores estáticos de websites. Seu código é muito similar ao de um WordPress ou outra aplicação quando estamos desenvolvendo, mas ao enviar para o servidor ele simula a abertura de todas as páginas do site e as transforma em páginas estáticas.

## Limitações

Naturalmente, se pouca gente ainda está usando geradores de sites estáticos é porque tem alguma limitação ou complicação. Tem mesmo.

Em primeiro lugar, existe uma certa dificuldade em achar documentações, templates ou outros recursos para esse tipo de framework. A comunidade ainda é pequena e grandes empresas não estão utilizando o sistema ainda, o que faz com que não tenha ainda muita exploração, bibliotecas e outros códigos já prontos para algumas funcionalidades.

Um exemplo bobo foi criar uma paginação para os artigos aqui do blog. Apesar de haver funcionalidades de paginação no próprio sistema do Hugo, ele era muito básico e não mostrava do jeito que eu queria. Se fosse em php ou node.js eu conseguiria rapidamente um exemplo de código online e utilizaria no meu sistema. No caso aqui eu tive que criar eu mesmo por falta de recursos disponíveis.

Mais do que isso, se um site é estático não é possível ter elementos dinâmicos nele. Duh!

Se você quer um contador de visualizações nas suas páginas, não é possível pois não há banco de dados para gravar as visualizações. Se você quer criar uma aplicação que tenha login de usuários, também não é possível. Ajax? Nem pense.

Até algo simples, como um sistema de busca no site, é complicado. Eu estou usando a busca customizada do Google aqui no site.

Geradores assim não servem para websites mais complexos.

Mesmo para blogs, se você quiser criar um novo artigo ou página terá que ou saber escrever em Markdown ou buscar sistemas externos para fazer esse gerenciamento. Eu estou utilizando o [Forestry ](https://forestry.io/)para gerenciar esse website.

## [Hugo](https://gohugo.io/) + [Netlify](https://www.netlify.com/)

Mesmo com todas essas limitações eu ainda optei pela transição. Como somente eu crio artigos aqui no blog e, mais importante, esse site é um blog, vale muito a pena pelo ganho de velocidade, custo e simplicidade.

O [Hugo ](https://gohugo.io/)é um sistema sensacional. Além de ter vários recursos e uma configuração simples, ele é extremamente rápido. No artigo mencionado do Tableless, o Diego menciona várias outras vantagens então recomendo dar uma passada lá para mais informações técnicas sobre como o sistema fucniona.

Em cerca de 25 horas eu consegui pegar um template wordpress, transformá-lo em um template Hugo e fazer uma boa parte das funcionalidades dele ficarem legais aqui.

O mais legal é que eu [hospedei ele no Netlify](https://www.netlify.com/), que é o sistema mais fácil e poderoso que já utilizei nos últimos tempos. A integração contínua faz com que subir meu código para o Github já inicie o processo de atualização do site. Ele possui uma ótima CDN para distribuição dos meus recursos e ainda por cima tem um processo de adição de https com um clique. UM CLIQUE.

Mas o melhor mesmo de tudo isso sobre o Netlify é que é totalmente gratuito. Eu estou com um site super rápido, sendo distribuido via https com CDN sem pagar um centavo por isso.

A junção do Hugo com Netlify foi o que me conquistou.

## Conclusão

Como tudo nessa vida de produção de conteúdos digitais, agora o momento é de testar e ver se realmente vai valer a pena. Eu espero que sim pois nunca tive um site tão bonito sendo carregado de forma tão rápida antes.

Espero que gostem também e se quiserem alguma ajuda com suas próprias implementações de geradores de websites estáticos, como  o Hugo, é só deixar aqui um comentário.

Divirta-se!