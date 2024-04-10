const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Data {
  message: String!
  email:String!
}
type Query {
  getAllData: [Data!]!
}  


  
`);

module.exports = {schema};