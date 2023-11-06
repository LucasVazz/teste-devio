Aplicação teste Fullstack fastfood devio
Este é um projeto de exemplo de uma aplicação fullstack do iFood, que utiliza o React para o frontend e o Node.js para o backend. A aplicação permite fazer requisições ao backend para listar os itens disponiveis. 

Pré-requisitos
Antes de começar, você precisa ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em sua máquina.

Instalação
Para instalar as dependências do projeto, execute o seguinte comando no diretório raiz do projeto:

npm install
Este comando instalará todas as dependências necessárias para o frontend.

Executando a aplicação
Após instalar as dependências, você pode iniciar a aplicação utilizando o seguinte comando:


npm run dev
Este comando iniciará o servidor frontend. O frontend estará acessível em http://localhost:3000.

Funcionalidades
A aplicação possui as seguintes funcionalidades:

Listagem de itens a serem pedidos: A página inicial exibe uma lista de itens cadastrados no sistema.
Detalhes do pedido: Ao clicar em um item, você pode ver os detalhes do pedido em uma nova aba e decidir se quer finaliza o pedido ou continuar adicionando mais itens.
Realização de pedidos: A aplicação permite fazer pedidos diretamente do menu do app.
Pedido: Apos realizado o pedido, o cliente sera redirecionado para uma nova tela aonde ira pedir o nome, e observação caso o cliente queira incluir alem do metodo de pagewamento.
Apos o pedido finalizado: Apos finalizar o pedido, os itens juntamente com o nome e observação serão encaminhados para a cozinha, sendo possivel marcar quuando o pedido esta pronnto para a retirada.
