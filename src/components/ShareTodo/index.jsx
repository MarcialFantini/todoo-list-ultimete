import React, { useEffect, useState } from 'react'
import { H1, InputGlobal } from '../styled-commond'

import { ContainerShare } from './styled'

export const ShareTodo = ({
    stateGlobal,
    setStateGlobal,
    children
}) => {
    const [shareState, setShareState] = useState("")
    const [cont, setCont] = useState(0)
    const handlerShare = (event) => {
        setShareState(event.target.value)
    }

    useEffect(() => {
        if (shareState === "") {
            setStateGlobal({
                ...stateGlobal,
                visible: [...stateGlobal.todos]
            })
        }
        else if ("101101" === shareState) {
            setShareState("")
        }
        else {
            const newVisible = stateGlobal.todos.filter(item => {
                return (item.includes(shareState))
            })
            setStateGlobal({
                ...stateGlobal,
                visible: [...newVisible]
            })
        }
    }, [shareState])

    useEffect(() => {
        if (stateGlobal.todos.length !== cont) {
            setShareState("101101")
            console.log(shareState)
            setCont(stateGlobal.todos.length)
        }
    }, [stateGlobal])
    return (
        <ContainerShare>
            {children}
            <H1>
                Buscar tarea
            </H1>
            <InputGlobal
                onChange={handlerShare}
                value={shareState}
                placeholder='Ingrese tarea a buscar'
            />
        </ContainerShare>
    )
}
