import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Testimonail = () => {


    const { isLoading, error, data:homeTestTionial } = useQuery({
        queryKey: ['homeTestTionial'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: '/api/contact_list', method: 'get'});
              return response.data;
          }
      })


      






    let settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: homeTestTionial?.length >= 3 ? 3 : 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            {isLoading ? <HorizontalLoader /> : ''}
            {homeTestTionial?.length > 0 ?
                <section className="testimonail-area bg-secondary pt-110 pb-190">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-10">
                                <div className="section_title_wrapper text-center mb-50">
                                    <span className="subtitle text-white">
                                        Testimonials
                                    </span>
                                    <h2 className="section-title">
                                        What Clients Say About Us and <br /> Our Services
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center p-5">
                            <Slider {...settings}>

                                {
                                    homeTestTionial.map((d, i) => (
                                        <div key={i}>
                                            <div className="testimonail__wrapper rounded m-2" style={{ height: "300px" }}>
                                                <div className="testimonail__wrapper__info d-flex align-items-center mb-25">
                                                    <div className="testimonail__wrapper__info__img ">
                                                        <LazyLoadImage alt={'Image'} effect="blur" src="/assets/img/testimonial/ts-1.png"  />
                                                    </div>
                                                    <div className="testimonail__wrapper__info__author">
                                                        <h4>{d.name}</h4>
                                                        <span>{d.email}</span>
                                                    </div>
                                                    <div className="testimonail__wrapper__info__quotes">
                                                        <i className="flaticon-quote" />
                                                    </div>
                                                </div>
                                                <div className="testimonail__wrapper__content">
                                                    <p>{d.message}</p>

                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }


                            </Slider>
                        </div>
                    </div>
                </section>
                : ''}
        </>
    );
};

export default Testimonail;