import styled from 'styled-components'

const StyledFormulario = styled.div`
margin-top: 41px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;

div {
h4{
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    color: #293845;
}
input {
    margin-top: 6px;
    margin-bottom: 10px;
    height: 51px;
    width: 327px;
    border-radius: 3px;
    outline: 0;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    padding-left: 18px;
    ::placeholder {
        font-family: 'Roboto';
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        text-align: left;
    }

}
}

button {
    margin-top: 50px;
    height: 42px;
    width: 225px;
    border-radius: 3px;
    background-color: #E8833A;
    border: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    
    text-decoration: none;

    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: white;
    cursor: pointer;
}
`

export default StyledFormulario