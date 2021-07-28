import React, { useState } from 'react'

export default (props) => {
    const [nome, alteraNome] = useState('Vitor')
    return (
        <>
        <h3>{nome}</h3>
        <input type="text" value={nome}
        onChange={e => alteraNome(e.target.value)}/>
        </>
    );
};