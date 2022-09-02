import styled from "styled-components";

export const DivGeral = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080808;

  .div-user {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    justify-content: space-evenly;   //depois ajustar isso aqui
  }

  .div-container-infos-user {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .div-avatar {
    width: 90px;
    height: 90px;
    background-color: #141414;
    border-radius: 100%;
    margin-top: 5px;
  }

  .div-infos-user {
    display: flex;
    flex-direction: column;
    color: #ffffff;
  }

  .arrow {
    color: #ffffff;
  }

  .div-container-input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-search {
    width: 60%;
    height: 30px;
    border: none;
    border-radius: 20px;
    background-color: #141414;
  }

  .div-container-genres {
    width: 100%;
    height: 100px;
    overflow: auto;
  }

  .div-genres {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    width: 115px;
    height: 32px;
    border: none;
    border-radius: 20px;
    background-color: #141414;
    color: #ffffff;
    margin: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  span {
    font-size: 20px;
  }

  .div-title-favorites {
    color: #ffffff;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .header-favorite {
    font-weight: bold;
  }

  .div-container-favorites {
    width: 90%;
    height: 250px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 1px solid yellow;
  }

  .movie-star {
    width: 14%;
    height: 15px;
    background-color: #080808;
    color: #ffffff;
    border-radius: 20px;
    font-size: 12px;
  }

  .favorite-bottom {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .button-watch {
    width: 115px;
    height: 32px;
    border: none;
    border-radius: 20px;
    background-color: #F5C600;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
  }

  .button-add-movie {
    width: 10%;
    height: 32px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    border-radius: 100px;
    font-size: 20px;
  }
`