import { useEffect, useState } from "react";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import CommonBanner from "../CommonBanner";
import BannerImg from '../../assets/Image/Banner/mdmessage.jpg'
import PageTitle from "../../common/page_title/PageTitle";
import { useQuery } from "@tanstack/react-query";

const MdMessage = () => {


    const { isLoading, error, data:mdMessagePage } = useQuery({
        queryKey: ['mdMessagePage'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: `/api/home/md-profile`, method: 'get'});
              return response.data;
          }
      })


    return (
        <>
         <PageTitle title="MD Message" />
            <CommonBanner image={BannerImg} title="MD Message" />
            {isLoading ? <HorizontalLoader /> : ''}
            <main>
                {/*  partners-ofinner-area start */}
                <section className="team__details pt-90 pb-10">
                    <div className="container">
                        <div className="team__details-inner p-relative white-bg">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team__details-img w-img mr-50">
                                        <img src={mdMessagePage?.image_lg} className="w-100" alt='' />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team__details-content pt-50">
                                        <span className="wow fadeInUp" data-wow-delay=".4s">Managing Director</span>
                                        <h3 className="wow fadeInUp" data-wow-delay=".6s">{mdMessagePage?.name}</h3>
                                        <p className="wow fadeInUp" data-wow-delay=".8s">{mdMessagePage?.description}</p>
                                        <div className="team__details-contact mb-45">
                                            <ul>
                                                <li className="wow fadeInUp" data-wow-delay="1s">
                                                    <div className="icon">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                    <div className="text">
                                                        <span><a href="mailto:ceo@monirgroup.net">{mdMessagePage?.email}</a></span>
                                                    </div>
                                                </li>
                                                <li className="wow fadeInUp" data-wow-delay="1s">
                                                    <div className="icon">
                                                        <i className="fas fa-phone-alt" />
                                                    </div>
                                                    <div className="text">
                                                        <span><a href="tel:(+642)-394-396-432">{mdMessagePage?.phone}</a></span>
                                                    </div>
                                                </li>
                                                <li className="wow fadeInUp" data-wow-delay="1s">
                                                    <div className="icon">
                                                        <i className="fal fa-map-marker-alt" />
                                                    </div>
                                                    <div className="text">
                                                        <span>{mdMessagePage?.address}</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="team__details-social theme-social wow fadeInUp mb-3" data-wow-delay="1s">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/LionMonirul/">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.youtube.com/@LionMonir">
                                                        <i className="fab fa-youtube" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  partners-ofinner-area end */}
            </main>

        </>
    );
};

export default MdMessage;