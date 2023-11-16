import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ProductCard from './Components/ProductCard';



function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting='Ofertón de Productos '/>

    <ProductCard title='Producto 1' price={999.99} img=""/>
    <p>Aprovecha este producto por oferta limitada!</p>
    <button>Comprar ya !!!</button>

    <ProductCard title='Producto 2' price={149.99} img=""/>
    <p>Aprovecha este producto por oferta limitada!</p>
    <button>Comprar ya !!!</button>

    <ProductCard title='Producto 3' price={129.99} img=""/>
    <p>Aprovecha este producto por oferta limitada!</p>
    <button>Suscribite !!!</button>




    
    </div>



  );

}

export default App;