import './App.css';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import ProductList from './components/products/ProductList';
import { products } from "./components/products/mockData";
import { CartContextProvider } from './components/cart/cartContext-latest';

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
