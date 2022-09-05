import { useEffect, useState } from "react";
import { apiTMDb } from "../../services/api";
import { IGenres } from "./interfaces";
import { DivGeneral } from "./style";

export const UserProfile = () => {

  const [genres, setGenres] = useState<IGenres[]>([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [buttonColor, setButtonColor] = useState(true);

  useEffect(() => {
          apiTMDb
          .get("/genre/movie/list?language=en-US")
          .then(response => setGenres(response.data.genres))
  }, []);

  const toggleButton = () => {
    setButtonColor(!buttonColor);
    setButtonStatus(!buttonStatus);
  }

  return (
    <DivGeneral>
      <div className="div-user">
        <div className="div-container-infos-user">
        <div className="div-avatar"></div>
        <div className="div-infos-user">
            <p>Kenzinho Teste</p>
            <p>kenzinho@email.com</p>
        </div>
        <div className="arrow">{'>'}</div>
        </div>
        <div className="div-container-input">
          <input 
          type="text" 
          placeholder="Search"
          className="input-search"
          />
        </div>
        <div className="div-container-genres">
          <div className="div-genres">
            <>
            {
             genres.map((genre => 
              <button style={{backgroundColor: buttonColor ? "#141414" : "#F5C600"}} onClick={toggleButton} key={genre.id}>{genre.name}
              <span>{buttonStatus ? "+" : "✓"} </span>
              </button>
             ))
            }
           </>
          </div>
        </div>
        <div className="div-title-favorites"><p className="header-favorite">Favorites</p>See all {'>'}</div>
        <div className="div-container-favorites">
          <div>
          <p className="movie-star">⭐ 7.9</p>
          </div>
          <div className="favorite-bottom">
            <button className="button-watch">Watch now</button>
            <button className="button-add-movie">+</button>
          </div>
        </div>
      </div>
      <div className="div-movies"></div>
    </DivGeneral>
  )
}