import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PlatFormContext from './Context'

console.info('h5');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlatFormContext.Provider value={{platform: 'h5'}}>
      <App />
    </PlatFormContext.Provider>
  </React.StrictMode>,
)
