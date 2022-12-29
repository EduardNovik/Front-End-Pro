import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <Navigation/>
    <App />
  </React.StrictMode>,
)
