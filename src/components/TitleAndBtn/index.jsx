import React from 'react'
import { New } from '../../utils/steps'
import { H1, SubmitAll } from '../styled-commond'
import { ContainerTitle } from './styled'

export const TitleAndBtn = ({ setStateGlobal, stateGlobal }) => {
    const nexStep = () => {
        setStateGlobal({
            ...stateGlobal,
            step: New
        })
    }

    return (
        <ContainerTitle>
            <H1>{"Tareas"}</H1>
            <SubmitAll
                type='button'
                onClick={nexStep}
            >Agregar tarea</SubmitAll>
        </ContainerTitle>
    )
}
