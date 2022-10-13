import axios from "axios"
import { useState } from "react"
import StyledFormulario from "./GlobalStyle/StyledFormulario"


export default function Formulario({ selecteds, setPedidoFeito }) {
    const [compraNome, setCompraNome] = useState('')
    const [compraCPF, setCompraCPF] = useState('')

    function reserve(props) {
        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', props)
        function finished(res) {
            setCompraNome('')
            setCompraCPF('')
            console.log('hihihi deu certo')
            alert(`Resuisição feita: ${props.name}, ${props.CPF}, ${props.ids}`)
        }
        function tratarErro(err) {
            alert(`deu esse erro aqui ó: ${err.response.data}`)
        }
        promise.catch(tratarErro)
        promise.then(finished)
    }

    return (

        <StyledFormulario>
            <div>
                <h4>Nome do Comprador:</h4>
                <input type={'text'} placeholder='Digite seu nome...' value={compraNome} onChange={(e) => {console.log(compraNome); setCompraNome(e.target.value)}} />
            </div>

            <div>
                <h4>CPF do Comprador:</h4>
                <input type={'text'} placeholder='Digite seu CPF...' value={compraCPF} onChange={(e) => setCompraCPF(e.target.value)} />
            </div>

            <button to='{}' data-identifier="reservation-btn" onClick={() => reserve({ ids: selecteds.map((e) => e.id), name: compraNome, CPF: compraCPF })} >Reservar assento(s)</button>
        </StyledFormulario>
    )
}