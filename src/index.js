import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Bio } from './data/constants';
const root = ReactDOM.createRoot(document.getElementById('root'));
// Update document title from constants for easy customization
if (typeof document !== 'undefined' && Bio?.name) {
  document.title = Bio.name;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

