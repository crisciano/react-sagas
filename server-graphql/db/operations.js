const cruds = require('./crud/index')

class Operations {
  constructor(entidade) {
    this._entidade = entidade
  }

  list() {
    return cruds[this._entidade].list()
  }
  
  getById(id) {
    return cruds[this._entidade].getById(id)
  }

  buscaPorId(id) {
    return cruds[this._entidade].buscaPorId(id)
  }

  add(item) {
    return cruds[this._entidade].add(item)
  }
  
  delete(id) {
    return cruds[this._entidade].delete(id)
  }

  update(novoItem) {
    return cruds[this._entidade].update(novoItem)
  }

  atualiza(novoItem, id) {
    return cruds[this._entidade].atualiza(novoItem, id)
  }

}

module.exports = Operations
