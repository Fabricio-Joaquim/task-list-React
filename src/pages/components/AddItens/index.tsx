import React, { useState } from 'react'
import * as Component from './style'
type props = {
    onFinish:(taskDiscription:string)=>void
}

function AddItens({onFinish}:props) {
    const img ='https://freesvg.org/img/1464710523.png'
    const [Text,setText] = useState('')
    
    const KeyUp = (event:any) =>{
        if(event.code === "Enter" && Text !== ''){
            onFinish(Text)
            setText('')
        }
    }   
   
    return (
        <Component.Container>
            <div className="imagem">
                <img src={img} alt='https://freesvg.org/plus-icon'/>
            </div>
            <input
                placeholder='Adicionar tarefa'
                type="text"
                value={Text}
                onChange={event=>setText(event.target.value)}
                onKeyUp={KeyUp}
            />  
        </Component.Container>
    )
}

export default AddItens
