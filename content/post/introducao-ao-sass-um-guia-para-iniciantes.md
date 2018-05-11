+++
author = "André Lucas"
categories = ["Desenvolvimento Web"]
date = "2017-05-05T21:54:20Z"
disqus = false
hugo_image = "images/uploads/2017/05/06/css_preprocessador_sass.jpg"
tags = ["SASS", "CSS", "Stylesheet", "css preprocessors", "pré-processador de css"]
title = "Introdução ao Sass - Um guia para iniciantes"
url = "/introducao-ao-sass-um-guia-para-iniciantes/"
youtube = ""

+++
<a href="http://sass-lang.com" target="_blank" rel="noopener">Sass - Syntactically Awesome Stylesheets</a> - é uma forma diferente e sensacional de escrever o CSS. Além de trazer conceitos de linguagens de programação para a criação das folhas de estilo, o Sass simplifica bastante o processo. Se você ainda não usou algum pré-processador de CSS como Sass, LESS ou Stylus, está na hora de transformar o jeito que você escreve CSS.

Nesse artigo vou contar um pouco sobre o que é um pré-processador de CSS, como funciona o Sass e algumas dicas também de melhorar e facilitar a criação de folhas de estilo.

## Pré-processadores de CSS

Um conceito muito utilizado em programação é fazer um código ser à prova do futuro - future-proof. Isso significa que ele pode ser facilmente alterado no futuro e, por sua vez, bem documentado e organizado.

Contudo, por mais atencioso que um código de CSS seja, ele ainda será imenso, com pouca estrutura e difícil de se alterar. Além disso se um projeto for realmente complexo, vai chegar um ponto que adicionar um novo estilo sem que outros sejam muito afetados é uma tarefa complicada.

Os pré-processadores de CSS entraram então há uns anos atrás para ajudar desenvolvedores a lidar com suas folhas de estilo de forma similar a como lidam com seus outros códigos em linguagens de programações reais.

Cada pré-processador - Sass, LESS, Stylus, etc - possui uma sintaxe diferente e algumas funcionalidades específicas, mas em geral todos agem para melhor organizar, modular e simplificar a criação de CSS.

Outra característica comum entre eles é que precisam de algum tipo de compilador para transformar essa linguagem em tempo real em CSS que pode ser lido pelos navegadores. Afinal nenhum navegador vai conseguir interpretar essas linguagens estranhas.

Podemos citar algumas funcionalidades legais como a criação de variáveis ou mixins, utilizar funções, aninhamento e até mesmo omitir os caracteres "inúteis", como " ; : { } por exemplo.

## <a href="http://sass-lang.com" target="_blank" rel="noopener">Conhecendo o Sass</a>

Nesse artigo vou focar no Sass pois é um dos pré-processadores de CSS mais utilizados, tem mais de 10 anos de existência e não é muito difícil de começar a utilizá-lo.

Eu não vou cobrir aqui com extenso detalhe como instalar o Sass no seu computador pois existem muitos recursos online para esse processo e ele realmente não é muito complicado.

De qualquer maneira, para instalá-lo você vai precisar da linguagem Ruby no seu computador. Com Windows, Mac ou Linux você não terá problemas.

Inclusive, se quiser testar o Sass sem instalar pode usar um editor online como <a href="https://codepad.co/" target="_blank" rel="noopener">Codepad</a>ou <a href="https://codepen.io/" target="_blank" rel="noopener">Codepen</a>. Ambos tem suporte ao Sass e mesmo outros pré-processadores. É uma boa maneira de começar e testar para ver qual gosta mais.

Algo que é importante mencionar também é que existem duas sintaxes para Sass: Sass e SCSS. As duas são interpretadas em um mesmo código CSS, mas tem um jeito diferente de escrever. Eu vou usar nesse tutorial o SCSS, que significa Sassy CSS, mas todas as funcionalidades podem ser também aplicadas com a outra sintaxe.

