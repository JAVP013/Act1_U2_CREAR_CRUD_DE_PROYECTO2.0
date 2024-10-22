// frontend/src/App.js
import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTS, CREATE_PROYECT, UPDATE_PROYECT, DELETE_PROYECT } from './queries';

function App() {
  const { loading, error, data } = useQuery(GET_PROYECTS);
  const [createProyect] = useMutation(CREATE_PROYECT);
  const [updateProyect] = useMutation(UPDATE_PROYECT);
  const [deleteProyect] = useMutation(DELETE_PROYECT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Lista de Proyectos</h1>
      <ul>
        {data.proyects.map((proyect) => (
          <li key={proyect._id}>
            {proyect.title} - {proyect.completed ? 'Completado' : 'Incompleto'}
            <button onClick={() => updateProyect({ variables: { id: proyect._id, completed: !proyect.completed } })}>
              Toggle Completar
            </button>
            <button onClick={() => deleteProyect({ variables: { id: proyect._id } })}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => createProyect({ variables: { title: 'Nuevo Proyecto' } })}>
        Crear Proyecto
      </button>
    </div>
  );
}

export default App;
