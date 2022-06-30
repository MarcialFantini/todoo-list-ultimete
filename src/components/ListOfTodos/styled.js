import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    min-height: 400px;
    max-height: 400px;

    overflow-y: scroll;
    
`

export const Ul = styled.ul`
    width: 100%;
    height: auto;
    min-height: 30px;
    margin: 0;
    padding: 0;
`

export const Li = styled.li`
    height: auto;
    min-height: 30px;
    width: 80%;

   margin: 0 auto 20px auto;

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 1.6rem;
    color: white;

    border-radius: 10px;
    border: 5px solid black;

    background: rgb(135,206,235,0.8)
`

export const BtnDelTask = styled.button`
    width: auto;
    height: auto;
    min-height: 30px;

    font-size: 1.6rem;
    font: bold ;

    color: white;
    background: red;
    padding: 10px;
    border-radius: 10px;

    margin: 10px;
    
`