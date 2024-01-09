import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import makeRequest from "../../../../AxiosClient";
import HorizontalLoader from "../../../common/loader/HorizontalLoader";

const Ceo = () => {

    const { isLoading, error, data:teamMemberCeo } = useQuery({
        queryKey: ['teamMemberCeo'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: `/api/home/md-profile`, method: 'get'});
              return response.data;
          }
      })

    return (
        <>
          {isLoading ? <HorizontalLoader /> : ''}
            <section className="tagent__area grey-bg-3 pt-110 pb-40">
                <div className="tagent__bg" style={{ backgroundImage: 'url(/assets/img/team/team.png)' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 d-flex align-items-center">
                            <div className="section_title_wrapper pr-70">
                                <span className="subtitle">
                                    Dedicated employee
                                </span>
                                <h2 className="section-title">
                                    Employee are dedicatedly Working for you
                                </h2>
                                <p className="pt-30 mb-40">All of our employee are very dedicated with thier responsibility and services. They are very hardworking facefull for your service. We got almost 80+ employee where there main target is to satisfy with your service.</p>
                                <a href="#" className="theme-btn">Join With Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="team-area grey-soft-bg pt-110 pb-80">
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <div className="col-xxl-10">
                            <div className="section_title_wrapper text-center mb-50">
                                <h4 className="section-title text-info">
                                    CEO
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <div className="col-xxl-4 col-md-6">
                            <div className="section_title_wrapper text-center mb-50">
                                <div className="team text-center mb-30">
                                    <div className="team__thumb team__thumb-2 mb-25 shadow rounded">

                                        <img src={teamMemberCeo?.image_lg} alt='' />

                                        <div className="team__thumb-info">
                                            <div className="team-social">
                                                <a href="#"><i className="fab fa-facebook-f" /></a>
                                                <a href="#"><i className="fab fa-twitter" /></a>
                                                <a href="#"><i className="fab fa-instagram" /></a>
                                                <a href="#"><i className="fab fa-youtube" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team__text">
                                        <h3 className="team__text-title">
                                            <a href="team-details.html">{teamMemberCeo?.name}</a>
                                        </h3>
                                       
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

export default Ceo;