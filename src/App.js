import './App.css';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import ProductList from './components/products/ProductList';
import {products} from "./components/products/mockData";

function App() {
  return (
    <>
      <Header />
      <div className="container is-fullhd">
        <Hero />
        <ProductList products={products}/>
      </div>
    </>
  );
}

export default App;
