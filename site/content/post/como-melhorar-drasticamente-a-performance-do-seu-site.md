+++
author = "André Lucas"
categories = ["Desenvolvimento Web"]
date = "2017-05-15T00:53:15+00:00"
hugo_image = "images/uploads/2017/05/16/traffic-car-vehicle-black.jpg"
tags = ["websites", "velocidade", "performance"]
title = "Como melhorar drasticamente a performance do seu site"
url = "/como-melhorar-drasticamente-a-performance-do-seu-site/"
youtube = ""

+++


A velocidade e performance de um website é um dos fatores mais importantes para o seu sucesso. Isso todos nós já sabemos. O problema é que a maior parte dos recursos e sistemas disponíveis gratuitamente hoje são lentos e apenas alguns possuem diretrizes claras quanto às melhores práticas para manter uma velocidade aceitável.

Existem centenas de maneira diferentes para aumentar a velocidade de sites e muitas delas são específicas para um tipo de plataforma (como WordPress). Nesse primeiro artigo vou passar pelas dicas gerais de como melhorar a performance e posteriormente vamos ter artigos específicos para cada uma das mais importantes plataformas.

**<a target="_blank" rel="noopener" href="https://www.igluonline.com/por-que-troquei-o-wordpress-pelo-gerador-de-websites-estaticos-hugo/">Recentemente eu até troquei o meu website para a plataforma Hugo e uma das razões foi a velocidade.</a>**

No final das contas ninguém gosta de uma página na web que demora a carregar, então sem mais delongas vamos às dicas e ações que você pode fazer para melhorar a velocidade do seu site.

<a target="_blank" rel="noopener" href="https://www.igluonline.com/4-tecnologias-para-aumentar-velocidade-e-confianca-de-seus-sites/">Temos esse outro artigo também relacionado com a velocidade dos sites que é legal conferir.</a>

## Faça seu site ficar mais leve

Por mais que as conexões de internet estejam cada vez melhores, estamos também utilizando mais recursos em nosso sites. É algo muito fácil empolgar e começar a adicionar imagens de alta resolução, filmes em HD, funcionalidades legais e animações nas páginas.

Contudo quanto mais adicionamos, maior também o tamanho da página que é enviada ao navegador.

Reduzir o tamanho e a quantidade do que enviamos para ser carregado pelos visitantes é um dos passos mais importantes e, frequentemente, mais difíceis para melhorar a performance de um site.

Algo que apenas recentemente fui me dar conta é o tamanho de <a target="_blank" rel="noopener" href="https://www.igluonline.com/21-bibliotecas-javascript-e-css-que-voce-precisa-conhecer/">frameworks e bibliotecas JavaScript e CSS</a>. **Não deixe que se torne um hábito adicionar jQuery, Bootstrap e outros em seus projetos.** Acaba que usamos alguns desses recursos apenas por causa de uma ou outra funcionalidade que podem ser reproduzidas de outra maneira mais fácil e menor.

Me lembro há uns anos atrás quando criei um site com uns 15 diferentes plugins jQuery. Não é atoa que ele estava lento. Ferramentas assim oferecem uma facilidade na hora de programar, mas não são realmente necessários. Quanto mais você se desenvolver como programador, menos plugins e bibliotecas usará. No fundo é apenas importante ter em mente que esses arquivos pesam no site. Somente um não é muito, mas junta 15 e provavelmente terá dificuldades de manter o tempo de carregamento nos níveis indicados.

Se você está criando um site pessoal ou porfólio, pode ser uma boa oportunidade para tentar criá-lo do zero. No final das contas não é tão complicado e com certeza fará seu conhecimento de JavaScript, CSS e HTML aumentar consideravelmente.

### Use uma abordagem Mobile-first

Em um mundo onde os celulares e tablets se tornaram os principais aparelhos para usar a internet, é preciso repensar não só o design mas também as estratégias de desenvolvimento dos websites. Utilizando uma abordagem mobile-first priorizamos aquilo que é apresentado para os usuários nesses aparelhos e apenas puxamos a quantidade de informações necessárias.

