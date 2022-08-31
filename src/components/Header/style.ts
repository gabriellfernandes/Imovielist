import styled from 'styled-components'


export const HeaderDiv = styled.header`
    font-weight: 600;
    background-color: #1A171E;
    width: 100%;
    height: 70px;
    color: white;
    display: flex;
    padding-left: 8rem;
    padding-right: 8rem;
    justify-content: space-between;
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
           

            span{
                color: white;
            }

          
        }
    }
`