+++
author = "André Lucas"
categories = ["Desenvolvimento web"]
date = "2018-01-14T15:46:16+00:00"
disqus = true
hugo_image = "images/uploads/2018/01/15/pexels-photo-97080-1.jpeg"
tags = ["Teste de carga", "Load test", "Devops"]
title = "Por que fazer teste de carga no seu website"
url = "/por-que-fazer-teste-de-carga-no-seu-website/"
youtube = ""

+++
Um dos fatores mais importantes para o sucesso de um negócio online é a velocidade do website. Se por algum motivo o site estiver lento, uma boa porcentagem dos usuários não continuarão navegando e o impacto negativo no negócio será enorme.

Ao criar um site é bem simples testar se ele está rápido ou não. Basta acessar o PageSpeed Insights do Google ou outro avaliador de velocidade como o Pingdom e analisar o tempo de carregamento da página. Contudo, quando o site está em produção a relação de velocidade não é tão simples assim. E se 10 pessoas entrarem ao mesmo tempo? E se 1000 pessoas quiserem acessar a mesma página num intervalo de 1 minuto?

É exatamente aí que entra o tópico de discussão desse artigo. Testes de carga - ou load test no Inglês - é o teste que se realiza para simular o uso do website por um número X de pessoas em um determinado intervalo de tempo. Isso faz com que podemos nos previnir e encontrar falhas no código para serem melhoradas e trazer uma experiência positiva e rápida para todos os usuários.

Nesse artigo vou explicar um pouco mais como funciona os testes de carga, mostrar como o impacto de ter testes é positivo e apresentar algumas soluções.

## O que é teste de carga (load test)

O teste de carga é um dos mais conhecidos testes de performance para qualquer websites ou aplicação web/mobile. O objetivo principal desse teste é estressar os servidores de uma aplicação para entender como ela performa ao ter contato com um tráfego grande - preferencialmente simulando as ações que um usuário normal realiza.

Naturalmente o objetivo aqui é entender as limitações e identificar possíveis problemas, alterações e melhorias no código. O mais complicado na gestão de um projeto digital é ser pego de surpresa. Mas se soubermos que o site começa a ficar lento depois de 100 usuários, por exemplo, por segundo, poderemos já planejar estruturas que escalam as capacidades do servidor com antecipação.

Em geral o que ocorre nos testes é que até um certo número de usuários tomando ações (como fazendo login, realizando uma compra, etc) o site performa em sua velocidade máxima de carregamento. Vamos supor que essa velocidade seja 2 segundos para que a página seja carregada.

A partir desse número de usuários base, a cada novo usuário maior é o tempo que ele esperará. Supondo que o número de usuários com velocidade máxima seja 100 usuários por minuto. Se em algum momento de pico o site receber 150 usuários por minuto, o tempo médio de carregamento passará a ser de uns 4 segundos. Subindo para 200 usuários, uns 7 segundos. E por aí vai até chegar um momento que o servidor provavelmente não mais retornará uma chamada bem sucedida e nenhum usuário mais conseguirá utilizar a aplicação.

Dependendo do valor médio gerado por cada usuário no site e considerando a taxa que os usuários não dão continuidade no site por segundo esperado, chegará um momento que valerá a pena aumentar a infra-estrutura e garantir que todos os usuários tenham o melhor tempo de carregamento possível.

Esse cálculo nem sempre é simples, mas utilizando load testing é possível não só entender tudo isso mas já criar as estruturas de prevenção.

## Impactos positivos no seu negócio

Se você tem um negócio online ou é um desenvolvedor buscando entender se vale ou não a pena implementar um sistema de teste de carga, é sobre isso que vamos falar agora.

No final das contas, o que realmente determinará se a implementação de um sistema desses vale a pena é o **retorno do investimento**. O famoso ROI (Return of investment). O valor de implementação de testes de carga juntamente com o valor de adaptação do servidor para escala devem levar ao aumento de engajamento, vendas ou qualquer estratégia relacionada ao websites.

