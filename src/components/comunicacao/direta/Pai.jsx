import React from 'react'
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}>Pablo</Filho>
        <Filho sobrenome={props.sobrenome}>Mark</Filho>
        <Filho sobrenome="Vitory">Milo</Filho>
    </div>