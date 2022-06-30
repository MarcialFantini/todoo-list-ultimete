import React from 'react'
import {
    BtnDelTask,
    Container,
    Li,
    Ul
} from './styled'

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
        return (<Li
            key={item}
        >
            {item}
            <BtnDelTask
                value={item}
                onClick={delTodo}
            >
                Del
            </BtnDelTask>

        </Li>)
    })

    return (
        <Container>
            <Ul>
                {listOfTasks}
            </Ul>
        </Container>
    )
}
