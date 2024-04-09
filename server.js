const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');
const bodyParser = require("body-parser"); 
const app = express();
const { default: expressPlayground } = require('graphql-playground-middleware-express');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/graphql", graphqlHTTP((req) => ({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
})));


app.get("/", expressPlayground({ endpoint: "/graphql" }));
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
