+++
author = "André Lucas"
categories = ["WordPress", "Desenvolvimento web"]
date = "2018-12-03T06:58:54-02:00"
disqus = false
hugo_image = "/images/uploads/2018/12/03/renomear-sem-categoria-wordpress.jpg"
tags = ["Tutorial", "Renomear categoria"]
title = "Como renomear a categoria \"Sem Categoria\" do WordPress"
url = "/como-renomear-a-categoria-sem-categoria-do-wordpress/"
youtube = ""

+++
Todos nós que mexemos com o WordPress já estivemos naquele momento que salvamos um post e esquecemos de escolher a categoria. O resultado é que nosso artigo acaba ficando com a "**Sem Categoria**" selecionada automaticamente.

Se você já quis renomear essa categoria padrão do WordPress, pode ficar tranquilo(a) pois é um processo bem simples e inclusive podemos definir uma nova categoria padrão para seu site WordPress.

## O que é a categoria padrão do WordPress?

Quando falamos de categorias e tags estamos falando de taxonomias que já vem de fábrica no WordPress quando o instalamos. No caso das categorias, por padrão, todos os posts criados (publicados ou não) precisam ter uma categoria assossiadas a ele.

Quando não selecionamos uma categoria nós mesmos, o WordPress seleciona a categoria padrão, que é a "Sem Categoria" - "Uncategorized" se sua instalação for em Inglês.

![](/images/uploads/2018/12/03/renomear-sem-categoria-wordpress.jpg)

\*Caso a sua página não seja igual a acima é porque esse printscreen já foi tirado em uma instalação do WordPress com o novo editor Gutemberg.

Normalmente podemos navegar até **Posts > Categorias** e deletar qualquer uma das categorias que criamos. Contudo, não podemos deletar a categoria padrão do WordPress, o que para muitas pessoas acaba sendo algo chato.

O que poucas pessoas sabem, no entando, é que você pode mudar a categoria padrão ou renomear a categoria "Sem Categoria", eliminando-a assim do seu WordPress.

## Renomear a categoria "Sem Categoria" no WordPress

Como mencionei acima, você não pode deletar a categoria padrão do WordPress, mas pode a renomear. Para tal, navegue até **Posts > Categorias** na sua área de administração e clique no botão de editar abaixo da categoria "Sem Categoria".

![](/images/uploads/2018/12/03/editar-sem-categoria-wordpress.jpg)

Você será direcionado à página de edição da categoria e poderá então renomeá-la para qualquer nome que desejar. Algo que é importante também fazer é alterar a url, também chamado de slug, para dar consistência à mudança e não confundir nem seus usuários nem o Google.

![](/images/uploads/2018/12/03/mudar-categoria-padrao-wordpress.jpg)

Caso seu site já esteja publicado e indexado pelo Google, será necessária uma outra etapa para garantir que seu site não contenha uma página que não existe mais. Isso ocorre porque quando você troca o slug, está trocando o destino de uma página já indexada pelo Google ou outros sistemas de busca. Por mais que não seja uma página tão visitada, o Google não gosta de páginas que não existem e dão erros 404 então melhor fazer o redirecionamento para deixar tudo certinho. Vou explicar ainda nesse artivo como fazer esse redirecionamento.

## Mudar a categoria padrão do WordPress

Outra ação que você pode tomar para não ter mais a categoria Sem Categoria é a de mudar a categoria padrão do WordPress.

Antes de avançar, tenha pelo menos uma outra categoria que não a "Sem Categoria" criada no seu site. Caso não tenha, basta ir até **Posts > Categorias** e criar uma nova categoria a partir das opções marcadas na imagem abaixo.

![](/images/uploads/2018/12/03/criar-categoria-wordpress.jpg)

Não há necessidade de escrever a "Slug", pois é criada automaticamente a partir do nome da Categoria.

Continuando, vá até **Configurações > Escrita**. A primeira opção dessa página já será a de escolher qual a nova categoria padrão para seu website WordPress.

![](/images/uploads/2018/12/03/escolher-nova-categoria-padrao-wordpress.jpg)

Clique no botão Salvar alterações e pronto! **Sua nova categoria padrão estará ativa no WordPress**.

Se você esquecer de selecionar uma categoria na próxima vez que criar um post, a nova categoria selecionada será aplicada em vez da "Sem Categoria".

Uma questão importante é que se você escolher esse método os posts já existentes que estão categorizados como "Sem Categoria" continuarão do mesmo jeito. Você terá que manualmente trocar cada um.

Outra ação possível é agora simplesmente deletar a categoria Sem Categoria e os posts mudarão automaticamente para a nova categoria padrão.

## Redirecionar a página antiga da categoria Sem Categoria

Se você escolheu alterar o nome Sem Categoria para algo novo e trocou o slug, então o endereço da página da categoria também foi alterado e se você tentar acessar a antiga URL encontrará um erro 404.

Esse erro singnifica que a página buscada não foi encontrada. Para resolver esse problema vamos utilizar um plugin chamado [Redirection](https://wordpress.org/plugins/redirection/).

Instale o plugin no seu WordPress, em seguida vá até **Ferramentas > Redirection** e preencha ambas as URLs da nova categoria e da sem categoria.

![](/images/uploads/2018/12/03/redirecionamento-categoria-wordpress.jpg)

Clique em Adicionar Redirecionamento e estará tudo pronto. Você pode testar entrando na URL da sem categoria e verá que será redirecionado para a nova página.

Espero que esse tutorial tenha te ajudado a renomear a categoria "Sem Categoria" do WordPress para uma nova de sua escolha e também trocar a categoria padrão. Esse artigo foi inspirado por um [outro similar no WPbeginner](https://www.wpbeginner.com/beginners-guide/rename-the-uncategorized-category/).

Se você curtiu esse artigo, considere compartilhá-lo com outras pessoas que também podem aproveitar.

Divirta-se!