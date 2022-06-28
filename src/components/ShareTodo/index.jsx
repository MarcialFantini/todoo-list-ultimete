import React, { useEffect, useState } from 'react'
import { H1, InputGlobal } from '../styled-commond'
import { TitleAndBtn } from '../TitleAndBtn'
import { ContainerShare } from './styled'

export const ShareTodo = ({
    stateGlobal,
    setShare,
    setStateGlobal
}) => {
    const [shareState, setShareState] = useState("")
    const setValuesState = (e) => {
        setShareState(e.target.value)
        if (
            !(shareState === "")
        ) {
            setShare(stateGlobal.todos.filter(item => {
                return item.includes(shareState)
            }))
        } else {
            setShare(stateGlobal.todos)
        }
    }

    return (
        <ContainerShare>
            <TitleAndBtn
                setStateGlobal={setStateGlobal}
                stateGlobal={stateGlobal}
            />
            <H1>
                Busque la tarea deseada:
            </H1>
            <InputGlobal
                onChange={setValuesState}
                value={shareState}
                placeholder='Ingrese tarea a buscar'
            />
        </ContainerShare>
    )
}
