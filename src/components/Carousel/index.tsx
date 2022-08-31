import React, { Component } from "react";
import Slider from "react-slick";
import { DivCarousel } from "./style";
import Comming from '../../assets/images/Comming.png'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <DivCarousel>

        <Slider className="slider"{...settings}>
          <div>
            <span>Dr Estranho </span>
            <img className="zi" src={Comming} alt='comming'/>
            <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/06/Doutor-Estranho-no-Multiverso-da-Loucura-Disney-Plus.jpg" alt="" />
            

          </div>

          <div>
          <img className="zi" src={Comming} alt='comming'/>
            <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/06/Doutor-Estranho-no-Multiverso-da-Loucura-Disney-Plus.jpg" alt="" />
            <span>Dr Estranho </span>
          </div>
          <div>
          <img className="zi" src={Comming} alt='comming'/>
            <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/06/Doutor-Estranho-no-Multiverso-da-Loucura-Disney-Plus.jpg" alt="" />
            <span>Dr Estranho </span>
          </div>
          <div>
          <img className="zi" src={Comming} alt='comming'/>
            <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/06/Doutor-Estranho-no-Multiverso-da-Loucura-Disney-Plus.jpg" alt="" />
            <span>Dr Estranho </span>
          </div>


        </Slider>
      </DivCarousel>
    );
  }
}