A grande diferença entre Sass e SCSS é que todo código CSS pode ser interpretado sem ser alterado pelo SCSS, mas geraria erros na sintaxe Sass. A sintaxe Sass não utiliza colchetes "{ }" para delimitar as referências para estilos e faz uso de indentação no código para esse fim. <span style="font-size: 1rem;">Pessoalmente, gosto muito dessa sintaxe limpa e sem muitos elementos "inúteis" na tela, mas como é um passo ainda mais complicado acho interessante começarmos com o SCSS.</span>

## Instalação

Para instalar o Sass na sua máquina, a melhor forma é utilizar um software que irá cuidar da interpretação e geração do código em CSS em tempo real para ser enviado aos navegadores. Seria muito chato desenvolver em Sass e ter que rodar um programa manualmente toda vez que quiséssemos visualizar as modificações no browser. Então aplicativos como os listados abaixo são de muita valia nessa automatização do processo de ler o código Sass, compilar e gerar um arquivo CSS que pode ser referenciado no seu HTML. Tudo isso acontece quando você salva um arquivo e é basicamente instantâneo.

* <a href="http://scout-app.io/" target="_blank" rel="noopener">Scout</a>
* <a href="http://livereload.com/" target="_blank" rel="noopener">LiveReload</a>
* <a href="http://koala-app.com/" target="_blank" rel="noopener">Koala</a>
* <a href="http://compass.handlino.com/" target="_blank" rel="noopener">Compass.app</a>

Todos acima estão disponíveis gratuitamente.

Para usuários mais avançados, recomendo utilizar ou a <a href="http://sass-lang.com/install" target="_blank" rel="noopener">própria instalação da gema em ruby</a> ou usar <a href="https://webpack.js.org/" target="_blank" rel="noopener">construtores como Webpack</a> para automatizar com mais controle a sua aplicação.

## Variáveis

Ter variáveis em CSS é um recurso muito poderoso pois traz a capacidade de mudar várias partes de um código com apenas uma mudança. Quando definimos uma variável, guardamos nela um certo valor que pode ser um número, uma string, uma cor, uma lista ou mesmo null.

Para declarar uma variável no Sass você utiliza o símbolo do dólar `$` seguido pelo nome da variável. Aí continuamos com o padrão do CSS com dois pontos e o valor atribuído a ela. Para finalizar um ponto e vírgula.

`$cor: #333333;`

Cor é um excelente exemplo pois é algo que podemos, por exemplo, mudar a cor principal de um website com apenas a troca da cor atribuída à variável, mesmo que essa cor esteja presente em 500 lugarem no nosso template.

Veja esse exemplo de como usar uma variável:

    // Uma boa prática é definir as variáveis no topo de seu projeto
    
    $azul: #3498db;
    $vermelho: #e74c3c;
    $planoDeFundo: #34495e;
     
    // Em seguida aplicamos as variáveis
    
    body {
      background-color: $planoDeFundo;
    }
     
    h1 {
      color: $azul;
    }
     
    p {
      color: $vermelho;
    }
    

Isso então seria compilado no seguinte arquivo de CSS:

    body {
      background-color: #34495e;
    }
     
    h1 {
      color: #3498db;
    }
     
    p {
      color: #e74c3c;
    }
    

Essa é só a ponta do iceberg com relação às variáveis, então sugiro depois dar uma olhada na documentação oficial para vários outros recursos avançados.

* **<a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_" target="_blank" rel="noopener">Documentação oficial para variáveis no Sass</a>**

## Aninhar

O Sass tem uma funcionalidade bem legal que é de aninhar as regras de CSS para que você não precise ficar se repetindo. O aninhamento é uma excelente forma de organizar melhor o código e facilmente entender quais regras se aplicam a que parte do código. Além disso, um resultado interessante disso é que você tem menos probabilidade de ficar se repetindo e criando regras conflitantes. O exemplo tradicional para essa funcionalidade é a da lista:

    
    ul {
      list-style: none;
     
      li {
        padding: 10px;
        display: inline-block;
     
        a {
          text-decoration: none;
          font-size: 16px;
          color: #333;
        }
      }
    }
    

