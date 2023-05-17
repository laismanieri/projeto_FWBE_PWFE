//Bibliotecas
import {Route, Routes, BrowserRouter} from 'react-router-dom';

// Estilo
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Pages/Home';
import Tabela from './Pages/Tabela';
import Dashboard from './Pages/Dashboard';
import Inicial from './Pages/Inicial';
import Search from './Pages/Search';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = {<Home/>} path='/' exact>
            
            <Route element = {<Tabela/>} path='/tabela'/>
            <Route element = {<Inicial/>} path='/'/>
          </Route>
          <Route element = {<Dashboard/>} path='/dashboard'></Route>
          <Route element = {<Search/>} path='/search'></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
