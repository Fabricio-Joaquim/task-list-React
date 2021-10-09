import React,{useState} from 'react'
import * as types from '../../types'
import * as Componentstyle from './style'
export default function RenderItens({description,id}:types.render) {
const [State,setState] = useState(description.status)
    return (
        <Componentstyle.Container State={State}>
            <input
            type='checkbox'
            checked={State}
            onChange={(event)=>setState(event.target.checked)}
            />
            <label>{description.description}</label>
        </Componentstyle.Container>
    )
}
