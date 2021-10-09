import React,{useState} from 'react'
import * as types from '../../types'
import * as Componentstyle from './style'
export default function RenderItens({item,onChange}:types.render) {
    const [State,setState] = useState(item.status)

    return (
        <Componentstyle.Container State={State}>
            <input
                type='checkbox'
                checked={State}
                onChange={(event)=>{
                    setState(event.target.checked)
                    onChange(item)
                }
                }
            />
            <label>{item.description}</label>
        </Componentstyle.Container>
    )
}
