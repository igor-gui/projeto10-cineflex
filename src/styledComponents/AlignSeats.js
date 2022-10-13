import styled from 'styled-components'

const AlignSeats = styled.main`
display: flex;
flex-wrap: wrap;
gap: 7px;
justify-content: center;
div{
    height: 26px;
    width: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 400;
    text-align: center;
}
.disponível{
    background-color: #C3CFD9;
    border: 1px solid #808F9D;    
    cursor: pointer;
}
.ocupado{
    background-color: #FBE192;
    border: 1px solid #F7C52B;
}
.selecionado {
    background-color: #1AAE9E;
    border: 1px solid #0E7D71;    
    cursor: pointer;
}
.selecionado:hover, .disponível:hover{
    cursor: pointer;
}
`

export default AlignSeats