import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { LibraryProvider } from './context/LibraryContext';
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <LibraryProvider>
    <App />
  </LibraryProvider>
);
