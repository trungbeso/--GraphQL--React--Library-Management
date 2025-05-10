
const resolvers = {
  Query: {
    books:() => [
      {
        id: 1,
        name: 'Harry Potter and the Philosopher\'s Stone',
        genre: 'Fantasy'
      },
      {
        id: 2,
        name: 'The Hobbit',
        genre: 'Fantasy'
      },
      {
        id: 3,
        name: 'The Da Vinci Code',
        genre: 'Thriller'
      }
    ]
  }
}

module.exports = resolvers;