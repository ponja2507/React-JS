import { BrowserRouter,Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import { NavBar } from './components';
import { Detalle } from './pages/detalle';
import { Home } from './pages/home';
import { Marca } from './pages/marca';
import { CartProvider } from './state/Cart.context';
import { Cart } from './pages/cart';


function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/item/:id' element={<Detalle />} />
            <Route path='/marca/:id' element={<Marca />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App




