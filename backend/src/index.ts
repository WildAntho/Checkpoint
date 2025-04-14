import "reflect-metadata";
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import "reflect-metadata"
import { dataSource } from "./config/db";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolvers/countryResolver";

async function StartGraphQLServer(){
  await dataSource.initialize();
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });
  
  const server = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4100 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
}

StartGraphQLServer()




  