Isso faz com que o foco seja a experiência do usuário e como ele consumirá a informação da forma mais direta e fácil possível. Apesar do design ter um papel fundamental nesse processo, o desenvolvimento das animações, funcionalidades, comunicação com o servidor e uso da memória no código Front-end são questões importantíssimas para se levar em consideração. Ao utilizar media queries para os diferentes tipos de telas podemos também restringir o que é carregado para cada tamanho e deixar mais leve para aparelhos menores e com menos capacidade de processamento.

Algo que você talvez não saiba é que **o Google ranqueia melhor websites que são responsivos e tenham uma velocidade maior.** Mais um motivo para pensar em otimizar nossos websites.

### Compacte os arquivos de desenvolvimento

Compactar os arquivos é algo bem direto e fácil de se fazer, mas frequentemente vejo websites que não adotam esse processo. Todos os arquivos de CSS e JavaScript podem ser facilmente minificados com o uso de vários recursos disponíveis online. Ao compactá-los são removidos todos os espaços e ‘enters’ do arquivo e, normalmente, transforma os nomes de variáveis para novos nomes com poucos caracteres. Exemplo:

```

<span class="hljs-keyword">var</span> funcionalidadeSomaDeParametros = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(parametro1, parametro2)</span> {</span>

<span class="hljs-keyword">return</span> parametro1 + parametro2;

}

```

passa a ser

```

<span class="hljs-keyword">var</span> a=<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(b,c)</span>{</span><span class="hljs-keyword">return</span> b+c}

```

É importante mencionar que existem serviços que criam esses arquivos automaticamente no momento que você for enviar seu código para ‘production’. Quando está em desenvolvimento sugiro deixar seu código o mais legível e organizado possível. Atualmente o melhor jeito de organizar código é em dezenas de diferentes arquivos separados por tipo de funcionalidade, ação ou ambiente. No momento de subir o código, bundlers podem minificar, compactar, juntar e até mesmo compilar ( se quiser utilizar JavaScript ES6 e <a target="_blank" rel="noopener" href="https://www.igluonline.com/introducao-ao-sass-um-guia-para-iniciantes/">Sass </a>por exemplo ) seu código.

Para brincar online com o resultado de um processo de minificação sugiro essas ferramentas:

* <a target="_blank" rel="noopener" href="https://javascript-minifier.com/">JavaScript Minifier</a>

* <a target="_blank" rel="noopener" href="https://cssminifier.com/">CSS Minifier</a>

Contudo, hoje <a target="_blank" rel="noopener" href="https://webpack.js.org/">a ferramenta ideal para a criação de websites é o Webpack</a>.

### Otimize suas imagens

Uma vez que as imagens hoje representam grande parte dos websites, existem múltiplas maneiras de fazer com que elas sejam otimizadas para reduzir o peso dos websites.

Para começar, é interessante passar todas as imagens por algum serviço de compressão. **Formatos como JPG, PNG e GIF podem ter seus tamanhos reduzidos consideravelmente com algoritmos de <a target="_blank" rel="noopener" href="https://pt.wikipedia.org/wiki/Compress%C3%A3o_com_perda_de_dados" class="">compressão com perda de dados ou irreversíveis</a> (lossy compression)**. Naturalmente há uma pequena perda de qualidade, mas dependendo do nível de compressão utilizado isso é imperceptível. Uma ferramenta online legal para testar a compressão de imagens é o <a target="_blank" rel="noopener" href="http://optimizilla.com/">Optimizilla</a>.

Uma outra maneira interessante de melhorar a qualidade das imagens é fazer uso de SVGs (Scalable Vector Graphics) para ícones e até algumas imagens que aparecem frequentemente no site. As vantagens de ter elementos em SVG é que eles são menores em kbs do que PNGs e não dependem de uma resolução. Isto é, em qualquer tamanho e resolução de tela eles serão perfeitos.

