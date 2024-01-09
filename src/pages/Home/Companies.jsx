import makeRequest from "../../../AxiosClient";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import { useQuery } from "@tanstack/react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect } from "react";
import { useRef } from "react";




const Companies = () => {
    
    const backgroundRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              // When the background element is in the viewport, load the background image
              backgroundRef.current.style.backgroundImage = 'url(assets/img/popularct/plr-ct.jpg)';
            }
          },
          { rootMargin: '0px 0px 100px 0px' } // Adjust the root margin as needed
        );
    
        if (backgroundRef.current) {
          observer.observe(backgroundRef.current);
        }
    
        return () => {
          if (backgroundRef.current) {
            observer.unobserve(backgroundRef.current);
          }
        };
      }, []);



    const { isLoading, error, data:homeCompany } = useQuery({
        queryKey: ['homeCompany'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: '/api/teammember/company', method: 'get'});
              return response.data;
          }
      })








    let settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: homeCompany?.length>=4 ? 4 :1,
        slidesToScroll: homeCompany?.length>=4 ? 2 :1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
            <section className="popularct-area pt-110 pb-160"   ref={backgroundRef} style={{ backgroundImage: 'none' }}>
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-xxl-10">
                            <div className="section_title_wrapper popularct-extra text-center">
                                <span className="subtitle">
                                    Companies
                                </span>
                                <h2 className="section-title">
                                    Choose your favorite service from <br /> Monir Group
                                </h2>

                                <div className="p-5 m-auto">
                                    <Slider {...settings}>
                                        {
                                            homeCompany?.length > 0 ? homeCompany?.map((d, i) => (
                                                <div key={i} className='p-2'>

                                                    <LazyLoadImage alt={'Image'} effect="blur" className="bg-light shadow rounded m-auto" style={{ width: '250px', height: '200px', padding: '10px' }} src={d?.company_logo}  />
                                                    <Link to={d?.web_link} target='_blank' className="btn-link text-white mt-2 ">{d?.company_name}</Link>
                                                </div>

                                            )) : ''
                                        }

                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Companies;