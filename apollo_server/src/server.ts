import path from "path";
import fs from "fs";

import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers/resolvers";

const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, "./schema/schema.graphql"),
    "utf-8"
  ),
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`);
});