Algo que é muito bom também para elementos que se repetem no site é fazer uso de uma folha de sprites. Mais pra frente nesse artigo vou explicar o por quê dessa possibilidade ser interessante para a carga no servidor. Basicamente, aqui você junta todas as pequenas imagens e detalhes do site em apenas uma imagem e na hora de mostrar cada elemento individual faz-se uso do CSS para apenas mostrar um pedaço dessa folha de sprites. Os sprites são muito usados também para animações, mas atualmente existem formas mais fáceis e interessantes para isso.

## Melhore a performance do front-end e back-end

O tópico de performance pode ser estendido para inúmeras boas práticas na hora de criar o código que roda tanto na parte de trás quanto da frente - back-end e front-end respectivamente. Aqui nesse artigo vou passar por alto em algumas partes mas recomendo fortemente se aprofundar para realmente aprender quais são as melhoras necessárias de acordo com os projetos que você desenvolve.

### Faça o uso eficiente de Funções, Métodos e Classes

Se o seu website possui muito processamento no back-end então otimize seu código no máximo. A eficiência do seu código depende bastante de como você o estrutura. Uma boa dica é fazer uso de metodologias como DRY (Don’t Repeat Yourself ou Não Se Repita) para que cada vez mais o código fique enxuto e direto.

**Um bom uso de funções, métodos e classes tanto facilita o desenvolvimento quanto produz resultados melhores**. Boas práticas e recomendações existem para qualquer linguagem de programação e até mesmo para diferentes frameworks que possam ser utilizados. Vale muito a pena seguir as seguir pois não foram criadas atoa.

### Otimize a busca de informações nos bancos de dados

Um erro comum que muitos desenvolvedores cometem é ir pelo caminho mais fácil na criação de projetos que dependem de muitos dados. Um exemplo é fazer um loop em um uma única chamada SELECT utilizando condicionais dentro do próprio código back-end no caso de um banco de dados sequencial (SQL). O correto seria colocar o trabalho pesado diretamente na própria chamada do banco de dados pois a performance dos bancos SQL são muito mais rápidas do que ficar chamando várias vezes as queries do código back-end. Podemos mencionar também que isso deixa o código bem mais limpo e fácil de se manter.

Já para bancos não sequenciais (NoSQL), um erro comum é puxar um objeto inteiro e depois utilizar `for loops` e declarações `If` para filtrar as informações coletadas. Assim como no caso acima, os bancos de dados conseguem fazer isso com muito mais velocidade e performance. Isso inclui também o uso do `populate` ao invés de fazer duas requisições em coleções diferentes. Uma boa dica para quem está começando com bancos não sequenciais e não sabe que é possível fazer o equivalente ao `JOIN` do SQL.

### Utilize as versões mais novas das linguagens e frameworks

Em geral quando um framework ou uma linguagem de programação são atualizados também a performance melhora. Um exemplo rápido pode ser a atualização do PHP - que no momento da criação desse artigo está na versão 7 - melhorando a performante em duas vezes no back-end! Pensa nisso. Somente atualizando e fazendo uso das novas funcionalidades você terá uma aplicação duas vezes mais rápida.

Podemos mencionar também as atualizações do JavaScript para ES6. Apesar de não exatamente ter questões relacionadas com a performance tão fortemente quanto no PHP 7, as novas versões do JavaScript possibilitam uma organização muito maior do código e, finalmente, o uso de classes de uma maneira mais tradicional. Tudo isso contribui para o DRY e, consequentemente, para a melhora da velocidade do código.

### Use o JavaScript Assíncrono

O termo ‘lazy-loading’ se relaciona com a possibilidade de carregar incrementalmente os recursos como imagens e arquivos, blocos em blocos. Os usuários então visualizam as imagens e recursos enquanto o website ainda está carregando assincronamente, e daí vem o termo. Contudo existe muito mais do que isso nesse ambiente assíncrono.

