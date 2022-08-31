import { HeaderDiv } from "./style";
import {BiMovie} from 'react-icons/bi'
import {AiFillHome, AiFillCompass, AiFillStar, AiFillBell} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
export default function Header (){



    return (
        
        <HeaderDiv>
            
                <div>
               <BiMovie className="icon" color="#9A9DA5" size={26}/>
               <span>MyMovieList</span>
                </div>

                <div>
                    <div>
                    <AiFillHome className="icon"  size={26}/>
                    <span className="home">home</span>
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




        </HeaderDiv>
    )
}