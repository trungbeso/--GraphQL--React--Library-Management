import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Book {
    id: ID!
    name: String
    genre: String
    author: Author
  }

  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }

  # Root type
  type Query {
    books: [Book]
    bookById(id: ID!): Book
    authors: [Author]
    authorById(id: ID!): Author
  }

  type Mutation {
    createAuthor(name: String!, age: Int!): Author
    createBook( name: String!, genre: String!, authorId: ID!): Book
  }
`

export default typeDefs;