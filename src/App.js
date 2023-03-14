import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './componentes/compartidos/Layout';
import NoEncontrado from './componentes/compartidos/NoEncontrado';
import Lista from './componentes/lista/Lista';
import Detalles from './componentes/nueva/Detalles';
import Modal from './componentes/compartidos/Modal';

function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Layout />}>
        <Route index element={<Lista />} />
        <Route path='/lista' element={<Lista />} >
          <Route path='/lista/:id' element={
          <Modal>
            <Detalles/>
          </Modal>
        }/>
        </Route>
        <Route path='/nueva' element={<Detalles />} />
      </Route>
      
      <Route path='*' element={<NoEncontrado />}></Route>
      
    </Routes>
    
  );
}

export default App;
