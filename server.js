import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema.js'; // Note the .js extension
import resolvers from './resolvers.js'; // Note the .js extension

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
