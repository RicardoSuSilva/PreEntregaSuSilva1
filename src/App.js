import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartWidget from './Components/CartWidget/CartWidget';
import Ropa from './Components/Ropa';
import Calzado from './Components/Calzado';
import Gorras from './Components/Gorras';
import Error from './Components/Error';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>

    <Routes>

      <Route path='/' element={ <ItemListContainer greeting='Catalogo de Productos'/> } />
      <Route path='/' element={ <ItemListContainer greeting='Catalogo'/> } />
      <Route path='/ropa' element={ <Ropa /> } />
      <Route path='/calzado' element={ <Calzado /> } />
      <Route path='/gorras' element={ <Gorras /> } />
      <Route path='/cart' element={ <CartWidget /> } />
      <Route path='*' element={ <Error />} />
    
    </Routes>

    </BrowserRouter>

    </div>

  );

}

export default App;