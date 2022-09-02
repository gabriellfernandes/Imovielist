import styled from "styled-components";

export const DivCarousel = styled.div`

max-width: 100%;


.slider{
    height: max-content;

    div{
        width: 100%;
        height: 100%;
        position: relative;

    
        .zi{
            width: max-content;
            right: 0;
            top: 0;
            transform: scale(0.6);
            position: absolute;
            z-index: 4;
        }
       

    img{
        position: relative;
        width: 100%;
    }

    span{
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto auto;
        width: max-content;
        height: max-content;
        position: absolute;
        color: white;
        font-size: 50px;
        z-index: 3;
        
    }
    }
}
`