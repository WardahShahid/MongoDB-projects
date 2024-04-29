import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SignUp } from './SignUp'
import { Login } from './Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from './Home';


function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<SignUp/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
   </Router>
  )
}

export default App
