import styled from 'styled-components';


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
    padding: 50px 0;
    width: 60%;
    background-color:  #0D0D0F;

    height: max-content;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 100px;



    .MovieSection{
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`

export const Carousel = styled.div`

    width: 90%;
    height: 300px;
    border-radius: 8px;
    border: 2px dotted black;
`

export const MovieListBox = styled.div`

    width: 90%;
    height: 120px;
    background-color: green;

    .BoxHeader{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 20%;
        background-color: lightgreen;
    }

    .BoxMain{
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
        background-color: darkgreen;
    }
`

export const MovieItem = styled.div`
    width: 22%;
    height: 95%;
    border-radius: 10px;
    background-color: blueviolet;
`
