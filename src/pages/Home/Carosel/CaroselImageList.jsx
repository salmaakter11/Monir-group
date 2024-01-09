import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CaroselImageList = ({ index, currentSlide, image, title_one, title_two }) => {
    return (
        <>
            <div className={index === currentSlide ? "slide current" : "slide"}>
                {
                    index === currentSlide && (
                        <>
                            <img alt={'Image'} src={image ? image : ''} width={"100%"} height={"100%"} />



                            <div className="content">
                                <span className="span1"></span>
                                <span className="span2"></span>
                                <span className="span3"></span>
                                <span className="span4"></span>
                                <h2 style={{fontSize: "5vw"}}>{title_one}</h2>
                                <p>{title_two}</p>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default CaroselImageList;