//STREAM:: conseguir ler pequenas partes de alguma coisa (como filmes e músicas) e já trabalhar com os dados antes que seja carregado como completo, como Netflix ou Spotify

//readable stream: lendo um arquivo aos poucos
//writable stream: escrevendo as informações de um arquivo aos poucos

//toda porta de entrada e saída é automaticamente uma stream, como o req e res

//stdin:: tudo o que o usuário digita no terminal

//CONSTRUINDO UMA STREAM DE LEITURA
import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1

    //método obrigatório que retorna quais são os dados da stream
    _read() {
        const i = this.index++

        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000)
    }
}

new OneToHundredStream().pipe(process.stdout)