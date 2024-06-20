import React, {useState} from 'react';

//Style
import './style/index.css';

type HeroiProps = {
    heroi: string;
    experiencia: number
}

function Heroi({heroi, experiencia}:HeroiProps){
    const [exp, setExp]= useState<number>(0)

    const chibi = require('./img/pj1.png')

    let title:string, informacao:string, nivel:number

    //Chamando informações para preencher

    const handleSubmite = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()      
        
        //Título
        if(experiencia < 1000){
            title = 'Ferro'
        }else if(experiencia >=1001 && experiencia <= 2000){
            title = 'Bronze'
        }else if(experiencia >=2001 && experiencia <= 5000){
            title = 'Prata'
        }else if(experiencia >=5001 && experiencia <= 7000){
            title = 'Ouro'
        }else if(experiencia >=7001 && experiencia <= 8000){
            title = 'Platina'
        }else if(experiencia >=8001 && experiencia <= 9000){
            title = 'Ascendente'
        }else if(experiencia >=9001 && experiencia <= 10000){
            title = 'Imortal'
        }else if(experiencia >= 10001){
            title = 'Radiante'
        }

        //Subindo de Level
    
        //Montando Informação
        informacao = `O Herói de nome ${heroi} está no nível de ` + nivel
    }

    return(        
        <>
            <div className='title'>
                <h1>Classificação Herói</h1>
                <img width="64" height="64" src="https://img.icons8.com/dusk/64/elden-ring.png" alt="elden-ring"/>
            </div>
            <div className="content-personagem">                
                <div id="personagem">
                    <img src={chibi} alt="Herói" />
                </div>
                <div className="informacoes">
                    <div id="nome">{heroi}</div>
                    <div id="titulo"></div>
                    <div id="level">Level  ??</div>
                    <div id="experiencia">{experiencia} / 100001 </div>                    
                    <div id="texto">{informacao}</div>            
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
                    <button type="submit">Diferente</button>
                </form>
            </div>
        </>
        
    )
}
  
export default Heroi;
  