
import { Routes, Route, Link } from 'react-router-dom';
import Posts from './Posts';
import Contacts from './Contacts';
import Home from './Home';
import "./App.css"

export default function App() {
  return (

        <div className="links">
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/posts'>Posts</Link>
                </li>
                <li>
                  <Link to='/contacts'>Contacts</Link>
                </li>
              </ul>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/posts' element={<Posts />} />
                  <Route path='/contacts'  element={ <Contacts/>} />
              </Routes>
            </div>
  )
}