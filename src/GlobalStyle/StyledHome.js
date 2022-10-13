import styled from "styled-components"

const StyledHome = styled.main`
background-color: #FFFFFF;
margin-top: 67px;
min-height: 844px;
height: max-content;
width: 374px;
left: 30px;
top: 169px;
border-radius: 3px;
display: flex;
flex-direction: column;
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
        .filmes{
            margin-top: 8px;
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 30px;
        a {
            cursor: pointer;
            height: 209px;
            width: 145px;
            border-radius: 3px;
            
            box-shadow: 0px 2px 4px 2px #0000001A;
            background-color: #FFFFFF;
            img{
                height: 193px;
                width: 129px;
                margin: 8px 8px;
            }
        }
    }
`
export default StyledHome