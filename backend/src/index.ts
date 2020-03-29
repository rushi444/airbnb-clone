import "reflect-metadata";
import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
type Query {
    hello(name: String): String!
}
`

const resolvers = {
    Query: {
        hello: (_: any, { name }: any) => `Hello ${name || 'World'}`
    }
}

console.log("HI RESTART")
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
})