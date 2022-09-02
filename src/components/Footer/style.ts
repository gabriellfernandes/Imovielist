import styled from "styled-components";

export const FooterDiv = styled.footer`
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    height: 70px;
    background-color: #1A171E;
    color: white;

    .footer__container{
        
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
         font-size: 0.6rem;
         @media screen and (min-width: 340px) {
            margin : 0 1rem;
        }
        @media screen and (min-width : 1280px) {
            margin :0 200px;
        }
        div
        {
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
            gap : 1rem;
        }
    }
`