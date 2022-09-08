import styled from "styled-components";

export const DivGeneral = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080808;
  display: flex;

  .div-user {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    justify-content: space-evenly;
  }

  .div-container-infos-user {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .div-avatar {
    width: 80px;
    height: 80px;
    background-color: #141414;
    border-radius: 100%;
    margin-top: 5px;
  }

  .div-infos-user {
    display: flex;
    flex-direction: column;
    color: #ffffff;
  }

  .div-container-input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .input-search {
    width: 70%;
    height: 30px;
    border: none;
    border-radius: 20px;
    background-color: #141414;
    color: #ffffff;
    padding-left: 10px;
  }

  .icon-search {
    color: #ffffff;
    position: absolute;
    top: 7px;
    right: 65px;
  }

  .div-container-genres {
    width: 100%;
    height: 180px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .div-container-genres::-webkit-scrollbar {
    width: 5px;
  }

  .div-container-genres::-webkit-scrollbar-track {
    background-color: #080808;
  }

  .div-container-genres::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    border: 7px solid #080808;
  }

  .div-genres {
    width: 200%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  button {
    width: 130px;
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
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .image-last-movie-rated {
    border-radius: 20px;
  }

  .movie-star {
    width: 14%;
    height: 15px;
    background-color: #141414;
    color: #ffffff;
    border-radius: 20px;
    font-size: 12px;
    margin: 5px 0 0 5px;
  }

  .favorite-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: -20px;
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
    margin-left: 5px;
    margin-top: -10px;
  }

  .div-movies {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    padding-left: 10px;
  }

  .rated-movies {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .title-movie-rated {
    color: #ffffff;
    background-color: #212121;
    font-size: 20px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 5px;
  }

  .img-movie-rated {
    width: 8vw;
    height: 11.5vh;
  }

  .paragraph-movie-rated {
    color: #ffffff;
    padding-left: 5px;
    font-size: 12px;
  }

  .div-container-movie-rated {
    display: flex;
    margin: 10px 0 10px 0;
  }

  .stars-vote {
    margin-bottom: 5px;
    color: #ffffff;
    font-size: 12px;
  }
`