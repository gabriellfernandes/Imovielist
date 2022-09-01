import styled from 'styled-components'


export const HeaderDiv = styled.header`
    font-weight: 600;
    background-color: #1A171E;
    width: 100%;
    height: 70px;
    color: white;
    display: flex;
    justify-content: space-evenly;

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
            gap: 5px;
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