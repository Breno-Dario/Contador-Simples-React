import './App.css';
import React, { useState } from "react";
import Contador from './components/CSS/contador';

function App() {
  const [contador, setContador] = useState(0)

  const increment = ()=> setContador(contador + 1) 
  const decrement = ()=> setContador(contador - 1)

  return (
    <div className='container text-center mt-5'>
      <h1>Contador Simples:</h1>
    <Contador count={contador} incremento={increment} decremento={decrement}/>
    </div>
  );
}

export default App;
