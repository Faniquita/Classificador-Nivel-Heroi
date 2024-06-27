import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

//Components
import Heroi from './components/Heroi';

//Style
import './style/App.css';
import { isNullishCoalesce } from 'typescript';

function App() {

  const [nomePersonagem, setPersonagem] = useState<string>('')
  const [experiencia, setExp]= useState<number>(0)
  const [heroi, setHeroi]= useState<boolean>(false)

  const handleSubmite = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()    

    //Validação dos campos referente ao nosso Herói
    if(!nomePersonagem){
      alert("Nome do Pergonagem Obrigatório!")
      return false
    }else if(!experiencia || experiencia <= 0){
      alert("Quantidade de experiência adquirida não pode ser igual ou menor que 0!")
      return false
    }

    //Renderizando nosso Herói
    renderHero(true)

  }

  const renderHero = (ativo:Boolean) =>{
    setHeroi(true)
    const root = ReactDOM.createRoot(document.getElementById('content-app') as HTMLElement)  
    const HeroiComponent = (<Heroi heroi={nomePersonagem} experiencia={experiencia} ></Heroi>)
    root.render(HeroiComponent) 
  }

  

  return (
    <>
      <div id="content-app">
        <form id="formulario-heroi" onSubmit={handleSubmite}>
          <input 
            type="text" 
            placeholder="Nome do Personagem" 
            value={nomePersonagem} 
            onChange={(e) => setPersonagem(e.target.value)}
          />
          <input 
            type="number" 
            placeholder="Experiência"
            value={experiencia}
            onChange={(e) => setExp(parseInt(e.target.value))}
          />
          <button type="submit">Up</button>
        </form>
      </div>          
    </>
  );
}

export default App;
