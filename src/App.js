import { BrowserRouter, Route, Routes } from "react-router-dom";
import EscolherAssento from "./EscolherAssento";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import Home from "./Home";
import ListaSecoes from "./ListaSecoes";
import StyledHeader from "./styledComponents/StyledHeader";


export default function App() {


    return (
        <>
            <GlobalStyle />
            <StyledHeader>
                CINEFLEX
            </StyledHeader>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/sessoes/:idFilme' element={<ListaSecoes />} />
                    <Route path='/assentos/:idSessao' element={<EscolherAssento />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}