+++
author = "André Lucas"
categories = ["Desenvolvimento Web"]
date = "2018-02-19T01:07:50-03:00"
disqus = true
hugo_image = "images/uploads/2018/02/19/o_que_e_favicon.jpeg"
tags = ["favicon", "html"]
title = "O que é e para que serve o favicon?"
url = "/o-que-e-e-para-que-serve-o-favicon/"
youtube = ""

+++
Tanto como desenvolvedor quanto web designer, a pergunta 'o que é e para que serve o favicon' acaba aparecendo. Seja de um cliente ou um parceiro de trabalho, o sentimento de que esse pequeno ícone não importa muito parece ser generalizado.

Não sei quantas vezes tive que pegar um pedaço do logotipo de um cliente e manualmente escolher uma parte para se tornar o pequeno ícone de 16 pixels de largura. Isso tudo porque em geral não é um elemento muito pensado ou produzido por quem desenvolve uma marca.

Contudo, se você está realmente sério sobre a sua presença digital então vai querer um bom. Nesse artigo vou explicar um pouco sobre o que é um favicon e também para que ele serve, tanto do ponto de vista mais técnico quanto por um lado mais de marketing.

Se você é um web designer ou desenvolvedor, então já deve estar familiarizado(a) com os favicons. Até mesmo como criá-los, quem sabe. Contudo, a grande pergunta que temos que nos fazer é _por que_ devemos nos importar com eles e como os melhor explorar.

## O que é um favicon?

Favicons são pequenos quadrados de, em geral, 16x16 pixels que são usados nas abas dos navegadores para representar qual website está aberto. São os ícones que ficam ao lado esquerdo do título do website. É bem provável que você já passou o olho por eles inúmeras vezes mesmo sem saber o que são. Essa imagem mostra exatamente o que é um favicon.

![](images/uploads/2018/02/19/o_que_sao_favicons.jpg)

O significado de **Favicon** veio de uma mistura de duas outras palavras: "favorie" e "icon" - ícone favorito traduzindo do Inglês. Se deu esse nome por que adicionamos as páginas que gostamos na ferramenta Favoritos e lá os Ícones ficam mais em destaque.

## Para que serve o favicon?

Para explicar essa parte é interessante lembrar um pouco da história da internet. Antes mesmo de termos serviços como Google Analytics para medir o tráfego dos websites, os favicons eram utilizados para estimar a quantidade de visitantes pelo número deles que adicionavam o site aos seus favoritos.

Hoje, no entanto, a principal razão tem a ver com a experiência do usuário. Favicons são usados em todos os navegadores atuais, seja no desktop, mobile, área de favoritos, barra do endereço do site e em outros lugares.

Um website hoje sem um favicon mostrará apenas um símbolo genérico de página em todos os pontos de interação mencionados entre suas páginas e seus usuários. Então se você, como eu, tem um desejo de melhorar a experiência de seus usuários, então é melhor prestar atenção nos favicons.

Algo que ajuda, pelo menos para mim, é entender que esse pequeno ícone pode ajudar meu usuário na identificação do meu website dentre as prováveis inúmeras abas abertas. Mais do que isso, é um constante lembrete daquilo que mais queremos que seja gravado de nossa identidade visual.

O trabalho de branding online não é algo simples e é um trabalho muito pequeno para criar um elemento tão presente no contato da marca com seu consumidor quanto o favicon.

## Como criar um favicon

A criação de um favicon para seu website pode ser algo bem simples. Não há nem necessidade de contratar um designer ou desenvolvedor (caso você não seja um dos dois). Naturalmente, se você puder ter a ajuda de um profissional é muito melhor, mas é algo quero enfatizar que é um processo bastante simples e direto e que qualquer pessoa pode fazer em poucos minutos.

Vou listar alguns websites abaixo que possibilitam a criação de favicons - geradores de favicon - apenas carregando uma imagem, como o logotipo da sua empresa, projeto ou marca pessoal. Então se quiser criar um favicon, basta subir sua imagem para algum desses sites abaixo e em seguida baixe o arquivo do favicon. Esse arquivo ou terá a terminação .**png** ou .**ico**.

Alguns geradores de favicon interessantes:

