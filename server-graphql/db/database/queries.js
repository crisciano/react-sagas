const conexao = require('../conexao')

const executaQuery = (query) => {
  return new Promise( (resolve, reject) => {
    console.log('========== query =========');
    conexao.query(query, (erro, resultados, campos) => {
      erro ? reject(erro) : resolve(resultados)
    })
  })
}

module.exports = executaQuery
