import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/products/ProductList';

function App() {
  return (
    <>
      <Header />
      <div className="container is-fluid is-max-widescreen">
        <Hero />
        <ProductList />
      </div>
    </>
  );
}

export default App;
