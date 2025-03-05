import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './middlewares/routes.js'


//CRIANDO FUNÇÃO HTTP
//request(req):: obtém acesso todas informações da requisições que estão chegando no servidor
//response(res):: devolve uma resposta para quem está chamando o servidor
const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path === url
    })

    if (route) {
        return route.handler(req, res)
    }

    //status code de criação feita com sucesso
    return res.writeHead(404).end('Not Found')
})

server.listen(3333)