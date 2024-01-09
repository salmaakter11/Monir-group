import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import makeRequest from "../../../AxiosClient";
import DateFormate from "../../common/DateFormate";
import EndMessage from "../../common/infinitiScroll/EndMessage";
import InfinitiScrollLoader from "../../common/infinitiScroll/InfinitiScrollLoader";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import CommonBanner from "../CommonBanner";
import Select from "react-select";
import DatePicker from "react-datepicker";
import BannerImg from '../../assets/Image/Banner/notice.jpg'

import "react-datepicker/dist/react-datepicker.css";
import PageTitle from "../../common/page_title/PageTitle";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Notice = () => {
  const [loading, setLoading] = useState(false);
  const [noticeData, setNoticeData] = useState([])
  const [pageNumber, setPageNumber] = useState(1);
  const [total, setTotal] = useState(0)



  const getData = (page = 1) => {

    makeRequest({
      url: `/api/notice?page=${page}`,
      method: 'get',
    })
      .then(({ data }) => {
        setNoticeData([...noticeData, ...data.data])
        setTotal(data.meta.total)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      })
  }


  useEffect(() => {
    setLoading(true)
    if (pageNumber > 1) {
      const timer = setTimeout(() => {
        getData(pageNumber);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      getData(pageNumber);
    }

  }, [pageNumber])





  return (
    <>
     <PageTitle title="Notice" />
      <div>
        {/* page title area start */}
        <CommonBanner image={BannerImg} title={"Notice"} />
        {loading ? <HorizontalLoader /> : ''}

        {/* page title area end */}
        <main>
          {/*  partners-ofinner-area start */}
          <section className="blog-area pt-60 pb-90 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>

            <InfiniteScroll
              dataLength={noticeData.length}
              next={() => { setPageNumber(pageNumber + 1) }}
              hasMore={noticeData.length < total}
              loader={<InfinitiScrollLoader />}
              endMessage={noticeData.length > 0 ? <EndMessage /> : ''}
              scrollThreshold={0.3}
            >
              <div className="container">
                <div className="row">
                  {
                    noticeData.length != 0 ? (noticeData.map((d, index) => (
                      <div key={index} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <article className="blog mb-30">
                          <div className="blog__thumb">
                            <a> <LazyLoadImage alt={'Image'} src={d.image_md} placeholder={<h2>Loading...</h2>} /></a>
                          </div>
                          <div className="blog__content">
                            <div className="blog-meta">
                              <span> <i className="fal fa-calendar-day" /><a>{DateFormate(d.created_at)}</a></span>
                              <span> <i className="far fa-user" />{d.company_name}</span>
                            </div>
                            <div className="blog-text">
                              <h3 className="blog__content__title">
                                <a>{d.title}</a>
                              </h3>
                              <p> {d.description != null && d.description.length > 30 ? d.description.slice(0, 30) + '...' : d.description}</p>
                              <div className="read-more">
                                <Link to={`/notice/${d.id}`}>Read More <i className="fal fa-long-arrow-right" /></Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>

                    ))) : ''
                  }
                </div>
              </div>
            </InfiniteScroll>
          </section>
          {/*  partners-ofinner-area end */}
        </main>
      </div>

    </>
  );
};

export default Notice;