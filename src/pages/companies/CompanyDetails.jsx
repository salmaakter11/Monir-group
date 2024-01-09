import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import makeRequest from '../../../AxiosClient';
import InfinitiScrollLoader from '../../common/infinitiScroll/InfinitiScrollLoader';
import HorizontalLoader from '../../common/loader/HorizontalLoader';
import PageTitle from '../../common/page_title/PageTitle';

const CompanyServices = React.lazy(() => import("./CompanyServices"));
const CompanyManagementTeam = React.lazy(() => import("./CompanyManagementTeam"));
const CompanyEmployee = React.lazy(() => import("./CompanyEmployee"));
const CompanySlider = React.lazy(() => import("./CompanySlider/CompanySlider"));
const CompanyDetails = () => {
    const { company_id } = useParams()





    const { isLoading, error, data:companyDetailsPage } = useQuery({
        queryKey: [`companyDetailsPage${company_id}`],
        queryFn: async () =>
          {
            const response = await makeRequest({ url:`/api/company_list/${company_id}`, method: 'get'});
              return response.data;
          }
      })




    return (
        <>
            <PageTitle title="Company Details" />
            {isLoading ? <HorizontalLoader /> : ''}
            <Suspense fallback={<InfinitiScrollLoader />}> <CompanySlider companySlide={companyDetailsPage?.company_slider} /></Suspense>
            <Suspense fallback={<InfinitiScrollLoader />}> <CompanyServices company={companyDetailsPage?.company} services={companyDetailsPage?.services} /></Suspense>
            <Suspense fallback={<InfinitiScrollLoader />}> <CompanyManagementTeam management={companyDetailsPage?.management} /></Suspense>
            <Suspense fallback={<InfinitiScrollLoader />}> <CompanyEmployee empdata={companyDetailsPage?.employee} /></Suspense>
        </>
    );
};

export default CompanyDetails;