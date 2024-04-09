const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
    message: String
    email : String
  }

  type Mutation {
    setMessage(message: String!): String
    setEmail(email: String!): String
  }
`);

module.exports = {schema};