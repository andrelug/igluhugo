+++
author = "André Lucas"
categories = ["Wordpress", "Desenvolvimento Web"]
date = "2018-06-10T20:59:24-03:00"
disqus = false
hugo_image = "images/uploads/2018/06/11/como-consertar-erro-tela-branca-wordpress.jpg"
tags = ["Cache", "Erro", "Plugins"]
title = "Como consertar o erro da a tela branca do WordPress"
url = "/como-consertar-o-erro-da-tela-branca-do-wordpress/"
youtube = ""

+++
Para quem já tem um tempinho usando o WordPress sabe que existem diversos erros que podem acontecer e um dos mais desesperadores é o da tela branca. Diferentemente de outros erros mais simples, um grande problema desse erro da tela branca é que você não consegue nem entrar no seu painel administrativo para desinstalar um plugin ou tentar ver o que pode ter dado errado para consertar.

Contudo, para deixar ainda mais confuso em algumas ocasiões quando temos a tela branca no WordPress ela só acontece em algumas partes do seu site. Às vezes você não consegue acessar o `wp-admin`, às vezes só consegue ver algumas páginas específicas e outras vezes tudo fica branco e não consegue abrir nada.

Nesse artigo vou te mostrar como consertar a tela branca do WordPress por meio de algumas possíveis soluções diferentes. Esse artigo tem como grande base as informações desse [outro artigo do blog wpbeginner](http://www.wpbeginner.com/wp-tutorials/how-to-fix-the-wordpress-white-screen-of-death/).

## Por que esse erro acontece?

Se você está tendo o problema da tela branca é bem provável que seja um problema de memória. Mais especificadamente a falta de memória. Isso pode acontecer por vários motivos mas em geral é algum plugin ou template que não está funcionando da maneira correta ou que exige um pouco mais de recurso computacional por natureza e requer um servidor melhor para rodar bem. Porém, também pode ser um erro das configurações do servidor e acaba que fica bem difícil determinar a razão exata da ocorrência. Depende muito de cada caso e eu conferiria esses três pontos nessa ordem na hora de buscar a razão:

1. Plugins
2. Template
3. Servidor

### O erro ocorre em seus outros sites?

Se você possui mais de um site no mesmo servidor acho que uma das primeiras coisas que precisa fazer é conferir se os outros estão abrindo. Se os outros websites estiverem com problema também é bem provável que seja um problema com o servidor ou seu serviço de hospedagem. Já se somente um dos seus sites estão com a tela branca sugiro olhar para os plugins ou temas que estão ativos.

## Soluções para consertar a tela branca do WordPress

**Importante: Sempre faça um backup do seu website antes de tentar fazer qualquer alteração abaixo.**

Abaixo vou listar algumas das soluções possíveis. Sugiro tentar cada hora uma separadamente e ver o resultado no seu website ao invés de todas juntas ou uma depois da outra acumulando várias soluções. Dessa maneira você descobre exatamente como corrigir essa situação específica com seu website e saberá com mais agilidade consertar a tela branca da próxima vez.

### Aumentar o limite de memória

Como mencionei acima, existe uma boa chance de ser um problema de memória. Então é natural que a primeira solução seja aumentar a memória. Existem duas grandes configurações de memória que precisamos nos atentar: memória do servidor e memória do PHP.

Alteramos a memória do servidor apenas quando esgotamos o limite que a memória do PHP pode ir (que naturalmente consome a própria memória do servidor mas tem como padrão valores bem inferiores do que a dos servidores).

Para alterar a memória do PHP precisamos alterar o limite padrão do WordPress. Em geral o WordPress tem `64mb` como limite pré-estabelecido. Abra então o arquivo `wp-config.php` na raiz do seu website e adicione a linha abaixo logo antes da frase: `/\\\\\\\* That's all, stop editing! Happy blogging. \\\\\\\*/`.

    define( 'WP_MEMORY_LIMIT', '256M' );

Esse código fará com que o limite suba para 256mb. Se a solução não funcionar para o aumento da memória, pode ser também que o seu [serviço de hospedagem bloqueie](https://www.igluonline.com/nao-vale-pena-utilizar-servicos-brasileiros-de-hospedagem-de-sites/) essa ação. Aí a recomendação é entrar em contato com o serviço e pedir para que eles alterem o valor para você.

### Desabilitar todos os plugins

Se aumentar a memória não ajudou muito para consertar a tela branca do WordPress ou se você tem algum tipo de limite de memória pelo plano contratado da sua hospedagem então vamos para a próxima opção que é entender a fonte do problema.

A melhor forma para detectar onde está o problema é desabilitando todos os plugins de uma vez só. Se esse processo fizer o seu website voltar ao ar então comece a habilitar um plugin de cada vez até identificar qual deles que deu o prolema.

Acompanho uma sugestão de ser bem cauteloso ao instalar plugins. Busque aqueles que são mais usados, possuem atualizações recorrentes e muitas avaliações. Avalie também plugins que gosta e aprova para ajudar outras pessoas que estão buscando. Além disso tente não exagerar na quantidade de plugins. Quanto mais plugins, mais lento o site acaba ficando.

Se você não tem acesso ao `wp-admin` então basta acessar seu site por FTP e mover todas as pastas dentro da pasta `plugins` dentro da `wp-content` para uma outra temporária que o WordPress automaticamente os desabilitarão. Então é só mover um a um de volta e ativar no painel administrativo.

### Troca de template ou tema

Se após você desabilitar todos os plugins a tela branca do WordPress ainda está presente, então talvez seja um erro no template ou tema ativo. Selecione o template padrão do WordPress.

Se você não tem acesso ao `wp-admin` pode seguir um formato parecido com o que eu mencionei acima para os plugins, mas agora na pasta `theme` dentro da `wp-content`. Mova o template customizado que instalou para uma outra pasta temporária e o WordPress automaticamente ativará o tema padrão.

Caso isso funcione não precisa desistir imediatamente do seu template customizado. Primeiro tente acessar o arquivo `functions.php` desse template e confira se não tem espaços extras ao final do arquivo. Se tiver delete esses espaços, salve o arquivo e tente reativá-lo. Não dando certo é bem provável que o código do tema esteja com sérios problemas.

### Outras possibilidades de consertar a tela branca do WordPress

Se nada do que mencionei acima deu certo talvez seja o momento de buscar reinstalar seu WordPress com uma cópia nova. É pouco provável mas pode ser que houve algo na instalação que corrompeu sua cópia atual.

Algo que pode fazer, contudo, antes de ir até esse extremo é configurar o debug do WordPress no arquivo `wp-config.php`. Primeiro troque de `false` para `true` a linha abaixo:

    define( 'WP_DEBUG', true);

em seguida adicione a seguinte linha acima dela:

    error_reporting(E_ALL); ini_set('display_errors', 1);

Assim que fizer essas alterações pode ser que sua tela branca comece a mostrar erros e avisos. Essas notificações podem te ajudar a resolver o problema.

Uma outra possibilidade interessante que pode ajudar é com relação ao cache. Se você conseguir acessar a área administrativa e apenas a parte pública do seu site esteja com a tela branca tente esvaziar o cache através do plugin ou sistema que está usando.

Outro indício de problema no cache é se a tela branca está aparecendo apenas em posts com muito conteúdo. Tente limpá-lo e recarregue as páginas.

## Concluindo

Sei bem como é frustrante lidar com os erros do WordPress e em especial com esse, mas espero que consiga consertar a tela branca do WordPress com essas dicas e sugestões acima. Se conseguiu resolver deixa aí um comentário ou se usou alguma outra dica nos conte para podermos expandir o artigo.

Divirta-se!