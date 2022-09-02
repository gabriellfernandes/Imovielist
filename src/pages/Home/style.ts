import styled from 'styled-components';
import styledMUI from '@mui/styled-engine';
import { Card } from '@mui/material';
import { createTheme } from '@mui/material';

const themeDefault = createTheme()
export const theme = createTheme(
    {
        palette : {
            primary : 
            {
                main : themeDefault.palette.grey[400]
            }
        },
        typography : 
        {
            body1 : {fontSize : "0.8rem"},
            body2 : {fontSize : "0.6rem"},
        },
        breakpoints : 
        {
            values : 
            {
                xs : 0,
                sm : 600,
                md :900, 
                lg :450 ,
                xl :500,
            }
        },
        components : 
        {
            MuiCardMedia : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        [themeDefault.breakpoints.down("sm")] : 
                        {
                            objectFit : "cover"
                        },
                        [themeDefault.breakpoints.up("sm")] : 
                        {
                            objectFit : "cover"
                        },
                        backgroundPosition : "center center",
                        backgroundSize : "100%"
                    }
                }
            }
        }
    })

export const MainDiv = styled.main`
    overflow-y: auto;
    background-color: #0D0D0F;
    width: 100%;
    height: 100%;
    min-height: max-content;
    display: flex;
    justify-content: center;
    
`

export const ContentBox = styled.div`
    padding: 1rem 0;
    width: 100%;
    background-color:  #0D0D0F;
    height: max-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    .MovieSection{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`

export const MovieListBox = styled.div`
    
    width: 100%;
    
    height: max-content;

    .BoxHeader{
        @media screen and (min-width: 340px) {
        margin : 0 1rem;
        }
        @media screen and (min-width : 1280px) {
            margin : 0 200px;
        }
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        width: auto;
        height: 50px;
        background-color: lightgreen;
    }

    .BoxMain{
        @media screen and (min-width: 340px) {
        margin : 0 1rem;
        }
        @media screen and (min-width : 1280px) {
            margin : 0 200px;
        }
        display: flex;
        padding: 1rem;
        align-items: center;
        justify-content: space-around;
        gap: 1rem;
        width: auto;
        height: auto;
        background-color: darkgreen;
    }
`