import { Link } from "react-router-dom";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useQuery } from "@tanstack/react-query";

const AboutMonirGroup = () => {
    const { isLoading, error, data:homeAbout } = useQuery({
        queryKey: ['homeAbout'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: '/api/home/about', method: 'get'});
              return response.data;
          }
      })
    return (
        <>
            {isLoading ? <HorizontalLoader /> : ''}
            <>
            <section className="about-area pt-120 pb-90">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 mb-30">
                            <div className="section_title_wrapper">
                                <span className="subtitle">
                                    About Monir Group
                                </span>
                                <h2 className="section-title about-span mb-30">
                                    <span>11+</span>  Years of Your Trust and Recommendation
                                </h2>
                                <div className="section_title_wrapper-about-content">
                                    <h5>IATA, ATAB, Toab, Civil Aviation &amp; BASIS Certified </h5>
                                    <p> {homeAbout?.description != null && homeAbout?.description.length > 100 ? homeAbout?.description.slice(0, 100) + '...' : homeAbout?.description}</p>
                                    <Link to='about' className="theme-btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 mb-30">
                            <div className="about_wrapper">
                                <div className="about_wrapper__certificate">
                                    <img src="assets/img/about/certificate.png" alt='' />
                                </div>
                                <div className="about_wrapper__group">
                                    <div className="about_wrapper__group-top mb-15">
                                        <LazyLoadImage alt={'Image'} effect="blur" src={"/assets/img/about/about-1.jpg"}    />
                                    </div>
                                    <div className="about_wrapper__group-btm d-flex align-items-center justify-content-end">
                                        <div className="about_wrapper__group-btm-img1 ml-30">
                                            <LazyLoadImage alt={'Image'} effect="blur" src={"/assets/img/about/about-2.jpg"}    />
                                        </div>
                                        <div className="about_wrapper__group-btm-img2 ml-15">
                                            <LazyLoadImage alt={'Image'} effect="blur" src={"assets/img/about/about-3.jpg"}    />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fact-area pb-90 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="fact text-center">
                                <h1 className="counter-count"><span >25</span>k+</h1>
                                <span>Happy Clients</span>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="fact text-center ">
                                <h1 className="counter-count"><span >80</span>+</h1>
                                <span>Employment Create</span>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="fact text-center ">
                                <h1 className="counter-count"><span >13</span>+</h1>
                                <span>Sister Conscern Company</span>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                            <div className="fact text-center ">
                                <h1 className="counter-count"><span >9</span>k+</h1>
                                <span>Visa Success</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </>
        </>
    );
};

export default AboutMonirGroup;