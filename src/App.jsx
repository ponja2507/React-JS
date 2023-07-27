import { BrowserRouter,Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import { NavBar } from './components';
import { Detalle } from './pages/detalle';
import { Home } from './pages/home';
import { Marca } from './pages/marca';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/item/:id' element={<Detalle />} />
          <Route path='/marca/:id' element={<Marca />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//     <Route path='/' element = {<Home />} />
//       <Route path='/item/:id' element = {<Detalle />} />
//       <Route path='/marca/:id' element = {<Marca />} />

//     </Route>
//   )
// );


// function App() {
//   return (
//     <div>
//       <NavBar />
//       <RouterProvider router={routes} />
//     </div>
//   );
// };

export default App




