import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import makeRequest from "../../../AxiosClient";
import DateFormate from "../../common/DateFormate";
import InfinitiScrollLoader from "../../common/infinitiScroll/InfinitiScrollLoader";
import PageTitle from "../../common/page_title/PageTitle";

const NoticeDetails = () => {
    const navigate = useNavigate()
    const { notice_id } = useParams()
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})

    useEffect(() => {
        setLoading(true)
        makeRequest({
            url: `/api/notice/${notice_id}`,
            method: 'get',
        })
            .then(({ data }) => {
                setLoading(false)
                setData(data.data)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
                navigate('/404')
            })
    }, [])
    return (
        <>
         <PageTitle title="Notice" />
            {loading ? <InfinitiScrollLoader /> :
                <section className="blog-details-area pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="blog__details--wrapper mr-50 mb-50">
                                    <div className="ablog ablog-4 mb-55">
                                        <div className="ablog__img wow fadeInUp">
                                            <img src={data.image_lg} className="img-fluid" alt="img" />
                                        </div>
                                        <div className="ablog__text ablog__text4">
                                            <div className="ablog__meta ablog__meta4">
                                                <ul>
                                                    <li><a href="#0"><i className="far fa-calendar-check" /> {DateFormate(data.created_at)} </a></li>
                                                    <li><a href="#0"><i className="far fa-user" />{data.company_name}</a></li>
                                                </ul>
                                            </div>
                                            <h3 className="ablog__text--title4 mb-10">{data.title}</h3>
                                            <p className="mb-30">{data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}

        </>
    );
};

export default NoticeDetails;