//representação de um espaço na memória do computador usado para transitar dados de maneira rápida. os dados armazenados (em binário) no buffer logo são tratados/enviados para algum lugar e depois removidos.

const buf = Buffer.from("vambora")
console.log(buf.toJSON())