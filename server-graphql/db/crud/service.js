const executaQuery = require('../database/queries')

class Service {

  list() {
    const sql = 'SELECT * FROM services'
    return executaQuery(sql)
                      .then(res => res)
  }

  getById(id) {
    const sql = `SELECT * FROM services WHERE id=${parseInt(id)}`
    return executaQuery(sql)
                      .then(res => res[0] )
  }

  add(item) {
    const { name, price, description } = item
    const sql = `INSERT INTO services(name, price, description) VALUES('${name}', ${price}, '${description}')`
    return executaQuery(sql)
                      .then(res => ({
                        ...item,
                        id: res.insertId
                      }))
  }

  update(novoItem) {
    const { name, price, description, id} = novoItem
    const sql = `UPDATE services SET name='${name}', price=${price}, description='${description}' WHERE id=${id}`

    return executaQuery(sql)
                    .then(res => ({
                      ...novoItem
                    }))
  }

  delete(id) {
    const sql = `DELETE FROM services WHERE id=${id}`
   return executaQuery(sql)
                    .then(res => id)
  }
}

module.exports = new Service
