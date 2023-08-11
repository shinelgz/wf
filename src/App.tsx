
import './assets/App.css'
import {useRoutes, BrowserRouter} from 'react-router-dom';
import {routes} from './routes'
function App() {
  const Elememts = () => useRoutes(routes);
  return (
    <BrowserRouter>
        <Elememts />
    </BrowserRouter>
  )
}

export default App
