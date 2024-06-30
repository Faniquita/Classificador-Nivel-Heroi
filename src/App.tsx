import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import ToastAnimated, { showToast } from './form-utils/toastForms';

//Components
import Heroi from './components/Heroi';

//Style
import './style/App.css';

function App() {

  const [nomePersonagem, setPersonagem] = useState<string>('')
  const [experiencia, setExp]= useState<number>(0)
  const [heroi, setHeroi]= useState<boolean>(false)
  const [sexo, setSexo]= useState<string>('')

  
  const handleSubmite = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()    

    //Validação dos campos referente ao nosso Herói
    if(!nomePersonagem){            
      showToast({typeToast:"failed", messageToast:"Nome do Pergonagem Obrigatório!"})
      return false
    }else if(!experiencia || experiencia <= 0){
      showToast({typeToast:"failed", messageToast:"Quantidade de experiência adquirida não pode ser igual ou menor que 0!"})
      return false
    }else if(!sexo){
      showToast({typeToast:"failed", messageToast:"Selecione o sexo do seu Heroi!"})
      return false
    }

    //Renderizando nosso Herói
    renderHero(true)
  }

  const renderHero = (ativo:Boolean) =>{
    setHeroi(true)
    const root = ReactDOM.createRoot(document.getElementById('content-app') as HTMLElement)  
    const HeroiComponent = (<Heroi heroi={nomePersonagem} experiencia={experiencia} sexo={sexo} ></Heroi>)
    root.render(HeroiComponent) 
  }

  

  return (
    <>
      <div id="content-app"> 
        <div className='title'>
          <h1>Classificação Herói</h1>
          <img width="64" height="64" src="https://img.icons8.com/dusk/64/elden-ring.png" alt="elden-ring"/>
        </div>    
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

          <div>
            <label htmlFor="masculino">Masculino</label>
            <input 
              type="radio" 
              id="masculino"
              value="masculino"
              onChange={(e) => setSexo(e.target.value)}
              checked={sexo === "masculino"}
            />

            <label htmlFor="feminino">Feminino</label>
            <input 
              type="radio" 
              id="feminino"
              value="feminino"
              onChange={(e) => setSexo(e.target.value)}
              checked={sexo === "feminino"}
            />
          </div>
          <button type="submit">Up</button>
        </form>  
        <ToastAnimated />              
      </div>          
    </>
  );
}

export default App;
