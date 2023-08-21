
import './assets/App.css'
import {useRoutes, BrowserRouter} from 'react-router-dom';
import {routes} from './routes'
import { Layout} from './applications';
import { RouterListener } from './applications/components/router-listener';

function App() {
  const Elememts = () => useRoutes(routes);
  
  return (
    <BrowserRouter>
      <RouterListener>
        <Layout>
          <Elememts />
        </Layout>
      </RouterListener>
    </BrowserRouter>
  )
}

export default App
