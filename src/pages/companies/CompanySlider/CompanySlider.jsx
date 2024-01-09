import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CompanySlider.scss"; // Import a CSS file for additional styling

const CompanySlider = ({ companySlide }) => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
    };


    return (
        <>
            <div className="company-slider-container">
                <Slider {...settings}>
                    {companySlide?.map((d, i) => (
                        <div key={i} className="slider-item">
                            <div
                                className="background-image"
                                style={{ backgroundImage: `url(${d?.image_lg})` }}
                            >
                                <div className="title-overlay">
                                    <h2>{d?.title_one}</h2>
                                    <p>{d?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default CompanySlider;

