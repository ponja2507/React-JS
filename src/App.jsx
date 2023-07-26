import './App.css'
import { NavBar } from './components';
import { Home } from './pages/home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element = {<NavBar />}>
      <Route path='/' element = {<Home />} />
      {/* <Route path='/' element = {} />
      <Route path='/' element = {} />
      <Route path='/' element = {} />
      <Route path='/' element = {} /> */}
    </Route>
  )
);


function App() {
  return (
    <>
    <div>
      <NavBar />
      {/* <RouterProvider router={routes} /> */}
      <Home />
    </div>
    </>
  );
};

export default App
