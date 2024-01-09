import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import makeRequest from "../../../AxiosClient";
import DateFormate from "../../common/DateFormate";


import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import { useQuery } from "@tanstack/react-query";

const RecentBlog = () => {

    const { isLoading, error, data:homeRecentNotice } = useQuery({
        queryKey: ['homeRecentNotice'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: '/api/home/notice', method: 'get'});
              return response.data.data;
          }
      })
    return (
        <>
         {isLoading ? <HorizontalLoader /> : ''}
            <section className="blog-area pt-120 pb-90 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="section_title_wrapper mb-50">
                                <span className="subtitle">
                                    Recent Notice 
                                </span>
                                <h2 className="section-title">
                                    Recent updates of Monir Group and Sister Concern
                                </h2>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="section-title-right mb-30 mr-20">
                                <p>There are many update are happaning every moment in Monir Group. With the grace of almighty, we have many sister concern of Monir Group. We are porviding best service to setifiy our customer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        
                    {
                           homeRecentNotice?.length>0 ? homeRecentNotice?.map((d, i) => (
                                <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <article className="blog mb-30">
                                    <div className="blog__thumb">
                                        <Link to={`/notice/${d.id}`}> <LazyLoadImage src={d.image_md} alt=''  /></Link>
                                    </div>
                                    <div className="blog__content">
                                        <div className="blog-meta">
                                            <span> <i className="fal fa-calendar-day" /><a href="news-details.html">{d.company_name}</a></span>
                                            <span> <i className="far fa-user" /> {DateFormate(d.created_at)} </span>
                                        </div>
                                        <div className="blog-text">
                                            <h3 className="blog__content__title">
                                                <a href="news-details.html">{d.title}</a>
                                            </h3>
                                            <p>{d.description != null && d.description.length > 30 ? d.description.slice(0, 30) + '...' : d.description}</p>
                                            <div className="read-more">
                                            <Link to={`/notice/${d.id}`}>Read More <i className="fal fa-long-arrow-right" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            )) : ''
                        }


                    
                    </div>
                </div>
            </section>
        </>
    );
};

export default RecentBlog;