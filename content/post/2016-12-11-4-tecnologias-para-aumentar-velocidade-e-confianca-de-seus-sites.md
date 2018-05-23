---
title: 4 tecnologias para aumentar a velocidade e confiança de seus sites
author: André Lucas
type: post
date: 2016-12-11T03:34:54-03:00
url: /4-tecnologias-para-aumentar-velocidade-e-confianca-de-seus-sites/
featured_image: uploads/2016/12/pexels-photo-186461
featured_image_extension: jpeg
mvp_post_template:
  - def
mvp_featured_image:
  - show
post_views_count:
  - 299
instant_articles_submission_id:
  - 202441356900975
categories:
  - Desenvolvimento Web
tags:
  - carregamento
  - internet
  - velocidade
  - websites

---
Cada vez mais a velocidade dos nossos sites é um fator que pode determinar seu sucesso na web. Clientes estão mais exigentes e a maior parte das pessoas tem acessado via aparelhos móveis, esses que normalmente não possuem uma internet tão boa.

**De acordo com alguns artigos da Google, 2 segundos é o tempo de carregamento máximo para um site e-commerce por exemplo**. É um tempo bem pequeno e se formos analisar a maior parte dos sites não consegue bater esse padrão, ainda mais se forem sites feitos com o WordPress, que é o caso do nosso blog aqui.

Então, para que possamos melhorar nossas performances nos sites devemos atualizar nossos protocolos e tecnologias. Vejamos 4 dessas novidades abaixo:

## HTTP/2

Publicado em meados de 2015 e nos meses seguintes sendo suportado pelos navegadores modernos, o protocolo HTTP/2 é uma evolução do tradicional HTTP e possui várias mudanças que ajudam na performance e nas relações esperadas entre websites e usuários que antes não eram previstas.

A principal melhora é a habilidade de **trabalhar com vários requests em uma única conexão**. Essa habilidade é chamada de multiplexing e é revolucionária para web developers. funcionalidades como <a class="external inner-link-effect" href="https://css-tricks.com/css-sprites/" rel="nofollow"><span class="s2">sprites</span></a> ou <a class="external inner-link-effect" href="https://css-tricks.com/data-uris/" rel="nofollow"><span class="s2">Data URIs</span></a> não serão mais efetivas.

HTTP/1 era (e ainda é) mais eficiente quando carregando uma imagem ou arquivo grande ao invés de vários pequenos pois ele só consegue administrar um pedido (request) no servidor por vez. Esse problema foi consertado nessa nova versão.

HTTP/2 também compacta os dados da transferência (headeres) antes do request ser enviado, o que simplifica o seu transporte. Por último, a nova versão é binária e não textual como a anterior. **O resultado é um aumento de performance de até 50%**. Você pode testar a diferença [nesse link][1].

<img class=" wp-image-195 aligncenter" src="/images/uploads/2016/12/Screenshot_1-1.png" alt="http/2" width="1140" height="691" srcset="/images/uploads/2016/12/Screenshot_1-1.png 1575w, /images/uploads/2016/12/Screenshot_1-1-300x182.png 300w, /images/uploads/2016/12/Screenshot_1-1-768x466.png 768w, /images/uploads/2016/12/Screenshot_1-1-1024x621.png 1024w, /images/uploads/2016/12/Screenshot_1-1-150x90.png 150w" sizes="(max-width: 1140px) 100vw, 1140px" />

A maior dificuldade hoje com relação à mudança para o novo protocolo não é o próprio HTTP/2, mas sim o suporte dos navegadores pois esses apenas estão suportando a nova conexão via SSL, isto é, apenas sites com o certificado de segurança mesmo que o novo protocolo, assim como o antigo, aceitem conexões sem SSL.

Dessa forma, o primeiro passo para utilizar essa tecnologia é adquirir um certificado SSL. Quando já o tiver, a implementação do HTTP/2 deve ser feita diretamente no servidor, o que implica em você ter acesso administrativo ao seu servidor &#8211; não só ao painel dele, como em grande parte dos servidores compartilhados, mas sim à máquina em si. Idealmente é interessante trabalhar com VPS ou máquinas virtuais.

De acordo com o [W3Techs][2], cerca de 11% dos websites hoje estão fazendo uso da nova tecnologia.

## Certificado SSL

