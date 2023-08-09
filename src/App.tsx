
import './assets/App.css'
import '/node_modules/ssc-ui-react/dist/ssc-ui-react.css'
import {useRoutes, BrowserRouter} from 'react-router-dom';
import {routes} from './routes'

function App() {
  const Eles = () => useRoutes(routes);
  return (
    <BrowserRouter>
        <Eles />
    </BrowserRouter>
  )
}

export default App
