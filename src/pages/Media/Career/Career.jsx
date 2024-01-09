import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import makeRequest from "../../../../AxiosClient";
import DateFormate from "../../../common/DateFormate";
import InfinitiScrollLoader from "../../../common/infinitiScroll/InfinitiScrollLoader";
import HorizontalLoader from "../../../common/loader/HorizontalLoader";
import PageTitle from "../../../common/page_title/PageTitle";

const Career = () => {


    const { isLoading, error, data:carrerPage } = useQuery({
        queryKey: ['carrerPage'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: `/api/apply_job`, method: 'get'});
              return response?.data?.data;
          }
      })



    return (
        <>
         <PageTitle title="Career" />
            {isLoading ? <HorizontalLoader /> : ''}
            {isLoading ? <InfinitiScrollLoader /> : ''}
            <section className="job-listings mt-5">
                <div className="container">
                    <div className="row ">

                        {
                            carrerPage?.map((d, i) => (
                                    <div key={i} className="col-md-4 col-sm-6 col-12 mb-4 ">
                                    <div className="card shadow">
                                        <div className="card-body">
                                            <h5 className="card-title"> <Link to={d.id} className="text-primary">{d?.job_title}</Link></h5>
                                            <p className="card-text my-0 py-0">Type: <strong>{d?.job_type}</strong> </p>
                                            <p className="card-text my-0 py-0">Published : <strong>{d.publish_date} </strong> </p>
                                            <p className="card-text my-0 py-0">Deadline  : <strong>{d.deadline_date}</strong> </p>
                                            <Link to={d.id} className="btn btn-outline-info">See Details</Link>
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

export default Career;