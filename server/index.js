const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./schema/schema.js')
const resolvers = require('./resolvers/resolver.js')
//
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
//
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
//
//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }
//
//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;
//
// const books = [
//   {
//     title: 'Harry Potter and the Chamber of Secrets',
//     author: 'J.K. Rowling',
//   },
//   {
//     title: 'Jurassic Park',
//     author: 'Michael Crichton',
//   },
// ];
const apollo = new ApolloServer({typeDefs,resolvers})

apollo.listen().then(({url})=>{
  console.log(`🚀  Server ready at ${url}`);
})
