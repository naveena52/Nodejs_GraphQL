const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Data {
  message: String!
  email:String!
}
type Query {
  getAllData: [Data!]!
}  


  type Mutation {
    setMessage(message: String!): String
    setEmail(email: String!): String
  }
`);

module.exports = {schema};