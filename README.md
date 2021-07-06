# Projeto Aplicado a Engenharia de Software

API desenvolvida durante a pós-graduação em Engenharia de Software da PUC Minas - 2021 para representar um comércio eletrônico simplificado.

Os clientes (campos da tabela correspondente: CPF, nome do cliente, endereço, estado, Município, telefone, e-mail e senha) fazem os pedidos (campos da tabela: código do pedido, data do pedido e CPF do cliente). Estes, por sua vez, são compostos por itens de pedido (campos da tabela correspondentes: código do pedido, código do produto e quantidade) referentes a um produto (campos da tabela correspondente: código do produto, nome do produto, preço do produto e quantidade em estoque). Esses produtos são classificados em categorias (campos na tabela correspondente: código da categoria e nome da categoria).

## Clientes

### GET- Buscar usuário

Buscar usuário cadastrado informando cpf

```
https://projetoposgraduacao-backend.herokuapp.com/cliente/96782411024
```
### POST - Criar usuário

```
https://projetoposgraduacao-backend.herokuapp.com/cliente
```

Body Request: 

```
{
    "name": "Maria Felix",
    "cpf": "96782411024",
    "email": "maria@gmail.com",
    "telefone": "5531985956520",
    "endereco": "rua xxx numero 230",
    "estado": "MG",
    "municipio": "Betim",
    "senha": "123456"
}
```

### GET - Fazer Login
```
https://projetoposgraduacao-backend.herokuapp.com/login

```

Body Request:
```
{
    "email": "maria@gmail.com",
    "senha": "123456"
}
```

### PUT - Editar usuario

```
https://projetoposgraduacao-backend.herokuapp.com/cliente
```
Atualizar usuário - o CPF é obrigatório!

Body Request: 
```
{
    "name": "Teste 01 atualizado",
    "cpf": "123456655",
    "email": "emailatualizado@email.com",
    "telefone": "5531654987",
    "endereco": "rua xxxy numero 230",
    "estado": "MG",
    "municipio": "Betim",
    "senha": "123456"
}
```

### DELETE - Excluir Cliente

```
https://projetoposgraduacao-backend.herokuapp.com/cliente/123456655

```

## Categoria

### POST - Criar Categoria
```
https://projetoposgraduacao-backend.herokuapp.com/categoria

```

Body Request: 
```
{
    "name_categoria": "Categoria Teste 02"
}
```

### GET - Buscar todas as categorias
```
https://projetoposgraduacao-backend.herokuapp.com/categoria
```

### GET - Buscar categoria pelo Id dela
```
https://projetoposgraduacao-backend.herokuapp.com/categoria/35829bdb-ddfd-4bef-a5f4-2af45e047fbb
```

### PUT- Atualizar Categoria
```
https://projetoposgraduacao-backend.herokuapp.com/categoria
```
Body Request: 
```
{
    "name_categoria": "Categoria Teste Atualizada",
    "codigo_categoria": "35829bdb-ddfd-4bef-a5f4-2af45e047fbb"
}
```

### DELETE - Deletar Categoria
```
https://projetoposgraduacao-backend.herokuapp.com/categoria/ed2cc9ee-a9ed-4efc-b8e6-9d02599f5836
```

## Pedidos

### POST- Criar pedidos
```
https://projetoposgraduacao-backend.herokuapp.com/pedidos
```
Body Request: 
```
{
    "cpf":"123456656",
    "quantidade": 15
}
```

### GET - Buscar todos os pedidos
```
https://projetoposgraduacao-backend.herokuapp.com/pedidos
```
### PUT - Atualizar pedidos
```
https://projetoposgraduacao-backend.herokuapp.com/pedidos
```
Body Request: 
```
{
    "cpf":"123456656",
    "id":1,
    "quantidade": 15
}
```
### GETBuscar Pedido pelo Id
```
https://projetoposgraduacao-backend.herokuapp.com/pedidos/1
```
Body Request: 
```
{
    "cpf":"123456656",
    "id":1,
    "quantidade": 15
}
```
### DELETE - Excluir Pedido
```
https://projetoposgraduacao-backend.herokuapp.com/pedidos/7
```
Body Request: 
```
{
    "cpf":"123456656",
    "id":1,
    "quantidade": 15
}
```
## Produtos

### GET - Buscar Produtos
```
https://projetoposgraduacao-backend.herokuapp.com/produto
```
### GET - Buscar Produtos por ID
```
https://projetoposgraduacao-backend.herokuapp.com/produto/9f2999f5-9a6e-404c-b3bf-0104f305d9c6
```
### POST- Criar Produto
```
https://projetoposgraduacao-backend.herokuapp.com/produto
```
Body Request: 
```
{
    "name_produto": "Produto Teste 03",
    "quantidade_produto": 5,
    "price_produto": 12.5
}
```
### PUT- Editar Produto
```
https://projetoposgraduacao-backend.herokuapp.com/produto
```
Body Request: 
```
{
    "codigo_produto": "bd2a54ad-95c2-42ad-bcea-357117b0d681",
    "nome_produto": "Produto Teste Atualizado 05",
    "quantidade": 8,
    "preco": 21.00
}

```
### DELETE - Excluir Produto
```
https://projetoposgraduacao-backend.herokuapp.com/produto/bd2a54ad-95c2-42ad-bcea-357117b0d681
```
## Item Pedidos
### GET - Buscar Item pedido
```
https://projetoposgraduacao-backend.herokuapp.com/itempedido/1
```
### POST - Criar Item Pedido
```
https://projetoposgraduacao-backend.herokuapp.com/itempedido
```
Body Request:
```
{
    "codigo_pedido": "1818f4da-1813-400d-ad47-35618ea3614f",
    "codigo_produto": "bd2a54ad-95c2-42ad-bcea-357117b0d681",
    "quantidade": 15
}
```
### PUT - Atualizar Item Pedido
```
https://projetoposgraduacao-backend.herokuapp.com/itempedido
```
Body Request:

```
{
    "id":5,
    "codigo_pedido": "1818f4da-1813-400d-ad47-35618ea3614f",
    "codigo_produto": "bd2a54ad-95c2-42ad-bcea-357117b0d681",
    "quantidade": 25
}
```

### DELETE - Deletar Item Pedido
```
https://projetoposgraduacao-backend.herokuapp.com/itempedido/5
```
