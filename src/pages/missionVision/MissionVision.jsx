import { useEffect, useState } from "react";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import CommonBanner from "../CommonBanner";
import BannerImg from '../../assets/Image/Banner/mission&Vision.jpg'
import PageTitle from "../../common/page_title/PageTitle";
import { useQuery } from "@tanstack/react-query";

const MissionVision = () => {


    const { isLoading, error, data:missionVisionData } = useQuery({
        queryKey: ['missionVisionData'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: '/api/home/mission_vision', method: 'get'});
              return response.data;
          }
      })

    

    return (
        <>
         <PageTitle title="Mission Vision" />
            <CommonBanner image={BannerImg} base="About" title={"Mission and Vision"} />
            {isLoading ? <HorizontalLoader /> : ''}
            <main>
                <section className="team__details pt-90 pb-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="team__details-info mt-60">
                                    <h4 className="wow fadeInUp" data-wow-delay=".4s">Mission</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">{missionVisionData?.mission}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="team__details-info mt-60">
                                    <h4 className="wow fadeInUp" data-wow-delay=".4s">Vission</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">{missionVisionData?.vission}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </main>

        </>
    );
};

export default MissionVision;