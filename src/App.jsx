import './App.css'
import React from 'react';

import Primeiro from './components/basicos/Primeiro'
import ComParametros from './components/basicos/ComParametros'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/Form/input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'


export default (props) => (

<div className="App">
    <h1>FUNDAMENTOS REACT</h1>
    <div className="Cards">
        
    <Card titulo="#11 - Mega" color="#9bc5c3">
        <Mega qtdeNumero={ 8 }></Mega>
    </Card>
    <Card titulo="#10 - Contador" color="#251e3e">
        <Contador passo={10} valor={100}></Contador>
    </Card>
    <Card titulo="#09 - Input" color="#451e3e">
        <Input></Input>
    </Card>

    <Card titulo="#08 - Cominicação indireta" color="#854442">
        <Super></Super>
    </Card>

    <Card titulo="#07 - Cominicação direta" color="#7bc043">
        {/**formas de mudar o sobrenome da pessoa.. colocando o sobrenome = jackson e a propriedade dele no "pai.jsx" ajudam a mudar */}
        <Pai sobrenome="Jackson"></Pai>
    </Card>

    <Card titulo="#06 - Condicional v2" color="#ff8b94">
        <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>

    <Card titulo="#05 - Condicional v1" color="#fe8a71">
        <Condicional numero={11}></Condicional>
    </Card>

    <Card titulo="#04 - Repetição"color="#851e3e">
        <Repeticao></Repeticao>
    </Card>

    <Card titulo="#03 - Primeiro Component" color="#3da4ab ">
        <ComFilhos>
            <ul>
                <li>filho 1</li>
                <li>filho 2</li>
                <li>filho 3</li>
                <li>filho 4</li>
            </ul>
        </ComFilhos>
    </Card>

    <Card titulo="#02 - Componente com parametro" color="#0e9aa7">
        <ComParametros titulo="Esse é o Titulo" subtitulo="Esse é o Subtitulo"/>
    </Card>

    <Card titulo="#01 - Primeiro" color="#f37736">
        <Primeiro/>
    </Card>


    </div>

</div>)