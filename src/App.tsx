import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/Header'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import AboutMe from './Pages/AboutMe'




const App = () => 
{
  return(
    <BrowserRouter>
      {<NavBar/>}
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about-me" element={<AboutMe/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App
