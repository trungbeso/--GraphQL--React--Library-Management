import Author from '../models/Author.js'
import Book from '../models/Book.js'

const resolvers = {
  // Query
  Query: {
  books: async (parent, args, {MongoDataMethods}) => {
    return await MongoDataMethods.getAllBooks();
  },
  bookById: (parent, { id }, {MongoDataMethods}) => MongoDataMethods.getBookById(id),
  authors: async (parent, args, {MongoDataMethods}) =>
    await MongoDataMethods.getAllAuthors(),
  authorById: async (parent, { id }, {MongoDataMethods}) => await MongoDataMethods.getAuthorById(id)
  },

  Book: {
    author: (parent, args, {MongoDataMethods}) => MongoDataMethods.findAuthorOfBook(parent)
  },

  Author : {
    books: (parent, args, {MongoDataMethods}) => MongoDataMethods.findAllBooksByAuthor(parent)
  },

  // Mutation
  Mutation: {
    createAuthor: async (parent, args, {MongoDataMethods}) => MongoDataMethods.createAuthor(args),
    createBook: async (parent, args, {MongoDataMethods}) => MongoDataMethods.createBook(args)
  }
}

export default resolvers;