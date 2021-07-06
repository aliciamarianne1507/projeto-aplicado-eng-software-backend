# Projeto Aplicado a Engenharia de Software

Trabalho Final do curso de Pós Graduação de Engenharia de Software na PUC Minas/2021.

Desenvolvido por:

- Alicia Marianne Gonçalves de Paula
- Ana Cristina Pereira Teixeira
- Cleyton Pereira Plácido
- Pollyanna Carolina Da Fonseca

Professor: Pasteur Ottoni de Miranda Junior


## O Projeto

Seja um sistema de comércio eletrônico simplificado.

Clientes (campos da tabela correspondente: CPF, nome do cliente, endereço, estado, Municícipio, telefone, email e senha)  fazem pedidos (campos da tabela: código do pedido, data do pedido e CPF do cliente). Esses, por sua vez, são constituídos por itens de pedido (campos da tabela correspondente: código do pedido, código do produto e  quantidade ) referentes  a um  produto (campos da tabela correspondente:código do produto, nome do produto, preço do produto e quantidade em estoque). Esses produtos são classificados em categorias (campos da tabela  correspondente: código da categoria e nome da categoria).

Tão logo um pedido seja efetuado, deve ser emitida uma confirmação com os itens de pedido, suas quantidades e subtotais e o total do pedido.

Deve ser emitido um relatório  de pedidos por data (com informações  do pedido-itens de pedido, quantidade, total, parcial- nome e cpf do cliente) .

O sistema deve permitir a autenticação do cliente por meio de seu email e senha.

Todas as tabelas devem ser mantidas por meio de CRUDs(consulta, alteração, consulta e exclusão).


### FrontEnd 

- Telas desenvolvidas no Android Studio 


### BackEnd

- A API da aplicação foi criada utilizando NodeJs 
- Banco de Dados - Postgres
