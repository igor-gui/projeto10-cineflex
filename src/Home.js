import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Filme from "./Filme"
import StyledHome from "./GlobalStyle/StyledHome"



export default function Home({setShowFooter}) {

    const url = 'https://mock-api.driven.com.br/api/v5/cineflex/movies'
    const [moviesList, setMoviesList] = useState([])

    useEffect(() => {
        const promise = axios.get(url)

        function renderizar(res) {
            const movies = res.data
            setMoviesList(movies)
        }

        // axios, useEffect, hooks, Routes

        function deuRuim(err) {
            console.log('n vai rolar kkkkk')
        }

        promise.then(renderizar)
        promise.catch(deuRuim)

    }, [])



    return (
        <StyledHome>
            <div className="title">
                <h2>Selecione o filme</h2>
            </div>
            <div className="filmes">
                {moviesList.map((e, i) => <Filme key={e.id} data={e} />)}
            </div>
        </StyledHome>
    )
}