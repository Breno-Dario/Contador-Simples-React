import React, { useState } from "react";

/*
Estado da aplicação = useState

Mudanças conrridas para vizualização 
*/

// P -> "vOCÊ CLICOU x VEZES"
//Button("clique aqui") onclick =() => return alguma coisa

function Contador({count, incremento, decremento}) {
  //useState = é uma lista de 2 elemento
  //Estado atual da aplicação

  //Função para atualizar o estado

  return (
    <>
      <h2>Contador: {count}</h2>
      <button onClick={incremento} className="btn btn-danger m-2"> + </button>
      <button onClick={decremento} className="btn btn-primary m-2"> - </button>
    </>
  );
}

export default Contador;
