import { Link, useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledListaSecoes = styled.main`
margin-top: 67px;
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
    .dias {
        margin-left: 24px;
        display: flex;
        flex-direction: column;
        gap: 23px;
        .diaHora{
            display: flex;
            flex-direction: column;
            gap: 23px;
            h3{
                font-family: 'Roboto';
                font-size: 20px;
                font-weight: 400;
                color: #293845;
            }
            a{  
                box-sizing: border-box;
                margin-right: 8px;
                text-decoration: none;
                height: 43px;
                width: 83px;
                border-radius: 3px;
                color: #FFFFFF;

                font-family: 'Roboto';
                font-size: 18px;
                font-weight: 400;

                background-color: #E8833A;
            }

        }
    }
`

export default function ListaSecoes(){

    const [sections, setSections] = useState({ days: [], posterURL: '', title: '' })

    const { idFilme } = useParams()

    useEffect(() => {
        const url = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
        const promise = axios.get(url)

        function deuCerto(res) {
            setSections(res.data)
            console.log(res.data)
        }

        function deuRuim(err) {
            console.log(err.response.data)
        }
        promise.then(deuCerto)
        promise.catch(deuRuim)
    }, [idFilme])

    return (
        <StyledListaSecoes>
            <h2>Selecione o Horário</h2>
                    <div className='dias'>
                        {sections.days.map((e, i) => {

                            return (
                                <div className="diaHora" key={e.id}>
                                    <h3 data-identifier="session-date"> {e.weekday} - {e.date} </h3>
                                    <div className='horarios'>
                                        {e.showtimes.map((el) => <Link to={`/assentos/${el.id}`} data-identifier="hour-minute-btn" key={el.id}>{el.name}</Link>)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
        </StyledListaSecoes>
        
        )
}