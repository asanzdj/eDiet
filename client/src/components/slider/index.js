import React, { Component } from 'react';
import Slider from 'react-slick';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div className= "hidden-xs hidden-sm" style ={{margin:"0 0 5% 0"}} >
        <Slider {...settings}>
          <div><img  src="https://images.unsplash.com/photo-1421899528807-04d925f39555?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1500&amp;h=1000&amp;q=80&amp;cs=tinysrgb&amp;crop=" width='100%' height='800px'/></div>
          <div><img src="https://images.unsplash.com/uploads/141150092992295b16435/00a01fcc?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=1199&amp;h=674&amp;q=80&amp;cs=tinysrgb&amp;crop=&quot" width='100%' height='800px' /></div>
          <div><img src="https://images.unsplash.com/photo-1474575981580-1ec7944df3b2?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=1199&amp;h=747&amp;q=80&amp;cs=tinysrgb&amp;crop=&quot" width='100%' height='800px' /> </div>
          <div><img src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?dpr=1&amp;auto=compress,format&amp;fit=crop&amp;w=1199&amp;h=796&amp;q=80&amp;cs=tinysrgb&amp;crop=&quot" width='100%' height='800px' /> </div>
        </Slider>
      </div>
    );
  }
}