Podemos dividir então os [custos em três áreas](https://www.loadview-testing.com/learn/importance-roi-load-testing/). Ferramentas, desenvolvimento e infraestrutura. Isto é, quais são os softwares escolhidos para auxiliar no processo, quem vai desenvolver e implementar tudo e as máquinas necessárias para se realizar os testes e, posteriormente, ter os sistemas de escala funcionando.

Os benefícios, por outro lado, são mais diretos. O que não falta na internet são artigos e documentos explicando que diferenças de milisegundos já causam impactos gigantes na performance de ecommerces e outros tipos de websites. Então basta encontrar sua fonte preferidade de dados (ou se você mesmo já tiver uma base estatística para isso no seu nicho ainda melhor) e fazer os cálculos considerando

    [número de usuários]
    [taxa de desistencia a cada X milisegundos]
    [valor gerado em média por usuário]
    [custo total da operação de load testing]

Com isso é possível entender a partir de quantos usuários valerá a pena investir no teste de carga.

## Como escolher um software de teste de carga

Há um tempo atrás, fazer testes de carga era uma tarefa bastante complicada. Contudo, assim como grande parte das áreas de desenvolvimento de softwares e devops, os load testers estão cada vez mais robustos e melhores.

Na hora de escolher um sistema para testar a carga do seu website, [podemos apontar algumas diretrizes para que seu trabalho seja mais fácil](https://www.loadview-testing.com/learn/choosing-a-load-testing-platform/).

* **Facilidade de uso** - Quanto mais fácil e rápido é usar um sistema mantendo as funcionalidades, melhor será. Criar um scripts para a realização de testes não deve demorar mais do que algumas poucas horas.
* **Suporte a tecnologias** - Um boa plataforma de testes deve ter suporte a uma gama de tecnologias como captura e replays em vários tipos de aparelhos, WEB 2.0 e APIs.
* **Simulação realística de usuários** - Um dos fatores mais importantes para um serviço de load testing é ter uma simulação precisa do que um usuário comum faz no site. Caso as ações simuladas não representem o que os usuários de fato farão no ambiente de produção, podem ser gerados resultados falsos e que trarão problemas posteriormente.
* **Portabilidade dos scripts** - É importante que se possa reutilizar seus scripts.
* Suporte da comunidade - Como a implementação de testes de carga pode ser complicada em alguns cenários, é recomendado que se observe se o serviço escolhido possui uma boa base de conhecimento, um fórum ativo e também uma documentação atualizada e completa.
* **Manutenção** - Pode ser que quando um serviço ou solução de load testing seja atualizada gere problemas de compatibilidade. Então acaba virando um dilema entre novas funcionalidades e correções contra possibilidades de problemas. Serviços que ofereçam suporte para esse tipo de situação é importante.
* **Custos** - Cada serviço de teste de carga tem um tipo diferente de cobrança. Alguns são por usuários simulados, outros por mês e até tem as soluções de código aberto (open-source) que mesmo sendo gratuitas é preciso considerar que serão instaladas em uma máquina e essa, por sua vez, será paga. Aqui então é interessante estar atento para qual é o formato mais adequado para sua situação.
* **Auto monitoramento** - É melhor se a solução que monitora os agentes de testes continuamente durante a execução dos testes e nunca compartilhe os geradores de carga com outros testes.

Pensando em todos esses quesitos, acho importante oferecer uma solução que recomendamos. O [Loadview da Dotcom-Monitor é um dos melhores sistemas de testes](https://www.loadview-testing.com/) e funciona por demanda, algo que particularmente acredito ser a melhor opção.

## Conclusão

Estarmos presentes e atentos para os testes de carga com certeza nos ajudará a otimizar a performance de nossos websites. Os cálculos de ROI podem ser um pouco complicados, mas precisamos sim usar load tests quando estamos pensando no cresciemento e expansão de negócios online.

Quanto mais acostumados com altas velocidades de internet e processamento, menor é a tolerância dos usuários por sites lentos. Além disso, é bem provável que se você não prestar atenção nisso, o seu concorrente pode estar já se previnindo e o usuário sempre tem opções.

Se você já realiza testes de carga, deixa aqui nos comentários.

Divirta-se!