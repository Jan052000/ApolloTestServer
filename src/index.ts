import { ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "../DNDSpellsDB/typedefs";
import { resolvers } from "../DNDSpellsDB/resolvers";

const server = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers
});

startStandaloneServer(server).then((server) => {
  console.log(server);
});
