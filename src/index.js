import React from 'react';
import ReactDom from 'react-dom/client';
import App from './component/App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const root = ReactDom.createRoot(document.querySelector('#root'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

