import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import makeRequest from "../../../../AxiosClient";
import InfinitiScrollLoader from "../../../common/infinitiScroll/InfinitiScrollLoader";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CareerDetails.scss'
import PageTitle from "../../../common/page_title/PageTitle";
import HorizontalLoader from "../../../common/loader/HorizontalLoader";

const CareerDetails = () => {
    const navigate = useNavigate()
    const { career_id } = useParams()
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({})

    useEffect(() => {
        setLoading(true)
        makeRequest({
            url: `/api/apply_job/${career_id}`,
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

    const handleApply =()=>{
        navigate('/apply-job',{ state: career_id } );
    }
    return (
        <>
              <PageTitle title="Jobs Details" />
              {loading ? <HorizontalLoader /> : ''}
            {loading ? <InfinitiScrollLoader /> :
                <div className="container mt-5">
                    <div className="row d-flex justify-content-around">
                        <div className="col-md-8">
                            <h1 className="my-0">{data?.job_title} </h1>
                            {data.company_name != '' ? <strong>{data.company_name}</strong> : ''}

                            <div className="row container">
                                {data.designation_data ? <div className="col-md-6 col-sm-12"> <p className="my-0"><strong>Post :</strong> {data.designation_data}</p></div> : ''}
                                {data.job_type ? <div className="col-md-6 col-sm-12"> <p className="my-0"><strong>Job Type :</strong> {data.job_type}</p></div> : ''}
                                {data.publish_date ? <div className="col-md-6 col-sm-12"> <p className="my-0"><strong>Published :</strong> {data.publish_date}</p></div> : ''}
                                {data.deadline_date ? <div className="col-md-6 col-sm-12"> <p className="my-0"><strong>Deadline :</strong> {data.deadline_date}</p></div> : ''}
                                {data.salary_range ? <div className="col-md-6 col-sm-12"> <p className="my-0"><strong>Salary :</strong> {data.salary_range}</p></div> : ''}
                                {data.vacancy ? <div className="col-md-6 col-sm-12"> <p className="my-0"><strong>Vacancy :</strong> {data.vacancy}</p></div> : ''}
                                {data.location ? <div className="col-md-6 col-sm-12"> <p className="my-0"><strong>Job Location :</strong> {data.location}</p></div> : ''}
                            </div>



                            {data?.description ?
                                <>
                                    <h3 className="text-secondary">Job Description</h3>
                                    <p>
                                        &nbsp;&nbsp; {data?.description}
                                    </p>
                                </>
                                : ''}



                            {data?.responsibility ?
                                <>
                                    <h3 className="text-secondary">Key Responsibilities</h3>
                                    <ul>
                                        <div className="quill-container">
                                            <ReactQuill value={data?.responsibility} readOnly={true} theme="snow" />
                                        </div>
                                    </ul>
                                </>
                                : ''}

                            {data?.educational_q ?
                                <>
                                    <h3 className="text-secondary">Educational Qualifications</h3>
                                    <ul>
                                        <div className="quill-container">
                                            <ReactQuill value={data?.educational_q} readOnly={true} theme="snow" />
                                        </div>
                                    </ul>
                                </>
                                : ''}

                            {data?.job_r ?
                                <>
                                    <h3 className="text-secondary">Job Requirment</h3>
                                    <ul>
                                        <div className="quill-container">
                                            <ReactQuill value={data?.job_r} readOnly={true} theme="snow" />
                                        </div>
                                    </ul>
                                </>
                                : ''}

                            {data?.benefit ?
                                <>
                                    <h3 className="text-secondary">Compensation & Other Benefits</h3>
                                    <ul>
                                        <div className="quill-container">
                                            <ReactQuill value={data?.benefit} readOnly={true} theme="snow" />
                                        </div>
                                    </ul>
                                </>
                                : ''}


                            <h3 className="text-secondary">How To Apply</h3>
                            <ul>

                                <div className="quill-container">
                                    <ReactQuill value={data?.contact} readOnly={true} theme="snow" />
                                </div>

                                <h4 className="text-center">Or</h4>

                                <div className="text-center mb-2">
                                    <button onClick={handleApply} className="btn btn-info">Apply Now</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default CareerDetails;