import React, {useState} from 'react';

//Style
import './index.css';

type HeroiProps = {
    heroi: string;
    experiencia: number
}

function Heroi({heroi, experiencia}:HeroiProps){
    const [exp, setExp]= useState<number>(0)

    const handleSubmite = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()        

        //Subindo de Level
    
    }

    return(
        <div className="content-personagem">
            <div id="personagem"></div>
            <div className="informacoes">
                <div id="nome">{heroi}</div>
                <div id="titulo"></div>
                <div id="experiencia">{experiencia}</div>
                <div id="level">??</div>
                <div id="texto"></div>            
            </div>
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
    )
}
  
export default Heroi;
  