Os certificados SSL são aa encriptações entre o servidor e o cliente. **A obtenção de um certificado é mais fácil do que muitos imaginam** e inclusive pode ser adquirido gratuitamente pelo Let&#8217;s Encrypt.

Let&#8217;s Encrype é uma nova autoridade certificadora que saiu do seu estágio Beta em meados de Abril desse ano de 2016. O objetivo do Let&#8217;s Encrypt é eliminar todo o processo manual necessário para a obtenção de um certificado. Com o Let&#8217;s Encrypt o processo todo é automatizado e só leva alguns minutos.

Você também pode conseguir o seu certificado através de seu provedor de hospedagem, mas para aqueles que administram seu próprio servidor [esse link][3] dá o passo a passo para a sua instalação. O tutorial está em inglês, mas <span style="text-decoration: underline;">se você quiser deixa um comentário abaixo que posso fazer uma versão em português e postar aqui no blog.</span>

SSL em si não é uma nova tecnologia, mas o Let&#8217;s Encrypt pôde popularizar esse recurso e por isso colocamos aqui. Também, não necessariamente o SSL vai deixar o site mais rápido pois de alguma forma ele até diminui sua velocidade, mas sem ele muitos recursos que aumentam a velocidade não podem ser usados &#8211; o que é o caso do HTTP/2 e Brotli.

## Brotli

Brotli é um novo algoritmo de compressão [introduzido pela Google][4] recentemente. Assim como outros algoritmos de compressão, esse reduz o tamanho das informações transportadas. Contudo, em comparação com as atuais soluções atuais o **Brotli oferece de até 26% melhor taxa de compressão**. Como consequência, você consegue economizar cerca de 40% de seu tráfego em arquivos de HTML e 25% em arquivos de CSS e JavaScript.

Nenhum servidor oferece o algoritmo como padrão no momento, mas os mais populares como Nginx, Apache e Node.js já possuem pacotes (packeges) para sua instalação.

<img class=" wp-image-198 aligncenter" src="/images/uploads/2016/12/Screenshot_2-1.png" alt="Brotli" width="1088" height="517" srcset="/images/uploads/2016/12/Screenshot_2-1.png 1330w, /images/uploads/2016/12/Screenshot_2-1-300x143.png 300w, /images/uploads/2016/12/Screenshot_2-1-768x365.png 768w, /images/uploads/2016/12/Screenshot_2-1-1024x487.png 1024w" sizes="(max-width: 1088px) 100vw, 1088px" />

&nbsp;

## CDN

Content Delivery Networks (CDN) já estão no mercado há um tempo e não são muito novidades, mas são cada vez mais importantes para o bom funcionamento de um site. Os CDNs são servidores espalhados pelo mundo que contém cópias de alguns conteúdos do seu site &#8211; como imagens, vídeos, downloads, etc. Quando esses conteúdos e arquivos são acessados eles são carregados do servidor mais perto fisicamente do visitante, **o que implica em um tempo de carregamento mais rápido do que qualquer um.**

Além disso outra grande vantagem é a confiabilidade do seu site. Como os conteúdos estão espalhados em dezenas de servidores, o seu servidor ganha uma folga na entrega de arquivos que normalmente são até os mais pesados do site. Isso significa que ele terá menos probabilidade de sobrecarregar e ultrapassar seus limites.

Posso até voltar a atenção para sites WordPress uma vez que quando eles chegam a um estágio de mais visualizações por segundo ele começa a exigir muito do servidor. Tive clientes que quando chegaram na média de 60 mil visitas mensais começaram a ter que pagar mais pelos servidores do que era esperado, m**as um CDN pode elevar esse limite para mais de 100 mil visitas mensais com tranquilidade** e seu valor será bem menor do que o upgrade de máquina.

Há quem diga que o uso de CDN fez o site aumentar em 50% a sua velocidade, mas com certeza esses números são individuais para casa situação.

&nbsp;

Se você gostou desse artigo compartilhe e deixe um comentário abaixo com suas impressões. Qual outra mudança você fez em sites para aumentar a velocidade?

&nbsp;

Divirta-se!

 [1]: http://www.http2demo.io/
 [2]: https://w3techs.com/technologies/details/ce-http2/all/all
 [3]: https://letsencrypt.org/getting-started/
 [4]: https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html
