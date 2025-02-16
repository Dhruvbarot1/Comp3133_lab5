const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./movieSchema');
const resolvers = require('./movieResolvers');

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
  server.applyMiddleware({ app });
  app.listen({ port: 4000 }, () => {
    console.log('🚀 Server ready at http://localhost:4000' + server.graphqlPath);
  });
});
