# Notas sobre Desenvolvimento com JavaScript e HTTP

## Inicialização de Projetos com NPM

### `npm init -y`
Cria o arquivo `package.json`, essencial em projetos JavaScript. O parâmetro `-y` responde "yes" automaticamente para todas as perguntas, gerando um arquivo com as configurações padrão. Esse arquivo armazena informações sobre o projeto, incluindo dependências de terceiros, como frameworks e bibliotecas.

---

## Rotas

As rotas são os caminhos dentro de uma aplicação ou API. Elas definem os pontos de entrada para o frontend ou qualquer outro consumidor da API, permitindo a execução de diferentes operações no backend.

### Estrutura de uma Rota
Uma rota é composta pelo **método HTTP** e pela **URL**. Exemplo:
- `GET /users` → Obtém a lista de usuários do backend.
- `POST /users` → Cria um novo usuário no backend.

---

## Métodos HTTP
Os métodos HTTP determinam a ação que será realizada sobre um recurso no backend.

- **GET** → Busca um recurso no backend.
- **POST** → Cria um novo recurso no backend.
- **PUT** → Atualiza um recurso existente no backend (geralmente toda a entidade).
- **PATCH** → Atualiza uma parte específica de um recurso no backend.
- **DELETE** → Remove um recurso do backend.

### Exemplo de Rotas HTTP
```plaintext
GET /products → Retorna a lista de produtos.
POST /products → Cria um novo produto.
PUT /products/:id → Atualiza um produto inteiro pelo ID.
PATCH /products/:id → Atualiza apenas um campo específico de um produto.
DELETE /products/:id → Remove um produto pelo ID.
```

Com essas definições, sua API pode ser consumida de forma organizada e previsível.

---

## Stateful e Stateless

### **STATEFUL**
Uma aplicação stateful sempre mantém algum tipo de informação em memória, ou seja, depende da memória para continuar funcionando corretamente. Se a aplicação for interrompida, ela pode apresentar um comportamento diferente ao ser reiniciada.

### **STATELESS**
As informações não são armazenadas em memória; em vez disso, são salvas em bancos de dados, arquivos ou outros meios persistentes. Como resultado, a aplicação pode ser interrompida e reiniciada sem perder dados ou alterar seu funcionamento.

---

## Cabeçalhos (Requisição/Resposta)
Os cabeçalhos HTTP são metadados que auxiliam o backend e o frontend a interpretar corretamente a requisição e a resposta. Eles fornecem informações como formato dos dados, tipo de autenticação, idioma, entre outros.

Exemplo de cabeçalhos comuns:
```plaintext
Content-Type: application/json
Authorization: Bearer <token>
Accept-Language: en-US
```

---

## HTTP Status Codes
Os códigos de status HTTP indicam o resultado de uma requisição.

- **100 - 199** → Informações adicionais para o cliente.
- **200 - 299** → Requisição bem-sucedida.
- **300 - 399** → Redirecionamentos.
- **400 - 499** → Erros causados por requisições inválidas (exemplo: `404 Not Found`).
- **500 - 599** → Erros internos no servidor (exemplo: `500 Internal Server Error`).

### Streams
As streams permitem processar dados de forma contínua, lendo ou escrevendo em partes, sem precisar carregar tudo de uma vez. São úteis para lidar com arquivos grandes, como vídeos e músicas, permitindo que os dados sejam utilizados antes do carregamento completo.

**Tipos de Streams**

- Readable Stream → Permite ler um arquivo aos poucos.
- Writable Stream → Permite escrever informações em um arquivo de forma progressiva.
- Transform Stream → Transforma um dado (chunk) em outro
Todas as portas de entrada e saída são automaticamente streams, como req e res em aplicações web.

**Exemplos de Streams**
Netflix ou Spotify utilizam streams para carregar e exibir conteúdo antes do download completo.

stdin → Representa tudo o que o usuário digita no terminal.
stdout → Representa tudo o que o terminal devole em resposta