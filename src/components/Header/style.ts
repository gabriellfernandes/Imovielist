import styled from 'styled-components'


export const HeaderDiv = styled.header`

    width: 100%;
    height: auto;
    background-color: #1A171E;
   .header__container
    {
        font-weight: 600;
        width: auto;
        height: 70px;
        color: white;
        display: flex;
        justify-content: space-between;
        @media screen and (min-width: 340px) {
            margin : 0 1rem;
        }
        @media screen and (min-width : 1280px) {
            margin :0 200px;
        }
    }

    .home{
        text-decoration: underline;
    }

    .icon{
        cursor: pointer;
                color: #9A9DA5;
                &:hover{
                    color: white;
                }
            }
    div{

        display: flex;
        align-items: center;
        gap: 20px;

        div{
            
            display: flex;
            align-items: center;
            gap: 1rem;
            cursor: pointer;
            
            &:hover{
                svg{
                    color: white;
                }

            }

            span{
                color: white;
            }

          
        }
    }
`