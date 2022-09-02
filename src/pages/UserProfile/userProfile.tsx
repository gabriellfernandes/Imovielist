import { DivGeral } from "./style";

export const UserProfile = () => {

  const token = localStorage.getItem("@token");
  const idUser = localStorage.getItem("@idUser");

  return (
    <DivGeral>
      <div className="div-user">
        <div className="div-container-infos-user">
        <div className="div-avatar"></div>
        <div className="div-infos-user">
            <p>Kenzinho Teste</p>
            <p>kenzinho@email.com</p>
        </div>
        <div className="arrow">seta</div>
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
            <button>Action<span>+</span></button>
            <button>Drama<span>+</span></button>
            <button>Comedy<span>+</span></button>
            <button>Romance<span>+</span></button>
            <button>SCI-FI<span>+</span></button>
            <button>Action<span>+</span></button>
            <button>Drama<span>+</span></button>
            <button>Comedy<span>+</span></button>
            <button>Romance<span>+</span></button>
            <button>SCI-FI<span>+</span></button>
          </div>
        </div>
        <div className="div-title-favorites"><p className="header-favorite">Favorites</p>See all</div>
        <div className="div-container-favorites">
          <p className="movie-star">⭐ 7.9</p>
          <div className="favorite-bottom">
            <button className="button-watch">Watch now</button>
            <button className="button-add-movie">+</button>
          </div>
        </div>
      </div>
      <div className="div-movies"></div>
    </DivGeral>
  )
}