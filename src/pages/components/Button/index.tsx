import React from 'react'
import * as Component from './styles'
interface props{
    children:string,
    onClick:(event:any)=>void
}

const Button = ({children,onClick}:props) => <Component.Button onClick={onClick}>{children}</Component.Button>

export default Button
