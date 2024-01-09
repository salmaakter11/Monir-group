import React, { Suspense } from 'react';
import Master from "./layouts/Master"
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Notice from "./pages/Media/Notice";
import Contact from "./pages/Contact/Contact";
import { useEffect } from "react";
import External from './ExternalJs/External.js'
import MdMessage from "./pages/About/MdMessage";
import TeamMember from "./pages/About/Teammember/TeamMember";
import $ from 'jquery';
import Management from "./pages/About/Management";
import Companies from "./pages/companies/Companies";
import PhotoGallery from "./pages/Media/PhotoGallery";
import PhotoGalleryDetails from "./pages/Media/PhotoGalleryDetails";
import VideoGallery from "./pages/Media/VideoGallery";
import Document from "./pages/document/Document";
import MissionVision from "./pages/missionVision/MissionVision";
import NotFoundPage from "./pages/not_found_page/NotFoundPage";
import CompanyWiseTeamMember from "./pages/About/CompanyWiseTeamMember";
import CompanyDetails from "./pages/companies/CompanyDetails";
import NoticeDetails from "./pages/Media/NoticeDetails";
import ServicesDetails from "./pages/Services/ServicesDetails";
import Career from "./pages/Media/Career/Career";
import CareerDetails from "./pages/Media/Career/CareerDetails";
import InfinitiScrollLoader from './common/infinitiScroll/InfinitiScrollLoader';
const ApplyJobs = React.lazy(() => import("./pages/Media/Career/ApplyJobs"));



function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<Master />} >
          <Route path="" element={<Home />} />
          <Route path="service-details/:service_id" element={<ServicesDetails />} />
          <Route path="about" element={<About />} />
          <Route path="founder-lagency" element={<MdMessage />} />
          <Route path="team-member" element={<TeamMember />} />
          <Route path="team-member/:company_id" element={<CompanyWiseTeamMember />} />
          <Route path="mission-vision" element={<MissionVision />} />
          <Route path="management" element={<Management />} />
          <Route path="companies" element={<Companies />} />
          <Route path="companies/:company_id" element={<CompanyDetails />} />
          <Route path="media" element={<Notice />} />
          <Route path="video-gallery" element={<VideoGallery />} />
          <Route path="photo-gallery" element={<PhotoGallery />} />
          <Route path="photo-gallery/:id" element={<PhotoGalleryDetails />} />
          <Route path="notice" element={<Notice />} />
          <Route path="notice/:notice_id" element={<NoticeDetails />} />
          <Route path="career" element={<Career />} />
          <Route path="career/:career_id" element={<CareerDetails />} />
          <Route path="apply-job"  element={ <Suspense fallback={<InfinitiScrollLoader />}> <ApplyJobs /></Suspense>} />
          <Route path="document" element={<Document />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

    </>
  )
}

export default App
