const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const MONGODB = "mongodb+srv://catafest-work:pass@cluster0.qgeie.mongodb.net/?retryWrites=true&w=majority";

// Apollo Server 
// typeDefs: GraphQL Type Definitions
// resolvers: How do we resolve queries / mutations

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs, 
  resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser:true})
  .then (() => {
    console.log("MongoDB Connection successful");
    return server.listen({port: 5000});
  })
  .then((res) => {
    console.log(`Server running at $(res.url)`)
  });
 