import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/products/ProductList';
import {products} from "./components/products/mockData";

function App() {
  return (
    <>
      <Header />
      <div className="container is-fullhd">
        <Hero />
        <ProductList products={[]}/>
      </div>
    </>
  );
}

export default App;
