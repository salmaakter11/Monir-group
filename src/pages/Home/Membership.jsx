
import Slider from "react-slick";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useQuery } from "@tanstack/react-query";

const Membership = () => {

    const { isLoading, error, data:homemembership } = useQuery({
        queryKey: ['homemembership'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: '/api/membership', method: 'get'});
              return response.data.data;
          }
      })


    let settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 2000,
        autoplaySpeed: 100,
        slidesToShow: homemembership?.length >= 4 ? 4 : 1,
        slidesToScroll: homemembership?.length >= 4 ? 2 : 1,
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
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            {isLoading ? <HorizontalLoader /> : ""  }
            <section className="bg-primary pt-1">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-xxl-10">
                            <div className="section_title_wrapper popularct-extra text-center">


                                <div className="m-auto px-4">
                                    <Slider {...settings}>
                                        {
                                            homemembership?.length > 0 ? homemembership?.map((d, i) => (
                                                <div key={i} className='p-2 row'>
                                                    <div className="col-md-12">
                                                        <LazyLoadImage  effect="blur" alt={'Image'}  src={d?.image}  width={"150px"}  height={"80px"} className={"bg-light shadow rounded m-auto"}   />
                                                        <p className="text-white  ">{d?.name}</p>
                                                    </div>
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

export default Membership;