import { createTheme } from '@mui/material'
import styled from 'styled-components'

const themeDefault = createTheme()
export const theme = createTheme(
    {
        palette : 
        {
            primary : 
            {
                main : themeDefault.palette.grey[600]
            },
            secondary : 
            {
                main : themeDefault.palette.grey[400]
            }
        },
        breakpoints : 
        {
            values : 
            {
                xs : 0,
                sm : 600,
                md : 900,
                lg : 1024,
                xl : 1280,
            }
        },
        components : 
        {
            MuiInput : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        color : themeDefault.palette.grey[400]
                    }
                }
            },
        }
    })
export const HeaderDiv = styled.header`

    width: 100%;
<<<<<<< HEAD
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
=======
    height: 80px;
    background-color: ${theme.palette.grey[900]};
>>>>>>> 668973a1f9c42ed70d9d86fcb39ff75248e3b9ef
`