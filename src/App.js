import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  //Ternario --> condición ? seMuestra : noSemuestra
  //Condición && seMuestra
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}     
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
