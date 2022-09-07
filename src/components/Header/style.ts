import styled from 'styled-components'


export const HeaderDiv = styled.header`

    width: 100%;
    height: 75px;

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

    #homeIcon, #discoverIcon, #topRatedIcon, #bellIcon, #userIcon{
        cursor: pointer;
                color: #9A9DA5;
              
    }

    #homeIcon:hover, #discoverIcon:hover, #topRatedIcon:hover, #bellIcon:hover, #userIcon:hover{
        color: white;
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

    @media (max-width: 620px){
        .navBar span {
            display: none !important;
        }
    }

    @media (max-width: 390px){
        .headerTitle span {
            display: none !important;
        }

        padding: 0px 2vw;
    }
`