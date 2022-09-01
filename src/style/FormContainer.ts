import styled from "styled-components";

export const FormContainer = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: white;

    form {
        height: 250px;
        width: 80%;
        max-width: 322px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    form input {
        height: 19%;
        width: 100%;

        border-radius: 16px;
        border-style: none;
        border: 2px solid white;

        background-color: transparent;

        box-sizing: border-box;
        margin: none;
        padding-left: 15px;
    }

    form input::placeholder {
        color: white;
        font-size: 14px;
    }
`