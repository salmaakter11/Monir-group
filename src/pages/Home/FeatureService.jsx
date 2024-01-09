import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import makeRequest from "../../../AxiosClient";
import HorizontalLoader from "../../common/loader/HorizontalLoader";

const FeatureService = () => {
    const [loading, setLoading] = useState(false);
    const [service, setService] = useState([])



    const getData = () => {

        makeRequest({
            url: `/api/home/service`,
            method: 'get',
        })
            .then(({ data }) => {
                setService(data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        getData()
    }, [])
    return (
        <>
            {loading ? <HorizontalLoader /> : ''}
            <section className="featurs-services pt-110 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10">
                            <div className="section_title_wrapper text-center mb-50 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                                <span className="subtitle">
                                    Featured Services
                                </span>
                                <h2 className="section-title">
                                    We Provide Multiple Service <br /> With Authorized Association
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">

                        {
                            service.map((d, i) => (
                                <div key={i} className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 mb-30 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                                    <div className="features">
                                        <div className="features__thumb">
                                            <a ><img src={d?.image} alt='' /></a>
                                        </div>
                                        <div className="features__content">
                                            <h3 className="features__content-title"> <a href="#"> {d.service_name != null && d.service_name.length > 25 ? d.service_name.slice(0, 25) + '...' : d.service_name}</a> </h3>
                                            <p>  {d.description != null && d.description.length > 25 ? d.description.slice(0, 25) + '...' : d.description}</p>
                                            <Link to={ '/service-details/'+d.id}>Read More <i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureService;