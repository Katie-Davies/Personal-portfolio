import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'


const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App/>} >
    
      
    </Route>
  </>,
)

export default routes