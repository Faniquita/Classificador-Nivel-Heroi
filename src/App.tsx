import React from 'react';
import './style/App.css';

function App() {


  const headClick = () => {
    alert("Clicado")
  }

  return (
    <>
      <div>
        <form action="">
          <input type='text' placeholder='Nome do Personagem'></input>
          <input type='number' placeholder='Experiência'></input>
          <button onClick={headClick}>OK</button>
        </form>
      </div>

      <div></div>
    </>
  );
}

export default App;
