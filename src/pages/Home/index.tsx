import Header from "../../components/Header";
import { Carousel, ContentBox, MainDiv, MovieItem, MovieListBox } from "./style";
import Footer from "../../components/Footer";
import SimpleSlider from "../../components/Carousel";






export default function Home(){





    return (
        <>
        <Header/>
        <MainDiv>
           <ContentBox>
                
                <SimpleSlider/>
                


                <div className="MovieSection">


                <MovieListBox>
                    <div className="BoxHeader">
                        <span>Trending</span>
                        <button>{'see all >'}</button>
                    </div>
                    <div className="BoxMain">
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                    </div>
                </MovieListBox>
                <MovieListBox>
                    <div className="BoxHeader">
                        <span>Trending</span>
                        <button>{'see all >'}</button>
                    </div>
                    <div className="BoxMain">
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                    </div>
                </MovieListBox>
                <MovieListBox>
                    <div className="BoxHeader">
                        <span>Trending</span>
                        <button>{'see all >'}</button>
                    </div>
                    <div className="BoxMain">
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                    </div>
                </MovieListBox>
                <MovieListBox>
                    <div className="BoxHeader">
                        <span>Trending</span>
                        <button>{'see all >'}</button>
                    </div>
                    <div className="BoxMain">
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                    </div>
                </MovieListBox>
                </div>
            </ContentBox>
        </MainDiv>
        <Footer/>
        </>

    )
}