import { useState } from "react"
import styled from "styled-components"
import AlignSeats from "./styledComponents/AlignSeats"
import Formulario from "./Formulario"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const StyledChooseSeat = styled.main`
    h2{
        height: 110px;
        width: 374px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Roboto';
        font-size: 24px;
        font-weight: 400;

        color: #293845;
    }
margin-top: 67px;
`

export default function EscolherAssento() {
    const { idSessao } = useParams()

    const [selecteds, setSelecteds] = useState([])
    const [seats, setSeats] = useState([])

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
        const promise = axios.get(url)

        function renderizar(res) {
            setSeats(res.data.seats)
        }

        promise.then(renderizar)
        promise.catch((err) => console.log(err.response.data))
    }, [idSessao])

    function selection(e, i) {
        if (selecteds.includes(e)) {
            const newSelecs = selecteds.filter((el) => {
                if (el !== e) {
                    return true
                }
                else {
                    return false
                }
            })
            setSelecteds(newSelecs)
        }
        else {
            setSelecteds([...selecteds, e])
        }
    }

    const assentos = seats.map((e, i) => {
        return (
            <>
                {e.isAvailable ?
                    <div key={e.id} data-identifier="seat" onClick={() => selection(e, i)} className={selecteds.includes(e) ? "selecionado" : "disponível"}>{e.name}</div>
                    :
                    <div key={e.id} data-identifier="seat" onClick={() => alert('Esse assento não está disponível')} className="ocupado">{e.name}</div>
                }
            </>

        )
    })

    return (
        
        <StyledChooseSeat>
            <h2>Selecione o(s) assento(s)</h2>
            <AlignSeats>
                {assentos}
            </AlignSeats>
            <Formulario selecteds={selecteds} />
        </StyledChooseSeat>

    )
}