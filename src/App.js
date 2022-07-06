import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import NovoProduto from './pages/NovoProduto';
import Produto from './pages/Produto';
import Sobre from './pages/Sobre';


function App() {
  return (
    <div className="App">
        
        < Router>
        <NavBar/>
          <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/produtos' element={<Produtos />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/novo-produto' element={<NovoProduto />} />
              <Route path='/produto/:id' element={<Produto />} />
          </Routes>
          < Footer />
        </Router>
    </div>
    
  );
}

export default App;
