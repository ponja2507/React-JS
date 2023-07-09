import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar, ItemListContainer } from './components';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='contenedorGral'>
      <NavBar />
      <div className='contenedorGral'>
          <ItemListContainer greeting = {"Hola Mundo"}/>
      </div>
    </div>
  )
};

export default App
