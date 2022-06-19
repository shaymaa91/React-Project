import React from 'react';
import ReactDOM from 'react-dom';
import App from './compnents/App/App';
import Home from './compnents/Home/Home';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'


ReactDOM.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>,

    document.getElementById('root')

);