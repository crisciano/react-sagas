const executaQuery = require('../database/queries')

class Atendimento {
  list() {
    const sql = `SELECT * FROM calls; SELECT * FROM clients; SELECT * FROM pets; SELECT * FROM services`
    return executaQuery(sql)
                    .then(querys => querys[0].map( call => ({
                        ...call,
                        client:   querys[1].filter(client => client.id === call.clientId)[0],
                        pet:      querys[2].filter(pet => pet.id === call.petId)[0],
                        service:  querys[3].filter(service => service.id === call.serviceId)[0]
                      })
                    ))
                    .then(res => res)
  }

  getById(id) {
    const sql = `SELECT * FROM calls WHERE id=${parseInt(id)}; SELECT * FROM clients; SELECT * FROM pets; SELECT * FROM services`
    return executaQuery(sql)
                    .then(querys=>( 
                      querys[0].map(call => ({
                        ...call,
                        client:   querys[1].filter(client => client.id === call.clientId)[0],
                        pet:      querys[2].filter(pet => pet.id === call.petId)[0],
                        service:  querys[3].filter(service => service.id === call.serviceId)[0]
                      }))
                    ))
                    .then(res => res[0])
  }

  add(item) {
    const { clientId, petId, serviceId, status, obs } = item
    const data = new Date().toLocaleDateString()

    const sql = `INSERT INTO calls(clientId, petId, serviceId, data, status, obs) VALUES("${clientId}", "${petId}", "${serviceId}", "${data}", "${status}", "${obs}")`

    return executaQuery(sql)
                    .then(res => ({
                      ...item,
                      data,
                      id: res.insertId
                    }))
                    // .then(res=> console.log(res))
  }

  update(novoItem) {
    // console.log(novoItem);
    const { clientId, petId, serviceId, status, obs, id } = novoItem
    const data = new Date().toLocaleDateString()
  
    const sql = `UPDATE calls SET clientId="${clientId}", petId="${petId}", serviceId="${serviceId}", data="${data}", status="${status}", obs="${obs}" WHERE id="${id}"; SELECT * FROM clients WHERE id="${clientId}"; SELECT * FROM pets WHERE id="${petId}"; SELECT * FROM services WHERE id="${serviceId}"`

    return executaQuery(sql)
                    .then(querys=>({
                          ...novoItem,
                          client:   querys[1][0],
                          pet:      querys[2][0],
                          service:  querys[3][0]
                    }))
  }

  delete(id) {
    const sql = `DELETE FROM calls WHERE id=${id}`
    return executaQuery(sql)
                    .then(res => id)
  }
}

module.exports = new Atendimento