Um exemplo claro é a timeline do Facebook. Ao abrir o site você primeiro vê apenas umas duas atualizações dos seus amigos e rapidamente o site já puxa mais atualizações. Isso faz com que você consiga carregar e já usar o site muito rapidamente enquanto outras partes ainda estão sendo carregadas por trás dos panos.

Fazer a primeira chamada do site ser rápida melhora muito a experiência e a noção de velocidade dos websites. Assim que a primeira parte for carregada pode-se então utilizar AJAX ou outras formas de conexão com o servidor para puxar mais dados, imagens ou recursos.

Dependendo da aplicação você pode inicialmente carregar apenas a carcaça do site e logo em seguida chamar os dados relevantes.

### Saiba aonde colocar CSS e JS

Os estilos devem ser adicionados dentro da tag  do seu documento HTML. Isso elimina a necessidade de navegador esperar que o arquivo carregue posteriormente para estilizar e pintar o DOM (Document Object Model). Também, isso remove aquela pequena demora que acontece quando se abre uma nova página.

Ao contrário do CSS, os arquivos JS devem ser colocados no final da tag . JavaScript não afeta a renderização do site ou necessita que o DOM seja carregado antes, então adicionar esses arquivo no final fará com que o usuário já tenha uma experiência do website antes mesmo de ter tudo carregado. Vale lembrar que se o seu JS manipula o DOM, pode ser uma boa ideia adicionar algum tipo de estilo para que as páginas não fiquem estranhas antes de tudo estar carregado.

## Melhore o servidor

Pagar R$ 5,00 por mês em um servidor é algo maravilhoso, mas vem com seu lado ruim. O servidor é uma máquina e a fundação de qualquer aplicação. Se o seu website está em uma fundação barata e ruim provavelmente não conseguirá proporcionar uma boa performance.

<a target="_blank" rel="noopener" href="https://www.igluonline.com/ferramentas-para-o-sucesso-seu-blog/">Você pode conferir algumas de minhas recomendações de servidores na página de ferramentas aqui na Iglu.</a>

<a target="_blank" rel="noopener" href="https://www.igluonline.com/nao-vale-pena-utilizar-servicos-brasileiros-de-hospedagem-de-sites/">Também comento sobre o por quê de não contratar serviços de hospedagem brasileiros nesse outro artigo.</a>

### Requisições ao servidor

Para criar websites que performam bem é preciso entender como os navegadores lidam com HTML, JavaScrip e CSS e, assim, garantir que o código que você escreve - juntamente com as bibliotecas e frameworks associados - rodem da maneira mais eficiente. Para isso podemos citar:

1. **Diminuir o número de requisições: **<span>Cada vez que você visita um site, o navegador envia um pedido ao servidor para pegar todos os arquivos e recursos. Cada requisição leva alguns </span>milissegundos<span>&nbsp;(depende do tamanho do arquivo) e reduzir a quantidade de requisições ajuda bastante no impacto final de velocidade do site. É por esse motivo que é interessante juntar vários arquivos CSS ou JS em apenas um único.</span>

1. <span><b>Carregue scripts e styles por demanda:</b>&nbsp;Apesar de que juntar folhas de estilo e scripts é uma boa prática, as vezes é melhor deixá-los separados se o arquivo diz respeito apenas a uma parte do seu site. Por exemplo, não há necessidade de carregar vários arquivos de bibliotecas JavaScript em uma landing page que apenas demonstra o que seu produto ou serviço pode fazer. Depois que o usuário se registrar no site e entrar mesmo na plataforma, carregue o restante dos recursos. Faça a primeira página ser o mais rápido possível para passar uma boa impressão aos visitantes. Carregue depois o que precisar.</span>

1. <span><b>Junte seus ícones e pequenas imagens em uma folha de sprite:</b>&nbsp;Essa é uma dica muito bacana de se saber quando se utiliza vários ícones ou pequenas imagens no site. Um sprite, como mencionado acima no artigo, é um único arquivo de imagem com várias pequenas imagens que podem ser acessadas com base nas coordenadas X e Y dessa folha. Dessa forma, ao invés de fazer dezenas de requisições para essas imagens e ícones, basta realizar uma. Um bom recurso para criar sprites é o<a target="_blank" rel="noopener" href="https://draeton.github.io/stitches/"> site Stiches</a>. Ele já gera o CSS e HTML de acordo com as imagens adicionadas na folha. Vale lembrar que o Stiches é mais uma biblioteca JS, então lembre-se do que falamos lá no início sobre isso e avalie a necessidade.</span>

