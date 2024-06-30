import React, {useState} from 'react';

//Style
import './style/index.css';

type HeroiProps = {
    heroi: string;
    experiencia: number;
    sexo: string;
}

function Heroi({heroi, experiencia, sexo}:HeroiProps){
     
    //MONTANDO TITULO DO HEROI
    const functionTitle = (expValidado:number) => {
        let titleText:string

        //Título
        if(expValidado < 1000){
            return titleText = 'Ferro'
        }else if(expValidado >=1001 && expValidado <= 2000){
            return titleText = 'Bronze'
        }else if(expValidado >=2001 && expValidado <= 5000){
            return titleText = 'Prata'
        }else if(expValidado >=5001 && expValidado <= 7000){
            return titleText = 'Ouro'
        }else if(expValidado >=7001 && expValidado <= 8000){
            return titleText = 'Platina'
        }else if(expValidado >=8001 && expValidado <= 9000){
            return titleText = 'Ascendente'
        }else if(expValidado >=9001 && expValidado <= 10000){
            return titleText = 'Imortal'
        }else if(expValidado >= 10001){
            return titleText = 'Radiante'
        }else{
            return titleText = 'Iniciante'
        }
    }

    //MONTANDO NÍVEL DO HEROI
    const functionNivel = (expValidado:number) => {
        let nivelExp:number

        //Título
        if(expValidado < 1000){
            return nivelExp = 20
        }else if(expValidado >=1001 && expValidado <= 2000){
            return nivelExp = 30
        }else if(expValidado >=2001 && expValidado <= 5000){
            return nivelExp = 50
        }else if(expValidado >=5001 && expValidado <= 7000){
            return nivelExp = 60
        }else if(expValidado >=7001 && expValidado <= 8000){
            return nivelExp = 70
        }else if(expValidado >=8001 && expValidado <= 9000){
            return nivelExp = 80
        }else if(expValidado >=9001 && expValidado <= 10000){
            return nivelExp = 90
        }else if(expValidado >= 10001){
            return nivelExp = 999
        }else{
            return nivelExp = 0
        }

    }   

    //MONTANDO INFORMAÇÃO GERAL DO HEROI
    const cartaoHeroi = (expValidado:number, heroi:string) => {
        let title:string, informacao:string

        title = functionTitle(expValidado) ?? "Iniciante"

        //Montando Informação
        informacao = `O Herói de nome ${heroi} está no nível de ${title} `
        return informacao
    }

    //MONTANDO CARACTERES DO HEROI
    const functionSexo = (sexoHeroi:string)=>{
        let imgSrcSexoHeroi:string

        if(sexoHeroi === 'feminino'){   
            return imgSrcSexoHeroi = require('./img/sexo-feminino.png')
        }else{
            return imgSrcSexoHeroi = require('./img/sexo-masculino.png')
        }        
    } 

    const functionHeroi = (caractereSexo:string)=>{
        let imgSrcHeroi:string
        if(caractereSexo === 'feminino'){   
            return imgSrcHeroi = require('./img/pj1.png')
        }else{
            return imgSrcHeroi = require('./img/pj2.png')
        }         
    } 

    //------------------------------------------------------------------//
    const [currentExp, setCurrentExp] = useState<number>(experiencia);
    const [currentNivel, setCurrentNivel] = useState<number>(functionNivel(experiencia));
    const [currentTitulo, setCurrentTitulo] = useState<string>(functionTitle(experiencia));
    const [currentSexo, setCurrentSexo] = useState<string>(functionSexo(sexo));
    const [currentHeroi, setCurrentHeroi] = useState<string>(functionHeroi(sexo));
    const [currentInformacao, setCurrentInformacao] = useState<string>(cartaoHeroi(experiencia, heroi));

    const [exp, setExp]= useState<number>(0)    

    //VALIDANDO FORMULÁRIO PARA SUBIR DE LEVEL NOVAMENTE
    const handleSubmite = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()              
        
        //Subindo de Level

        //Laço de repetição apenas para o desafio
        //Funciona apenas dentro de uma função async em React para atualização em tempo real
        let targetExp = currentExp + exp;
        let countXP = currentExp

        const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms))

        console.log(targetExp)
        console.log(countXP)
        while(countXP <= targetExp && countXP <= 10001){
            setCurrentExp(countXP)
            countXP++
            await sleep(50)
        }
              
        // setInterval funciona melhor como "Laço de repetição" em tempo rela no React, deixando mais simples
        /*let interval = setInterval(() => {
            if (countXP < targetExp && countXP < 10001) {
                countXP++
                setCurrentExp(countXP);
            } else {
                clearInterval(interval);
            }
        }, 100)*/
                
        //Atualizando status
        setCurrentNivel(functionNivel(targetExp))
        setCurrentTitulo(functionTitle(targetExp))
        setCurrentInformacao(cartaoHeroi(targetExp, heroi))

    }

    //------------------------------------------------------------------//
    return(        
        <>
            <div className='title'>
                <h1>Classificação Herói</h1>
                <img width="64" height="64" src="https://img.icons8.com/dusk/64/elden-ring.png" alt="elden-ring"/>
            </div>
            <div className="content-personagem">                
                <div id="personagem">
                    <img src={currentHeroi} alt="Herói" />
                </div>
                <div className="informacoes">
                    <div id="nome">
                        {heroi}
                        <img src={currentSexo} alt={sexo} />
                    </div>
                    <div id="titulo">{currentTitulo}</div>
                    <div id="level">Level {currentNivel}</div>
                    <div id="experiencia"> {currentExp} / 10001 </div>                    
                    <div id="texto">{currentInformacao}</div>            
                </div>            
            </div>
            <div>
                <form id="form-up-heroi" onSubmit={handleSubmite}>
                    <input 
                        type="number" 
                        placeholder="Experiência"
                        value={exp}
                        onChange={(e) => setExp(parseInt(e.target.value))}
                    />
                    <button type="submit">Ganhar</button>
                </form>
            </div>
        </>
        
    )
}
  
export default Heroi;
  