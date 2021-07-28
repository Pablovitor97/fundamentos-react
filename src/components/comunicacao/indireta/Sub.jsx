import React from 'react'

export default (props) => {
    function acao() {
        props.onClicar(Math.random(), 'Gerado');
    }

    return (
        <div>
        {/**quando o usurario clicar, ele vai acionar um componente do PAI */}
        <button onClick={acao}>alterar</button>
    </div>
    )
}