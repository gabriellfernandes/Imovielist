import styled from 'styled-components';
import styledMUI from '@mui/styled-engine';
import { createTheme,Card } from '@mui/material';

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
                lg :420 ,
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

export const CardItemStyled = styledMUI(Card)(
    {
        backgroundColor : `${theme.palette.grey[900]}`,
        width: "300px",
        maxWidth: "100%",
        minWidth: "50px",
        height: "300px",
        [theme.breakpoints.up("sm")] : 
        {
            width : "300px",
           height: "300px",
        }
        
    })

