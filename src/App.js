
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './components/Pages/Shop';
import ShopCatagory from './components/Pages/ShopCatagory';
import Product from './components/Pages/Product';
import Cart from './components/Pages/Cart';
import LoginSignUp from './components/Pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import menBanner from './components/Assets/banner_mens.png'
import womenBanner from './components/Assets/banner_women.png'
import kidsBanner from './components/Assets/banner_kids.png'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCatagory banner={menBanner} category="men" />} />
          <Route path='/womens' element={<ShopCatagory banner={womenBanner} category="women" />} />
          <Route path='/kids' element={<ShopCatagory banner={kidsBanner} category="kid" />} />
          <Route path='/products' element={<Product />} />
          <Route path='/:id' element={<Product />} />
          <Route />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignUp />} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
