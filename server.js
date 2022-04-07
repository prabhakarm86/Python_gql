import { ApolloServer, gql } from 'apollo-server';
import { API } from './graphql/datasource.js';
import fs from "fs";
import { resolvers } from "./graphql/resolvers/index.js"

const typeDefs = gql(fs.readFileSync('./graphql/typeDefs.graphql',{encoding:'utf-8'}));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    API: new API()
  })
});

server.listen(3000).then(() => {
  console.log(`Server ready at port 3000`)
});