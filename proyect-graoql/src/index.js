// backend/index.js
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schemas/proyectSchemas');  // Importar tus typeDefs
const resolvers = require('./resolvers/proyectResolver');  // Importar resolvers

const startServer = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:admin@tasks.ybekh.mongodb.net/?retryWrites=true&w=majority&appName=TASKS', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    server.listen().then(({ url }) => {
      console.log(`Servidor corriendo en ${url}`);
    });

  } catch (error) {
    console.error('Error al conectar con la base de datos', error);
  }
};

startServer();
