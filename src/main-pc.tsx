import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import PlatFormContext from './Context'
console.info('pc');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlatFormContext.Provider value={{platform: 'pc'}}>
      <App />
    </PlatFormContext.Provider>
  </React.StrictMode>,
)
