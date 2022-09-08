import styled from 'styled-components'


export const DivLanding = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: large;
        font-weight: bold;
        color: white;
        margin: 10px;
    }

    h2{
        font-size: large;
        font-weight: bold;
        color: white;
        margin: 10px;
    }
    .divForm{
        width: 45%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: #e89005 1px solid;
        border-radius: 8%;
        padding: 10px;
        text-align: center;
    }

    .conteiner{
        width: 50%;
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    

    .button{
        color: white;
        background-color: #e89005;
        border: 2px solid transparent;
        border-style: none;
        border-radius: 18px;
        width: 140px;
        height: 60px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 18px;
        text-decoration: none;
        margin: 10px;
        cursor: pointer;
    }
    @media only screen and (max-width: 768px) {
        .button{
            width: 18vw;
            height: 7vh;
            font-size: 1rem;
        }

        img{
            width: 80%
        }

        h2{
            font-size: 1rem;
        }
  }

  @media only screen and (max-width: 400px) {
        .button{
            width: 15vw;
            height: 6vh;
            font-size: 0.6rem;
        }
  }
`