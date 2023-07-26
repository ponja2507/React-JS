import { BrowserRouter,Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import { NavBar } from './components';
import { Detalle } from './pages/detalle';
import { Home } from './pages/home';
import { Marca } from './pages/marca';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element = {<NavBar />}>

    <Route path='/' element = {<Home />} />
      <Route path='/item:id' element = {<Detalle />} />
      <Route path='/marca:id' element = {<Marca />} />

    </Route>
  )
);


function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App









{/* <NavBar />
<BrowserRouter>
<Routes>
<Route path='/' element = {<Home />} />
</Routes>
</BrowserRouter> */}

// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';






// function App() {
//   return (
//     <>
//     <div>
//       <NavBar />
//       {/* <RouterProvider router={routes} /> */}
//       <Home />
//     </div>
//     </>
//   );
// };

