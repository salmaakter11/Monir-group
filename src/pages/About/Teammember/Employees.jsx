import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import makeRequest from '../../../../AxiosClient';
import HorizontalLoader from '../../../common/loader/HorizontalLoader';

const Employees = () => {

    const { isLoading, error, data:teammemberEmployee } = useQuery({
        queryKey: ['teammemberEmployee'],
        queryFn: async () =>
          {
            const response = await makeRequest({ url: `/api/teammember/company`, method: 'get'});
              return response.data;
          }
      })

    return (
        <>
            {isLoading ? <HorizontalLoader /> : ''}
            <section className="team-area grey-soft-bg pb-80">
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <div className="col-xxl-10">
                            <div className="section_title_wrapper text-center mb-50">
                                <h4 className="section-title text-info">
                                    Dedicated Employee
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center g-4">
                        {
                            teammemberEmployee?.map((d, i) => (
                                <div key={i} className="col-xxl-2 col-md-4 ">
                                    <div className="partner-img ">
                                        <Link to={`/team-member/${d.id}`}><img src={d.company_logo} alt='' /></Link>
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

export default Employees;