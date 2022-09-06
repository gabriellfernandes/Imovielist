import { HeaderDiv } from "./style";
import {BiMovie} from 'react-icons/bi'
import {AiFillHome, AiFillCompass, AiFillStar, AiFillBell} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
export default function Header (){

    const navigate = useNavigate()

    return (
        
        <HeaderDiv>
            
            <div className="header__container">   
                <div>
                    <BiMovie className="icon" color="#9A9DA5" size={26}/>
                    <span>MyMovieList</span>
                </div>

                <div>
                    <div className="IconDiv">
                    <AiFillHome className="icon"  size={26}/>
                    <span className="home" onClick={() => navigate("/home")}>home</span>
                    </div>

                    <div>
                    <AiFillCompass className="icon"   size={26}/>
                    <span>Discover</span>
                    </div>

                    <div>
                    <AiFillStar className="icon"  size={26}/>
                    <span>Top-Rated</span>
                    </div>
                    <AiFillBell className="icon"  size={26}/>
                    <FaUser className="icon"  size={24}/>
                </div>
            </div>
        </HeaderDiv>
    )
}