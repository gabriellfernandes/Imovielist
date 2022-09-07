import { HeaderDiv } from "./style";
import {BiMovie} from 'react-icons/bi'
import {AiFillHome, AiFillCompass, AiFillStar, AiFillBell} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
export default function Header (){



    return (
        
        <HeaderDiv>
            
            <div className="header__container">   
                <div className="headerTitle">
                    <BiMovie className="icon" color="#9A9DA5" size={26}/>
                    <span>MyMovieList</span>
                </div>

                <div className="navBar">
                    <div>
                    <AiFillHome id="homeIcon"  size={26}/>
                    <span className="home">home</span>
                    </div>

                    <div>
                    <AiFillCompass id="discoverIcon"   size={26}/>
                    <span>Discover</span>
                    </div>

                    <div>
                    <AiFillStar id="topRatedIcon"  size={26}/>
                    <span>Top-Rated</span>
                    </div>
                    <AiFillBell id="bellIcon"  size={26}/>
                    <FaUser id="userIcon"  size={24}/>
                </div>
            </div>
        </HeaderDiv>
    )
}