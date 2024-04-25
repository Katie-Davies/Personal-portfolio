import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Learning from './components/Learning'



const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App/>}>
      <Route path="about" element={<About/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="learning" element={<Learning/>}/>
      <Route path="contact" element={<Contact/>}/>  
    </Route>
  </>,
)

export default routes