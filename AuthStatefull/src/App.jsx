import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Components/login';
import Signup from './Components/signup';
import Dashboard from './Components/dashboard';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login'element= {<Login/>}/>
          <Route path='/signup'element= {<Signup/>}/>
          <Route path='/Dashboard'element = {<Dashboard/>}/>
        </Routes>
      </Router> 
    </>
  )
}

export default App
