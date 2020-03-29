import "reflect-metadata";
import { createConnection } from 'typeorm'
import { User } from './entity/User'
console.log('ENvironment', process.env)
createConnection().then(async connection => {
    
    console.log('inserting a new user into the database...')
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await connection.manager.save(user)

    console.log("Saved new user with id: " + user.id)

    console.log("loading users from database")

    const users = await connection.manager.find(User)
    console.log("loaded users", users)

    console.log('READY')
}).catch(error => console.log(error))
// import { ApolloServer, gql } from 'apollo-server'

// const typeDefs = gql`
// type Query {
//     hello(name: String): String!
// }
// `

// const resolvers = {
//     Query: {
//         hello: (_: any, { name }: any) => `Hello ${name || 'World'}`
//     }
// }

// console.log("HI RESTART")
// const server = new ApolloServer({ typeDefs, resolvers })

// server.listen().then(({ url }) => {
//     console.log(`Server ready at ${url}`)
// })