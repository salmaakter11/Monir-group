import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OurMission = () => {
  
  const backgroundRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the background element is in the viewport, load the background image
          backgroundRef.current.style.backgroundImage = 'url(assets/img/calltoaction/cl-bg.jpg)';
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

  return (
    <>
      <section className="global-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="section_title_wrapper global-text mb-30">
                <span className="subtitle">OUR MISSION</span>
                <h2 className="section-title">Our Journey to Reach The Global Business</h2>
                <p>
                  Explore business opportunities through strategic business units of the Group and
                  flourish and prosper in the concerned sectors by harnessing people’s power and
                  potential as well as making best use of resources giving due importance to national
                  priorities.
                </p>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="global-area-img">
                {/* Lazy-loaded foreground image */}
                <LazyLoadImage
                  alt={'Image'}
                  effect="blur"
                  src="assets/img/globall/Map.png"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="calltoaction-area d-flex align-items-center"
        ref={backgroundRef}
        style={{ backgroundImage: 'none' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3">
              <div className="calltoaction-img ">
                {/* Lazy-loaded foreground image */}
                <LazyLoadImage
                  alt={'Image'}
                  effect="blur"
                  src="assets/img/calltoaction/cl-1.png"
                  style={{
                    width: '100%',
                    height: '100%',
             
                  }}
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8">
              <h4 className="calltoaction-title pt-80 pb-75">
                Get a skilled job in Monir Group & set your goal for the future.
              </h4>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4">
              <div className="calltoaction-btn text-right">
                <Link to="contact" className="theme-btn cl-btn">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
