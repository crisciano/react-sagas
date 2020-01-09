const executaQuery = require('../database/queries')

class Pet {

  list() {
    const sql = 'SELECT pets.id, pets.name, pets.type, pets.obs, clients.id as clientId, clients.name as clientName, clients.cpf as clientCpf FROM Pets INNER JOIN clients WHERE pets.clientId = clients.id'
    return executaQuery(sql)
                      .then(pets => (
                        pets.map( pet => (
                          {
                            ...pet,
                            client: {
                              id: pet.clientId,
                              name: pet.clientName,
                              cpf: pet.clientCpf
                            }
                          }
                        ))
                      ))
  }

  getById(id) {
    const sql = `SELECT pets.id, pets.name, pets.type, pets.obs, clients.id as clientId, clients.name as clientName, clients.cpf as clientCpf FROM pets INNER JOIN clients on clients.id = pets.clientId WHERE pets.id=${parseInt(id)}`
    // const sql = `SELECT * FROM Pets WHERE id=${parseInt(id)}`
    return executaQuery(sql)
                      .then(pet => ({
                        ...pet[0],
                        client: {
                              id: pet[0].clientId,
                              name: pet[0].clientName,
                              cpf: pet[0].clientCpf
                            }
                      }))
  }

  add(item) {
    const { name, clientId, type, obs } = item
    const sql = `INSERT INTO Pets(name, clientId, type, obs) VALUES('${name}', ${clientId}, '${type}', '${obs}')`

    return executaQuery(sql)   
            .then( res => ({
              ...item,
              id: res.insertId
            }))
            .catch( err => console.log(err) )
  }

  update(novoItem) {
    const { name, clientId, type, obs, id } = novoItem
    const sql = `UPDATE Pets SET name='${name}', clientId=${clientId}, type='${type}', obs='${obs}' WHERE id=${id}`
    return executaQuery(sql)
            .then( res => ({
              ...novoItem
            }))
            .catch( err => console.log(err) )
  }

  delete(id) {
    const sql = `DELETE FROM Pets WHERE id=${id}`
    return executaQuery(sql)
              .then(res => id)
  }
}

module.exports = new Pet
