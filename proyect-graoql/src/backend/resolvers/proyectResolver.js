const { query } = require('../../node_modules/express');
const proyectSevices = require('../../services/proyectService');
const { Query } = require('../../node_modules/mongoose');
 
const resolvers = {


    Query: {
        proyects: () => {
            return proyectSevices.getAllProyect();

    
        }

    },

    Mutation: {
        createProyect: (_, { title }) => {

            return proyectSevices.createProyect(title);

        },

        updateProyect: (_, { _id, completed }) => {

            return proyectSevices.updateProyect(_id, completed);

        },

        deleteProyect: (_, { _id }) => {

            return proyectSevices.deleteProyect(_id);

        }   
    }

};

module.exports = resolvers;