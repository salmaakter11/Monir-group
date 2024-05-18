import React, { Suspense } from 'react';
import InfinitiScrollLoader from '../../common/infinitiScroll/InfinitiScrollLoader';
import PageTitle from '../../common/page_title/PageTitle';

// Lazy-loaded components
const LazyCarosel = React.lazy(() => import('./Carosel/Carosel'));
const LazyMembership = React.lazy(() => import('./Membership'));
const LazyAuthorizeAndCEO = React.lazy(() => import('./AuthorizeAndCEO'));
const LazyAboutMonirGroup = React.lazy(() => import('./AboutMonirGroup'));
const LazyCompanies = React.lazy(() => import('./Companies'));
const LazyOurMission = React.lazy(() => import('./OurMission'));
const LazyOurPartners = React.lazy(() => import('./OurPartners'));
const LazyTestimonail = React.lazy(() => import('./Testimonail'));
const LazyRecentBlog = React.lazy(() => import('./RecentBlog'));

const Home = () => {
  return (
    <>
      <main>
        <PageTitle title="Home" />

        <Suspense fallback={<InfinitiScrollLoader />}>
          <LazyCarosel />
          <LazyMembership />
        </Suspense>

        <Suspense fallback={<InfinitiScrollLoader />}>
          <LazyAuthorizeAndCEO />
          <LazyAboutMonirGroup />
          <LazyCompanies />
        </Suspense>

        <Suspense fallback={<InfinitiScrollLoader />}>
          <LazyOurMission />
          <LazyOurPartners />
          <LazyTestimonail />
          <LazyRecentBlog />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
