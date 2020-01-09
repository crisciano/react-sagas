const Operations = require('../db/operations')
const Clients = new Operations('clients')
const Pet = new Operations('pet')
const Services = new Operations('services')
const Calls = new Operations('calls')

module.exports = {
    Query: {
        // query test
        status: () => "Servidor rodando!",

        // query client
        getClient : (root, {id}) => Clients.getById(id),
        clients: () => Clients.list(),

        // query pet
        getPet : (root, {id}) => Pet.getById(id),
        pets: () => Pet.list(),

        // query services
        getService : (root, {id}) => Services.getById(id),
        services: () => Services.list(),

        // query calls
        getCall : (root, {id}) => Calls.getById(id),
        calls: () => Calls.list()


    },
    Mutation: {
        // actions client
        addClient: (root, params) => Clients.add(params),
        updateClient: (root, params) => Clients.update(params),
        deleteClient: (root, {id}) => Clients.delete(id),

        // actions pet
        addPet: (root, params) => Pet.add(params),
        updatePet: (root, params) => Pet.update(params),
        deletePet: (root, {id}) => Pet.delete(id),

        // actions services
        addService: (root, params) => Services.add(params),
        updateService: (root, params) => Services.update(params),
        deleteService: (root, {id}) => Services.delete(id),

        // actions services
        addCall: (root, params) => Calls.add(params),
        updateCall: (root, params) => Calls.update(params),
        deleteCall: (root, {id}) => Calls.delete(id),

    }
}