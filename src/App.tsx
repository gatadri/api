import React from 'react';
import ProductList from './components/productList.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Lista de productos</h1>
      <ProductList />
    </div>
  );
};

export default App;
