import './App.css';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import ProductList from './components/product/ProductList';
import { products } from "./components/product/mockData";
import { CartContextProvider } from './components/cart/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <div className="container is-fullhd">
        <Hero />
        <ProductList products={products}/>
      </div>
    </CartContextProvider>
  );
}

export default App
