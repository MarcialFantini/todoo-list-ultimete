import React, { useState } from 'react'
import { Initial } from '../../utils/steps'
import { Container, H1, H4, InputGlobal, SubmitAll, TextP } from '../styled-commond'
import { FormTodoo } from './styled'

export const FormTodo = ({ setStateGlobal, stateGlobal }) => {
    const [todo, setTodo] = useState("")
    const handleTodo = (event) => {
        setTodo(event.target.value)
    }

    const addTodo = (event) => {
        event.preventDefault()
        setStateGlobal({
            ...stateGlobal,
            step: Initial,
            todos: [
                ...stateGlobal.todos,
                todo
            ]
        })
    }

    return (
        <Container>
            <H1>Agrega una tarea!😏</H1>
            <TextP>
                Tu puedes agregar una nueva tarea, solo tienes que
                ingresar la tarea y darle submit.
            </TextP>
            <FormTodoo
                onSubmit={addTodo}>
                <H4>
                    Nueva tarea:
                </H4>

                <InputGlobal

                    value={todo}
                    onChange={handleTodo}
                    placeholder='Ingresa tu nueva tarea'
                ></InputGlobal>
                <SubmitAll>
                    Agregar
                </SubmitAll>
            </FormTodoo>
        </Container>
    )
}
