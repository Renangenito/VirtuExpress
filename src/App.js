import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import NovoProduto from './pages/NovoProduto';
import Produto from './pages/Produto';
import Sobre from './pages/Sobre';
import { AuthProvider } from './contecxts/Auth/AuthProvider';
import { RequireAuth } from './contecxts/Auth/RequireAuth';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
            <Route path='/produtos' element={<RequireAuth><Produtos /></RequireAuth>} />
            <Route path='/sobre' element={<RequireAuth><Sobre /></RequireAuth>} />
            <Route path='/novo-produto' element={<RequireAuth><NovoProduto /></RequireAuth>} />
            <Route path='/produto/:id' element={<RequireAuth><Produto /></RequireAuth>} />
          </Routes>
          < Footer />
        </Router>
      </AuthProvider>
    </div>

  );
}

export default App;
