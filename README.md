# ping-pong 

Objetivo: Identificar o que está sendo enviado para um endpoint qualquer

## Caso de uso

Você está recebendo erro 401 do seu endpoint e não tem certeza o porque, 
vizualizar o que o endpoint está recebendo pode ser de grande ajuda.

Com o uso do ping-pong você envia sua requisição e recebe um objeto req no 
formato JSON e pode exibir o req.body, ou req.headers, ou req.rawHeaders ou 
até mesmo req, para ver a requisição inteira.

## Modo de usar

* Substitua o endpoint que você está consultando pelo endpoint:

https://ping-pong-rocket.herokuapp.com/

* Você receberá uma resposta 200 com um corpo JSON contento um objeto JSON com a
requisição http inteira.

* Funciona para todos os métodos HTTP(GET, POST, PUT, DELETE, HEAD, TRACE, OPTIONS, CONNECT)

Obs.: Você receberá uma resposta 200 mesmo que esteja deixando de enviar algo que seu endpointe precise receber. 
Por exemplo:
Se seu endpoint precisa de um header "authorization" e você não está enviando, você receberá uma resposta 200 mesmo assim, pois o ping-pong somente devolve o que você enviou, em formato JSON, mas pelo menos você conseguirá identificar que não enviou o header em questão.





Desenvolvido por: RocketLab Software - Jaraguá do Sul

Developer: https://github.com/thomasvieira