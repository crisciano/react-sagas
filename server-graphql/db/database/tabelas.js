class Tabelas {
  init(conexao) {
    this.conexao = conexao
    this.createClients()
    this.createPets()
    this.createServices()
    this.createcalls()

    console.log('tabelas createdas!')
  }

  createClients() {
    const sql = 'CREATE TABLE IF NOT EXISTS Clients (id int NOT NULL AUTO_INCREMENT, name varchar(150) NOT NULL, cpf char(11) NOT NULL, PRIMARY KEY (id));'
    this.createTabela(sql)
  }

  createPets() {
    const sql = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, name varchar(150), clientId int, type varchar(100), obs text, PRIMARY KEY (id), FOREIGN KEY (clientId) references Clients(id))'
    this.createTabela(sql)
  }

  createServices() {
    const sql = 'CREATE TABLE IF NOT EXISTS Services (id int NOT NULL AUTO_INCREMENT, name varchar(150), price decimal(5,2), description text, PRIMARY KEY (id))'
    this.createTabela(sql)
  }

  createcalls() {
    const sql = 'CREATE TABLE IF NOT EXISTS calls (id int NOT NULL AUTO_INCREMENT, clientId int, petId int, serviceId int, data datetime, status varchar(100), obs text, PRIMARY KEY(id), FOREIGN KEY (clientId) references Clients(id), FOREIGN KEY (petId) references Pets(id), FOREIGN KEY (serviceId) references Services(id))'
    this.createTabela(sql)
  }

  createTabela(sql) {
    this.conexao.query(sql, erro => {
      if(erro) {
        console.log(erro)
      }
    })
  }
}



module.exports = new Tabelas
