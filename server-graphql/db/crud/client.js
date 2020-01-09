const executaQuery = require('../database/queries')

class Client {
  list() {
    const sql = 'SELECT * FROM Clients; SELECT * FROM pets'
    return executaQuery(sql)
                      .then(querys => (
                        querys[0].map( client => ({
                          ...client,
                          pets: querys[1].filter(pet => pet.clientId === client.id)
                        }))
                      ))
  }

  getById(id) {
    const sql = `SELECT * FROM Clients WHERE id=${id};  SELECT * FROM pets`
    return executaQuery(sql)
                      .then(querys => (
                        querys[0].map( client => ({
                          ...client,
                          pets: querys[1].filter(pet => pet.clientId === client.id)
                        }))
                      ))
                      .then( res => res[0] )
  }

  add(item) {
    const { name, cpf } = item
    const sql = `INSERT INTO Clients(name, CPF) VALUES('${name}', '${cpf}')`

    return executaQuery(sql)   
            .then( res => ({
              id: res.insertId,
              name,
              cpf
            }))
            .catch( err => console.log(err) )
  }

  update(novoItem) {
    const { id, name, cpf } = novoItem
    const sql = `UPDATE clients SET name='${name}', cpf='${cpf}' WHERE id=${id}`
    return executaQuery(sql)
            .then( res => ({
              id,
              name,
              cpf
            }))
            .catch( err => console.log(err) )
  }

  delete(id) {
    console.log(id);
    const sql = `DELETE FROM Clients WHERE id=${id}`
    return executaQuery(sql)
              .then(res => id)
  }
}

module.exports = new Client
