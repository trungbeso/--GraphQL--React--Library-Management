const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

// Load schema and resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

//load mongdb methods
const mongoDbMethods = require('./data/data')

//connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('', {
      dbName: 'library-management'
    })
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
}

async function startServer() {
  await connectDB();

  const server =  new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDbMethods })
});

await server.start();

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
}

startServer();
