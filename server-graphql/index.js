const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers/resolvers')
const conexao = require('./db/conexao')
const Tables = require('./db/database/tabelas')

Tables.init(conexao)

const server = new GraphQLServer({ 
  typeDefs: './schema/schema.graphql', 
  resolvers 
})

server.start(
  () => console.log('Server is running on localhost:4000')
)