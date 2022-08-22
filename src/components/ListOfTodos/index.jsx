import React from 'react'
import { BtnComplete, BtnDelTask, ContainerTable, Tbody, Td, Th, Thead, Tr } from './styled'

export const ListOfTodos = ({
    stateGlobal,

    setStateGlobal
}) => {
    const delTodo = (event) => {
        const filterTodos = stateGlobal.todos.filter(item => {
            return item !== event.target.value
        })

        setStateGlobal({
            ...stateGlobal,
            todos: filterTodos
        })
    }


    const listOfTasks = stateGlobal.visible.map(item => {
        return (<Tr
            key={item}
        >
           
            <Td
            width="80%"
            >
                {item}
            </Td>
            
            <Td
            width="20%"
            >
                <BtnDelTask
                value={item}
                onClick={delTodo}
            >
                Borrar
            </BtnDelTask>
           
            </Td>

        </Tr>)
    })

    return (
        <ContainerTable>
            <Thead>
                <Tr>
                    
                    <Th
                    width="80%"
                    >Tarea</Th>
                    <Th
                    width="20%"
                    >Acción</Th>
                </Tr>
            </Thead>
            <Tbody>
                {listOfTasks}
            </Tbody>
        </ContainerTable>
    )
}
