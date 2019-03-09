require('dotenv').config();
const express = require('express');
const express_graphql = require('express-graphql');

const schema = require('../graphql/schema');
const resolvers = require('../graphql/resolvers');

const PORT = process.env.PORT || 4000;
// Create an express server and a GraphQL endpoint
const app = express();
app.use(
  '/graphql',
  express_graphql({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
  })
);

const init = () => {
  app.listen(PORT, () =>
    console.log(
      `Express GraphQL Server Now Running On localhost:${PORT}/graphql`
    )
  );
};

module.exports = { init, app };
