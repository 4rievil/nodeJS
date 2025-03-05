//criando um banco de dados local
import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
    #database = {}

    constructor() {
        fs.readFile(databasePath, 'utf8')
            .then(data => {
                this.#database = JSON.parse(data)
            })
            .catch(() => {
                this.#persist()
            })
    }

    //método para escrever o banco de dados em um arquivo físico
    #persist() {
        fs.writeFile('db.json', JSON.stringify(this.#database))
    }

    //passa a tabela selecionada para retornar os dados
    select(table) {
        const data = this.#database[table] ?? []

        return data
    }
    //recebe a tabela e os dados da inserção
    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }
        this.#persist();

        return data
    }
}