import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import makeRequest from "../../../AxiosClient";
import EndMessage from "../../common/infinitiScroll/EndMessage";
import InfinitiScrollLoader from "../../common/infinitiScroll/InfinitiScrollLoader";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import CommonBanner from "../CommonBanner";
import BannerImg from '../../assets/Image/Banner/videogallery.jpg'
import PageTitle from "../../common/page_title/PageTitle";


const VideoGallery = () => {
  const [loading, setLoading] = useState(false);
  const [videos, setVideo] = useState([])
  const [pageNumber, setPageNumber] = useState(1);
  const [total, setTotal] = useState(0)


  const getData = (page = 1) => {

    makeRequest({
      url:`/api/video_gallery?page=${page}`,method:'get',})
      .then(({ data }) => {
        setVideo([...videos, ...data.data])
        setTotal(data.total)
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
         <PageTitle title="Video Gallery" />
            <CommonBanner image={BannerImg} title={"Video Gallery"} />
            {loading ? <HorizontalLoader /> : ''}

            
            <section className="blog-area pt-60 pb-90 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                    <InfiniteScroll
                        dataLength={videos.length}
                        next={() => { setPageNumber(pageNumber + 1) }}
                        hasMore={videos.length < total}
                        loader={<InfinitiScrollLoader />}
                        endMessage={videos.length > 0 ? <EndMessage /> : ''}
                        scrollThreshold={0.3}
                        >
                        <div className="container pt-5">
                            <div className="row">
                            {
                                videos.length != 0 ? (videos.map((d, index) => (
                                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                        <article className="blog mb-30 rounded shadow gallery_container h-100">
                                            <div className="blog__thumb">
                                                <iframe
                                                    className="img-thumbnail rounded lazyload" src={d.video_link} title="Embedded Video" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                                                <h5 className="text-center text-secondary ">{d.description}</h5>
                                            </div>
                                        </article>
                                    </div>

                                ))) : ''
                            }
                            </div>
                        </div>
                    </InfiniteScroll>
          </section>
        </>
    );
};

export default VideoGallery;