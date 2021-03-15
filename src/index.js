import React from 'react';
import ReactDOM from 'react-dom';
import './styling/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './fonts/CamptonBold.otf';
import './fonts/CamptonSemiBold.otf';
import './fonts/CamptonMedium.otf';
import './fonts/CamptonBook.otf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