1. <span><b>Use um CDN (Content Delivery Network):</b>&nbsp;Os navegadores são capazes de fazer apenas um número limitado de requisições ao mesmo tempo de um servidor. Utilizar CDNs para servir imagens e outros recursos de fontes diferentes ajuda muito no tempo de carregamento dos sites. Além disso isso diminui a carga no seu servidor, o que por sua vez ajuda na sua velocidade de resposta geral.</span>

### Implemente cache

A maior parte dos tipos de arquivos, como css, js e imagens são possíveis de serem armazenados pelos navegadores - cache. Isso significa que esses arquivos são salvos diretamente na máquina local dos visitantes. Na primeira vez que o usuário abre o site eles são salvos. Na segunda ao invés de buscar os arquivos no servidor eles já são puxados diretamente da máquina, então são quase imediatos.

É importante ter cuidado com isso pois não é legal ficar guardando um montante grande de arquivos nos computadores dos visitantes se eles não forem visitar novamente o seu site.  É bom ter em mente também que se você fizer mudanças em um determinado arquivo, essa mudanças não vão ser apresentadas para quem estiver puxando os arquivos do cache. Nesse sentido existem algumas maneiras de enviar as novas mudanças:

* Utilizar uma data de expiração dos recursos em cache

* Mudar o nome dos arquivos. Ex: style.css vice style-v1.0.1.css.

### Não use redirecionamentos

Evite redirecionamentos a não ser que como uma garantia em caso de erros. É muito frustrante para os usuários serem redirecionados de um site para outro. Algumas vezes redirecionamentos são quase que instantâneos, mas pense também na experiência de quem não tem uma boa conexão com a internet.

### Serviços de hospedagem e velocidade do servidor

Todos os métodos acima podem não significar nenhuma melhora de o seu serviço de hospedagem tiver uma performance ruim e limites de velocidade. A velocidade do seu website depende muito da máquina que ele está rodando e da velocidade da conexão do servidor. Tenha sempre em mente isso na hora de escolher um provedor desse tipo de serviço. Elementos como memória RAM, banda da rede e velocidade dos processadores contribuem muito para o resultado de velocidade final.

**Eu já fiz uso de muitos servidores e <a target="_blank" rel="noopener" href="https://www.igluonline.com/ferramentas-para-o-sucesso-seu-blog/">aqui tem uma lista dos que considero mais interessantes</a>.**

Vale lembrar também que não é uma boa ideia ficar trocando de servidor constantemente. É um processo que, em geral, é trabalhoso e pode gerar problemas caso não realizado da maneira correta por profissionais responsáveis. Então lembre de tudo isso e não considere só o preço, mas também a qualidade do serviço contratado.

### HTTP/2

HTTP/2 é o mais novo protocolo de rede para o transporte de baixa latência de conteúdo via web. A parte boa é que nada precisa ser alterado na maneira que você cria seus código. A diferença existe em como os arquivos são buscados nos servidores. Apesar de muitos navegadores já apresentarem o suporte à tecnologia, muitos serviços de hospedagem e servidores não aderiram ao protocolo. Algo que é notável é que a maior parte dos navegadores exigem uma conexão TLS (https) para o HTTP/2 funcionar de maneira correta.

This is the latest networking protocol for low-latency transport of content over the web. Nothing changes in how you code. The magic happens on how the files are fetched. Although browser support is great this technology is very new and many hosting services will surely take their time to move the upgrade from http1.1 to http2. Another good thing to know is that most of the current browsers require a TLS (https) connection for HTTP/2 to work properly.

