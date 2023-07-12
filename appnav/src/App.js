import './App.css';
import { Route, Routes } from 'react-router-dom';
import MenuNav from './componentes/navegacion';
import Inicio from './componentes/inicio';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MenuNav></MenuNav>}>
          <Route path='/' element={<Inicio></Inicio>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;