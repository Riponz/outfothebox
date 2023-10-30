import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, browserHistory } from "react-router-dom";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter history={browserHistory}>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
