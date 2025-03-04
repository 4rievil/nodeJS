import { Readable, Writable, Transform } from 'node:stream'

//CRIANDO STREAM DE LEITURA
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

//CRIANDO STREAM DE TRANSOFMRAÇÃO
class InverseNumberStream extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString()) * -1
        callback(null, Buffer.from(String(transformed)))
    }
}

//CRIANDO STREAM DE ESCRITA:: recebe dados da stream de leitura e faz algo com os dados
class MultiplyByTenStream extends Writable {
    /**
     * 
     * @param {*} chunck -> pedaço lido enviado pelo this.push
     * @param {*} encoding -> como a informação está codificada
     * @param {*} callback -> função que a stream de escrita chama quando ela termina de fazer o que tinha que fazer com a informação
     */
    _write(chunck, encoding, callback) {
        console.log(Number(chunck.toString()) * 10)
        callback()
    }
}

new OneToHundredStream()
    .pipe(new InverseNumberStream)
    .pipe(new MultiplyByTenStream)