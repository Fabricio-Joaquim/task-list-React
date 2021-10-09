import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid black;
    border-radius:15px;
    margin: 20px 0;
    padding: 5px;
    display: flex;
    align-items: center;

    img{
        margin-right:5px;
        max-width: 40px;
        align-items: center;
    }

    input{
        border: 0;
        background: transparent;
        color: white;
        font-size:18px;
        flex: 1;
        outline: 0;
    }
    `