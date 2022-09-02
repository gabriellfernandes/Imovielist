import { BiMovie } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { FooterDiv } from "./style";


export default function Footer() {
    return (
        <FooterDiv>
        <div>
        <span>MyMovieList</span>
        <BiMovie size={22} color={'#9A9DA5'}/>
        
        </div>
        <span>2022 Ⓒ IMovieList. All rights reserved</span>
        <div className="footerReferences">
            <span>References</span>
            <MdWeb size={22} color={'#9A9DA5'}/>

        </div>
    </FooterDiv>
    )
}