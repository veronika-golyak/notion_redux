import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store'; 
import './style/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter futureFlags={{ v7_startTransition: true }}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);