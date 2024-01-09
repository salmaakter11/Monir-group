import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";

const AuthorizeAndCEO = () => {
    const backgroundRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              // When the background element is in the viewport, load the background image
              backgroundRef.current.style.backgroundImage = 'url(assets/img/scholarship/scholarship-bg.jpg)';
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




    const { isLoading, error, data:homeMdMessage } = useQuery({
        queryKey: ['homeMdMessage'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: '/api/home/md-profile', method: 'get'});
              return response.data;
          }
      })

    return (
        <>
           {isLoading ? <HorizontalLoader /> : ''}

            <section className="scholarship-area d-flex align-items-center" ref={backgroundRef} style={{ backgroundImage: 'none' }}>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">

                            <LazyLoadImage alt={'Image'} effect="blur" src={homeMdMessage?.image_lg}   />

                        </div>
                        <div className="col-md-6 col-12 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                            <div className="scholarship__wrapper pt-110 pb-90">
                                <h2 className="scholarship__wrapper-title mb-30">Authorized from many national and international organizagation</h2>
                                <p>{homeMdMessage?.description != null && homeMdMessage?.description.length > 100 ? homeMdMessage?.description.slice(0, 100) + '...' : homeMdMessage?.description}</p>
                                <div className="scholarship__wrapper-img mb-40">
                                    <LazyLoadImage  effect="blur" src="assets/img/scholarship/s-1.png" alt=''   />
                                    <LazyLoadImage  effect="blur" src="assets/img/scholarship/s-2.png" alt=''  />
                                    <LazyLoadImage  effect="blur" src="assets/img/scholarship/s-3.png" alt='' />
                                    <LazyLoadImage  effect="blur" src="assets/img/scholarship/s-4.png" alt='' />
                                    <LazyLoadImage  effect="blur" src="assets/img/scholarship/s-5.png" alt='' />
                                </div>
                                <h5>Organized on : 05 April 2022</h5>
                                <Link to='contact' className="theme-btn blacks-hover">Contuct us </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AuthorizeAndCEO;