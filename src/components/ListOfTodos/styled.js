import styled from "styled-components";

export const ContainerTable = styled.table`
    width: 90%;
    height: auto;
    

    margin: auto;
    padding: 10px;

    border: black 4px solid;
    border-radius: 10px;

    background: #fc5d35;

`

export const Thead = styled.thead`
    width: 100%;
    height: auto;
    
    
`

export const Tr = styled.tr`
    width: 100%;
    min-height: 120px;
    
`
export const Th = styled.th`
    
    height: auto;
    font-size: 2rem;
    color: black;
    background: #f5e9b1;
    border: black 4px solid;
    border-radius: 10px;

    padding: 10px;
    width: ${props => props.width};

`

export const Tbody = styled.tbody`
    width: 100%;
    height: auto;

  
`

export const Td = styled.td`
    width: ${props => props.width};
    height: auto;

    font-size: 1.3rem;
    color: black;
    
    background: #f5e9b1;
    border: black 4px solid;
    border-radius: 10px;

    padding: 10px;

    
    
`

export const BtnDelTask = styled.button`
    font-size: 1rem;
    color: black;
    background: #eb3472;
    border-radius: 10px;
    padding: 10px;
 
`

export const BtnComplete = styled.button`
    font-size: 1rem;
    color: black;
    background:green;
    border-radius: 10px;
    padding: 10px;
  
`