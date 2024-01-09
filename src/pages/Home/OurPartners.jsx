import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRef } from "react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import makeRequest from "../../../AxiosClient";

const OurPartners = () => {

    const backgroundRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              // When the background element is in the viewport, load the background image
              backgroundRef.current.style.backgroundImage = 'url(assets/img/partners/partners-1.png)';
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



    // const { isLoading, error, data:homeCompany } = useQuery({
    //     queryKey: ['homeCompany'],
    //     queryFn: async () =>
    //       {
    //         const response = await makeRequest({ url: '/api/teammember/company', method: 'get'});
    //           return response.data;
    //       }
    //   })
    return (
        <>
            <section className="partners-area pt-120 pb-100"  ref={backgroundRef} style={{ backgroundImage: 'none' }}>
                <div className="container">
                    <div className="row ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                            <div className="section_title_wrapper partners-65 mb-30">
                                <span className="subtitle">
                                    Our Sister Concern
                                </span>
                                <h2 className="section-title">
                                    Our Sister Concern <br />And Consultancy
                                </h2>
                                <p className="mt-30 mb-40">With the grace of almighty, we have many sister concern of Monir Group. The main goal of Monir Group is to satisfy our customer and finish every work as high priority work. So that, customer got fully setisfied with our service. </p>
                                <Link to='partner' className="theme-btn partner-btn">See All Partners</Link>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                            <div className="row g-0">
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div className="partner-img">
                                        <a href="#">   <LazyLoadImage alt={'Image'} effect="blur" src={"/assets/img/partners/pt-1.png"} /></a>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div className="partner-img">
                                        <a href="#">   <LazyLoadImage alt={'Image'} effect="blur" src={"/assets/img/partners/pt-2.png"} /></a>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div className="partner-img">
                                        <a href="#">   <LazyLoadImage alt={'Image'} effect="blur" src={"/assets/img/partners/pt-3.png"} /></a>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div className="partner-img">
                                        <a href="#">   <LazyLoadImage alt={'Image'} effect="blur" src={"/assets/img/partners/pt-4.png"} /></a>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div className="partner-img">
                                        <a href="#">   <LazyLoadImage alt={'Image'} effect="blur" src={"/assets/img/partners/pt-5.png"} /></a>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div className="partner-img">
                                        <a href="#">   <LazyLoadImage alt={'Image'} effect="blur" src={"assets/img/partners/pt-6.png"} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurPartners;