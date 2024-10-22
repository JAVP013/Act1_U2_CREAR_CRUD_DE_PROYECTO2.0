// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloProviderWrapper from './ApolloClient';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProviderWrapper>
      <App />
    </ApolloProviderWrapper>,
  </React.StrictMode>,
  document.getElementById('root')
);