Uma recomendação geral é não avançar para mais de quatro níveis senão o código pode ficar um pouco confuso.

* **<a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_rules" target="_blank" rel="noopener">Documentação oficial para aninhamento no Sass</a>**

## Extenção e Herança

A herança - Inheritance - é possivelmente uma das funcionalidades mais usadas no Sass e o uso da extensão - extend - possibilita o compartilhamento de blocos de propriedades de CSS. Esse processo é interessante para seguir a máxima do DRY - Don't Repeat Yourself ou Não Se Repita.

Extensões devem ser utilizadas quando precisamos de estilos parecidos mas que ainda podem se diferenciar em alguns detalhes. Você usa a diretiva `@extend` para puxar as definições de outra declaração. Por exemplo, criando dois botões, um primário e outro secundário.

    
    $azul: #3498db;
    $vermelho: #e74c3c;
    $branco: #fff;
     
    .btn {
      display: inline-block;
      padding: 6px 12px;
      font-size: 14px;
      text-align: center;
      border-radius: 4px;
      color: $branco;
    }
     
    .btn-primary {
      @extend .btn;
      background-color: $azul;
    }
     
    .btn-secondary {
      @extend .btn;
      background-color: $vermelho;
    }
    

Esse código será compilado em:

    
    .btn, .btn-primary, .btn-secondary {
      display: inline-block;
      padding: 6px 12px;
      font-size: 14px;
      text-align: center;
      border-radius: 4px;
      color: #fff;
    }
     
    .btn-primary {
      background-color: #3498db;
    }
     
    .btn-secondary {
      background-color: #e74c3c;
    }
    

Essa funcionalidade é sensacional pois é muito simples de ser usada e tem imensos efeitos positivos no código.

* **<a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend" target="_blank" rel="noopener">Documentação oficial para o extend no Sass</a>**

## Mixins

Se você é familiarizado com as funções em linguagens de programação, os Mixins são basicamente funções para CSS. Eles possibilitam a reutilização de blocos de declarações passando algumas variáveis.

No Sass você utiliza a diretiva `@mixin` para definir os mixins e `@include` para as utilizar. Você pode usar, por exemplo para declarações dependentes ainda de códigos específicos para vários navegadores. Vejamos para acriação de `border-radius` em utilizar em um botão.

    // Primeiro declaramos o mixin
    
    @mixin border-radius($radius) {
      -webkit-border-radius: $radius;
         -moz-border-radius: $radius;
          -ms-border-radius: $radius;
              border-radius: $radius;
    }
     
    // Depois é só passar a variável
    
    .btn {
      @include border-radius(4px);
    }
    

E será compilado em:

    .btn {
      -webkit-border-radius: 4px;
      -moz-border-radius: 4px;
      -ms-border-radius: 4px;
      border-radius: 4px;
    }
    

Essa funcionalidade brilha com a necessidade dos prefíxos de nevegadores, mas pode ser utilizada de várias outras formas.

* **<a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins" target="_blank" rel="noopener">Definição oficial para mixins no Sass</a>**

## Conclusão

Sass é uma ferramenta muito bacana para transformar a forma de se escrever o CSS em suas aplicações e websites. Existem diversas outras funcionalidades interessantes e formas diferentes de usar ferramentas já presentes no CSS, como `import`.

<a href="https://www.igluonline.com/como-se-tornar-um-desenvolvedor-web-em-2018/" target="_blank" rel="noopener">Esse artigo é parte do caminho de Front-end, presente em nosso super artigo de como se tornar um desenvolvedor web.</a>

Se você gostou, não deixe de deixar uma curtida e compartilhar com seus amigos :)

Divirta-se!