
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Clientes from './components/Clientes';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavBarExample from './layouts/navbar';
import Productor from './components/Productor';
import FechaEstreno from './components/FechaEstreno';
import Director from './components/Director';
import Protagonista from './components/Protagonista';
import Alquileres from './components/Alquileres';
import AlquileresDelDia from './components/AlquileresDelDia';
import ClienteMasFrecuente from './components/ClienteMasFrecuente';
import ClienteID from './components/ClienteID';
import JuegoMasRentado from './components/JuegoMasRentado';
import Juegos from './components/Juegos';
function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route path='Clientes' element={ <Clientes /> } />
    <Route path='Juegos' element={ <Juegos /> } />
    <Route path='ClienteID/:id' element={ <ClienteID /> } />
    <Route path='ClienteMasFrecuente' element={ <ClienteMasFrecuente /> } />
    <Route path='Alquileres' element={ <Alquileres /> } />
    <Route path='AlquileresDelDia' element={ <AlquileresDelDia /> } />
    <Route path='Productor' element={ <Productor /> } />
    <Route path='FechaEstreno' element={ <FechaEstreno /> } />
    <Route path='Director' element={ <Director /> } /> 
    <Route path='Protagonista' element={ <Protagonista /> } />
    <Route path='JuegoMasRentado' element={ <JuegoMasRentado /> } />
   
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}



export default App;

