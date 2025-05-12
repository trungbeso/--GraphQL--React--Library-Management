import Book from '../models/Book.js'
import Author from '../models/Author.js'

const MongoDataMethods = {
  getAllBooks: async (condition = null) => condition === null ? await Book.find() : await Book.find(condition),
  getAllAuthors: async () => await Author.find(),

  getBookById: async id => await Book.findById(id),
  getAuthorById: async id => await Author.findById(id),

  createAuthor: async args => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  createBook: async args => {
    const newBook = new Book(args);
    return await newBook.save();
  },

  findAllBooksByAuthor: async parent => await Book.find({ authorId: parent.id }),
  findAuthorOfBook: async parent => await Author.findById(parent.authorId)
}

export default MongoDataMethods;