### Use bibliotecas a partir de CDNs

Se você utiliza bibliotecas, como jQuery, é uma boa ideia fazer uso de CDNs para suas requisições. A grande vantagem aqui é que tem uma grande probabilidade do recurso já estar no cache dos navegadores dos visitantes. Se você utilizar a CDN do Google, por exemplo, seu site estará junto de milhares de outros e um visitante não precisará buscar o recurso online já que deve já o possuir em cache. Além disso, mesmo que não exista o cache é provável da conexão com a CDN ser tão boa quanto ou melhor do que a do seu servidor.

## Considerações sobre a velocidade

### A psicologia por trás da percepção do tempo

Algumas vezes não há formas de otimizar ainda mais um website do que ele já está, especialmente em sites que dependem muito em imagens e conteúdos multimídia. Nesse ponto é muito importante ter algum tipo de funcionalidade de mostrar ao usuário que algo está sendo carregado. GIFs ou barras de progresso costumam ser muito usados nesses casos pois passam a ideia de que algo ainda está por vir.

Parte do sucesso de um site está na administração da percepção de velocidade do site. Mesmo que o site tenha muito conteúdo para ser carregado, é possível passar a ideia de velocidade por meio de alguma coisa para o usuário fazer ou olhar enquanto o resto está carregando. Quando uma página está parada mas claramente ainda está sendo carregada, o sentimento dos visitantes pode não ser dos mais pacientes. Adicionando um GIF ou alguma outra maneira leve e criativa para prender a atenção desse visitante pode ser a diferença entre ele continuar e esperar ou sair antes mesmo de ter acesso ao conteúdo.

### O uso de web-fonts

Web-fontes são muito legais para criar um estilo diferente e bonito nos sites. Escolher uma fonte customizada dessa maneira não é uma ideia ruim, mas temos que ter em mente que elas também adicionam um peso grande no tempo de carregamento dos websites. Quando escolher uma fonte pense duas vezes sobre a quantidade de pesos (font weights) que irá carregar e também se realmente vale a pena. O custo-benefício muitas vezes não compensa o tanto de tempo que demora a mais para um site ser carregado.

### PWA (Progressive Web Applications)

Vou mencionar PWAs aqui por dois motivos. Em primeiro lugar porque esse site aqui é um PWA. Em segundo porque acredito ser o futuro do desenvolvimento web. Essa é uma tecnologia muito recente e apenas alguns navegadores a suportam (Google Chrome é um deles).

Resumidamente, o objetivo de um PWA é ter o mesmo nível de performance de um aplicativo nativo em aparelhos mobile. Isso é possível com o uso de Service Workers que possibilitam o uso dos sites offline. Os navegadores praticamente salvam o website inteiro em uma espécie de cache e faz com que a experiência de uma segunda visita no site seja imediata. Se você se interessa pelo assunto, <a target="_blank" rel="noopener" href="https://dev.opera.com/articles/pwa-resources/">aqui tem uma documentação muito boa</a>.

Uma dica bacana é que pela primeira vez PWAs deixam websites mandarem notificações nos aparelhos mobile.

## Conclusão

Ter um conhecimento grande de desenvolvimento web é fundamental para a criação de websites rápidos e que performam bem em qualquer aparelho. Mas ter um conhecimento também de como a internet e os navegadores funcionam é um adicional muito importante para realmente avançar como um profissional da área.

**Recomendo ficar atento aos avanços de tecnologias e ferramentas pois, em geral, estamos indo para um mundo em que a prontidão é essencial.**

Criar websites do zero pode ser complicado no início, mas tenho certeza que com o tempo você se tornará um desenvolvedor melhor e mais completo se começar a tentar ir por esse caminho.

Espero que tenha gostado do artigo. Você pode mostrar que gostou comentando abaixo ou mesmo compartilhando com seus amigos!

Esse artigo foi baseado [nesse outro do Owen Far](https://hackernoon.com/how-to-radically-improve-your-website-performance-part-1-c728f4e5b08f)

Divirta-se!