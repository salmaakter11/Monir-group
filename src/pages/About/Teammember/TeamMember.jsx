import React, { Suspense } from 'react';
import InfinitiScrollLoader from "../../../common/infinitiScroll/InfinitiScrollLoader";
import CommonBanner from "../../CommonBanner";
const Ceo = React.lazy(() => import("../Teammember/Ceo"));
const Managements = React.lazy(() => import("./Managements"));
const Employees = React.lazy(() => import("./Employees"));
import BannerImg from '../../../assets/Image/Banner/teammember.jpg'
import PageTitle from '../../../common/page_title/PageTitle';

const TeamMember = () => {


    return (
        <>
         <PageTitle title="Team Member" />
            <CommonBanner image={BannerImg} base="About" title="Team Member" />
            <Suspense fallback={<InfinitiScrollLoader />}> <Ceo /></Suspense>
            <Suspense fallback={<InfinitiScrollLoader />}> <Managements /></Suspense>
            <Suspense fallback={<InfinitiScrollLoader />}> <Employees /></Suspense>

        </>
    );
};

export default TeamMember;