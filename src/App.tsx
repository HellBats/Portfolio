import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'





const App = () => 
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="h-screen w-screen bg-orange-300 text-white flex items-center justify-center">
            <Home></Home>
            </div>
          }/>
        <Route path="/resume"/>
      </Routes>
    </BrowserRouter>
    )
}

export default App;
