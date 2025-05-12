import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';

// Load schema and resolvers
import typeDefs from './schema/schema.js';
import resolvers from './resolver/resolver.js';

//load mongdb methods
import MongoDataMethods from './data/data.js'

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
  context: () => ({ MongoDataMethods })
});

await server.start();

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
}

startServer();
