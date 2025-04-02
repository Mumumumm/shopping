import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './mainLayout';
import Welcome from './welcome';
import Product from './product';
import ShopCart from './shopping_cart';
import Payment from './payment';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout title="Shopping" />}>
          <Route index element={<Welcome />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/shpping_cart' element={<ShopCart />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
