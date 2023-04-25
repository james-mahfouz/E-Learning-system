import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>

        <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
        <link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/saga-blue/theme.css" />
        <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.css" />
        <App />
    </div>
);

reportWebVitals();
