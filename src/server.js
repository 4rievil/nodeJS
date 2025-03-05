import http from 'node:http'
import { json } from './middlewares/json.js'

const users = []
//CRIANDO FUNÇÃO HTTP
//request(req):: obtém acesso todas informações da requisições que estão chegando no servidor
//response(res):: devolve uma resposta para quem está chamando o servidor
const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    if (method == 'GET' && url == '/users') {
        return res
            .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        const { name, email } = req.body
        users.push({
            id: 1,
            name,
            email,
        })
        return res.writeHead(201).end()
    }
    //status code de criação feita com sucesso
    return res.writeHead(404).end('Not Found')
})

server.listen(3333)