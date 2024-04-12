import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Listar from './views/listar/listar';
import Home from './views/home/home';
import Buscar from './views/buscar/buscar';



function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/listar" element={<Listar />} />
                <Route path='/buscar' element={<Buscar />}></Route>
            </Routes>
        </Router>
  )
}

export default App
