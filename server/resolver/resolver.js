const Author = require('../models/Author')
const Book = require('../models/Book')

const resolvers = {
  // Query
  Query: {
  books: async (parent, args, context) => {
    return await context.mongoDataMethods.getAllBooks();
  },
  bookById: (parent, args) => books.find(book => book.id === args.id),
  authors: () => authors,
  authorById: (parent, args) => authors.find(author => author.id === args.id)
  },

  Book: {
    author: (parent, args) => authors.find(author => author.id.toString() === parent.id)
  },

  Author : {
    books: (parent, args) => books.filter(book => book.authorId.toString() === parent.id)
  },

  // Mutation
  Mutation: {
    createAuthor: async (parent, args) => {
      const newAuthor = new Author(args);
      const savedAuthor =  await newAuthor.save();
      return savedAuthor;
    },
    createBook: async (parent, args) => {
      const newBook = new Book(args);
      return await newBook.save();
    }
  }
}

module.exports = resolvers;