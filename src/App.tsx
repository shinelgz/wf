
import './assets/App.css'
import {useRoutes, BrowserRouter} from 'react-router-dom';
import {routes} from './routes'
import { Layout} from './applications';

function App() {
  const Elememts = () => useRoutes(routes);
  return (
    <BrowserRouter>
      <Layout>
        <Elememts />
      </Layout>
    </BrowserRouter>
  )
}

export default App
