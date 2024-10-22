// frontend/src/queries.js
import { gql } from '@apollo/client';

// Query para obtener todos los proyectos
export const GET_PROYECTS = gql`
  query GetProyects {
    proyects {
      _id
      title
      completed
    }
  }
`;

// Mutación para crear un nuevo proyecto
export const CREATE_PROYECT = gql`
  mutation CreateProyect($title: String!) {
    createProyect(title: $title) {
      _id
      title
      completed
    }
  }
`;

// Mutación para actualizar un proyecto
export const UPDATE_PROYECT = gql`
  mutation UpdateProyect($id: ID!, $completed: Boolean!) {
    updateProyect(_id: $id, completed: $completed) {
      _id
      title
      completed
    }
  }
`;

// Mutación para eliminar un proyecto
export const DELETE_PROYECT = gql`
  mutation DeleteProyect($id: ID!) {
    deleteProyect(_id: $id) {
      _id
      title
      completed
    }
  }
`;
