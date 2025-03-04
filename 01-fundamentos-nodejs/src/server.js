import http from 'node:http'

const users = []
//CRIANDO FUNÇÃO HTTP
//request(req):: obtém acesso todas informações da requisições que estão chegando no servidor
//response(res):: devolve uma resposta para quem está chamando o servidor
const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method == 'GET' && url == '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        users.push({
            id: 1,
            name: 'Jane Doe',
            email: 'janedoe@exemple.com'
        })
        return res.writeHead(201).end()
    }
    //status code de criação feita com sucesso
    return res.writeHead(404).end('Not Found')
})

server.listen(3333)