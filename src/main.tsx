import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { CityProvider } from './hooks/CityContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CityProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CityProvider>
);
