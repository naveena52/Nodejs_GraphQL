const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.get('/', (_, res) => {
  res.redirect('/graphql');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
