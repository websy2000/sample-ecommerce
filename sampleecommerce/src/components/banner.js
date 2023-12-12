import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconsObjects from "../config/globalIcons";


const BannerComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className='slider_images'>
                <Slider {...settings}>
                    <div >
                        <img src={IconsObjects.bannerImages.Banner1} width="100%" />
                    </div>
                    <div>
                        <img src={IconsObjects.bannerImages.Banner2} width="100%" />
                    </div>
                </Slider>
            </div>
        </>
    )
}


export default BannerComponent;