* [Favicon CC](http://www.favicon.cc/)
* [Gen Favicon](http://www.genfavicon.com/pt/)
* [Favicon.pro](http://www.favicon.pro/pt/)
* [Favicon Generator](http://www.favicongenerator.com/)
* [Chami Favicon Service](http://www.chami.com/html-kit/services/favicon/)
* [Favicon Generator ORG](http://favicon-generator.org/)
* [Degraeve Favicon](http://www.degraeve.com/favicon/)
* [Favicon-generator.org](https://www.favicon-generator.org/)

Os webistes acima variam em alguns quesitos que podem ajudar em alguns casos específicos, como por exemplo o tamanho ou tipo do arquivo. Se você está buscando o melhor formato, com a melhor compatibilidade e tamanho, sugiro uma imagem de 16x16 pixels no formato **ico**.

Se quiser uma inspiração, dá uma olhada [nesse website que tem alguns interessantes](http://thefavicongallery.com/).

Uma dica interessante aqui é usar a parte do seu logotipo ou marca que mais quer chamar a atenção. No caso da Google, por exemplo, é o primeiro 'G'. No caso da Iglu, é nosso pinguim azul. Busque aquilo que deseja ser mais reconhecido.

## Como adicionar o favicon no websites

A partir do momento que já está com seu arquivo do favicon, basta instalá-lo no seu website. Para isso, é necessário ter acesso aos arquivos HTML do seu site ou área administrativa, no caso do WordPress ou outros gerenciadores de conteúdo.

### Primeiro passo

É necessário subir a imagem para seu servidor e/ou website. Esse passo depende amplamente de qual plataforma de desenvolvimento está usando.

No caso do WordPress basta subir na área de mídias no painel admistrativo. Esse método também servirá para grante parte dos CMS como Joomla ou Drupal.

Em caso de um website estático ou sem um gestor de conteúdo, é necessário subir para a pasta de imagens ou via FTP ou SSH.

### Passo 2

Agora precisamos adiconar uma linha ao HTML das páginas que deseja mostrar o favicon. Muitas vezes, em gerenciadores de conteúdo como WordPress ou mesmo websites criados customizadamente, existe um arquivo sepadaro com os conteúdos que residem numa área do HTML chamada **<HEAD>**. Procure por `header.php` por exemplo. Se houver apenas a `index.php` vá nela mesmo.

Independentemente, o código abaixo deverá ser introduzido entre duas linhas:

    <head>

e

    </head>

Segue o código:

    <link rel="shortcut icon" type="image/x-icon" href="[url do favicon]">

**Lembre-se de substituir** `\*\*\\\[url do favicon\\\]\*\*` **pelo endereço do arquivo do favicon que subiu e de salvar quando terminar.**

Terminando essas etapas você deverá ter o favicon já sendo exibido quando abrir o seu website.

Uma dica interessante é que se você adicionar o arquivo **favicon.ico** e na raiz do seu projeto e ele tiver 16x16 pixels, muitos navegadores já entenderão que ele é o ícone do seu site e nem haverá necessidade de adicionar o código do 'passo 2' no seu HTML. Contudo, é sempre bom executar essa segunda etapa em caso de algum problema.

## Como criar um ícone favicon no Photoshop

Como aqui na Iglu gostamos muito do Photoshop, não poderíamos deixar de falar nele. Mesmo sendo uma ferramenta complexa e talvez "de mais" para um trabalho como a criação de um favicon, eu acho que vale a pena dar uma passada pela possibilidade.

Se você for um(a) designer, então é capaz inclusive se ser mais veloz com o Photoshop do que com qualquer um dos geradores de favicon listados acima.

Os favicons podem ser criados tanto em PNG quanto no formato ICO, contudo o Photoshop não suporta nativamente o formato ICO. Então se quiser utilizar esse formato basta [baixar esse plugin.](http://www.telegraphics.com.au/sw/)

Depois de instalado, é só procurar pelo formato ICO no momento de escolher os formatos na hora de salvar uma imagem.

## Usos inesperados

Algo que acho sempre interessante de ver é como alguns websites fazem uso do favicon para chamar a atenção dos visitantes.

Hoje sabemos que muitas pessoas deixam abertas várias abas nos navegadores. Às vezes passam dias abertas e os desenvolvedores acharam formas interessantes de trazer a atenção de volta para seus websites.

Um exemplo mais básico é a mudança do ícone quando há alguma notificação. O Gmail, por exemplo, utilizava o favicon com a contagem dos e-mails não lidos. Alguns serviços de mensagens também fazem uso dessa estratégia.

Contudo, recentemente vi uma estratégia em um E-commerce que aproveitava o momento que você não estava com a aba dele aberta para mudar o ícone e também o título na esperança de chamar a atenção para que você voltasse ao website.

Esse tipo de estratégia pode ou não funcionar no seu mercado, mas é legal estar atento para as possiblidades criativas do uso do favicon.

**Bônus:** Um uso interessante do título do website para [chamar atenção do usuário pode ser esse](https://dontclosethistab.com).

## Daqui pra frente

Favicons são detalhes que em geral não prestamos tanta atenção, mas na verdade podem ser bastante significantes para uma presença consistente de uma marca. Além de seu histórico interessante, eles possuem uma facilidade de implementação que poucas ferramentas hoje possuem em relação ao impacto que podem gerar.

Então na próxima vez que alguém te perguntar o que é ou para que serve o favicon, você já tem a resposta e também pode compartilhar esse artigo para mais informações. Esse artigo foi baseado num [similar do WWD](https://www.webdesignerdepot.com/2012/11/whats-the-point-of-favicons/).

Você já conseguiu fazer o seu favicon? Compartilhe nos comentários ele e vamos continuar a conversa por lá.

Divirta-se!