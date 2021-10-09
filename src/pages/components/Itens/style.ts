import styled from 'styled-components'
type state = {
    State:boolean
}
export const Container = styled.div(({State}:state)=>(
    `
    display: flex;
    background-color: gray;
    margin-top:10px;
    padding:10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{ 
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: white;
        text-decoration:${State? 'line-through' : 'initial'};
    }
    `

))
    
