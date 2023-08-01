import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'
import './assets/index.h5.less'
import PlatFormContext from './utils/Context'

console.info('h5');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlatFormContext.Provider value={{platform: 'h5'}}>
      <App />
    </PlatFormContext.Provider>
  </React.StrictMode>,
)
