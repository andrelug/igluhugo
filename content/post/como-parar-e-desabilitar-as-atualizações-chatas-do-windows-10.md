+++
author = "André Lucas"
categories = ["Desenvolvimento web"]
date = "2018-10-30T19:35:12-03:00"
disqus = false
hugo_image = "/images/uploads/2018/10/30/como-desabilitar-atualizacao-automatica-windows-10.jpg"
tags = ["Windows 10", "Atualizações automáticas", "Dicas de windows"]
title = "Como parar e desabilitar as atualizações chatas do Windows 10"
url = "/como-parar-e-desabilitar-as-atualizacoes-chatas-do-windows-10/"
youtube = ""

+++
Se você é um usuário ou usuária do Windows 10, então provavelmente se irrita com as atualizações automáticas. Não só você tem que esperar o seu computador reiniciar após ser interrompido, demorar na tela azul e reiniciar de novo, mas tem que torcer para que o seu sistema fique intacto e não cheio de bugs.

Inclusive, além disso tudo as atualizações automáticas consomem espaço no HD do seu PC, deixa ele mais lento e usa sua internet, a deixando mais lenta. Então, nesse artigo eu vou te ensinar como fazer para desabilitar e parar com essas atualizações automáticas do Windows 10.

## Como desabilitar as atualizações do Windows 10

Vamos começar com a [forma mais simples](https://www.cnet.com/how-to/heres-how-you-can-avoid-getting-burnt-by-windows-update/) e que, dependendo, já pode funcionar para você. Para evitar que você seja interrompido pela necessidade de atualização, pode alterar o horário definido que está ativo no computador. Essa funcionalidade determina quais são os horários que você está utilizando o PC e avisa o Windows Update para não te interromper nesses momentos. Contudo, isso apenas funcionará se deixar seu computador ligado em momentos que está ausente para, então, ele realizar a atualização.

Para fazer isso, vá até as configurações do seu Windows 10 e selecione a opção de **Atualização e Segurança**. Em seguida, clique no botão **Alterar horário ativo** e determine seus horários.

![](/images/uploads/2018/10/30/como-desabilitar-atualizacao-automatica-windows-10.jpg)

A segunda forma mais branda de lidar com o problema é simplesmente garantir que a atualização não virá em um momento inoportuno. Isto é, logo antes de um evento em que você fará uma apresentação ou antes de algum momento que **precisa** que seu PC não te deixe na mão faça a atualização manualmente. Basta ir no mesmo local mencionado acima e clicar no botão **Verificar se há atualizações**.

Agora, se você quiser **realmente desabilitar completamente as atualizações do Windows 10** - fazendo com que apenas você manualmente possa o atualizar -, então o processo é um pouquinho mais complicado. Primeiro, aperte o botão do Windows + R (Win + r). Uma janela chamada executar abrirá. Digite **services.msc** e aperte Enter.

![](/images/uploads/2018/10/30/como-desabilitar-atualizacao-automatica-windows-10-2.jpg)

Uma outra janela chamada **Serviços** vai abrir com uma lista grande de opções. Encontre a opção **Windows Update** e clique duas vezes para abrir mais uma janela, agora chamada **Propriedades de Windows Update**.

![](/images/uploads/2018/10/30/como-desabilitar-atualizacao-automatica-windows-10-3.jpg)

Na configuração **Tipo de inicialização** selecione a opção **Desativado**. Em seguida reinicie seu computador e o serviço de atualização do Windows 10 estará desativado.

Caso queira o reabilitar, então é só seguir o mesmo procedimento e marcar a opção **Automático**.

## Conclusão

Essas opções já são bem interessantes, mas também existem outras. Caso queira aprofundar a pesquisa, deixo duas referências de [ideias para buscar](https://www.forbes.com/sites/gordonkelly/2015/08/26/windows-10-how-to-stop-forced-updates/#2b36df9f46f6):

* Mudar o tipo de conexão para 'dosada' (Metered Connection)
* Editar as configurações das políticas de grupo (Group policy editor)

Algo que é importante deixar claro é que as atualizações, no fundo das contas, sempre trazem correções de bugs, melhorias de performance, novas funcionalidades e, principalmente, mais segurança. Então mesmo com o risco de ter bugs ou atrapalhar nosso trabalho, eu recomendo você de tempos em tempos atualizar seu sistema!

Desabilitar as atualizações do Windows 10 é uma boa ação, mas lembre sempre de o atualizar.

Divirta-se!