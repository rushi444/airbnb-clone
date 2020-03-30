import "reflect-metadata";
import { importSchema } from 'graphql-import'
import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers'
import * as path from 'path'
import { createConnection } from "typeorm";

const typeDefs = importSchema(path.join(__dirname, "./schema.graphql"))

const server = new ApolloServer({ typeDefs, resolvers })

createConnection().then(() => {
    server.listen().then(({ url }) => {
        console.log(`Server ready at ${url}`)
    })
})

