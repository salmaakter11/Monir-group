import { useState } from "react";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import makeRequest from "../../../AxiosClient";
import EndMessage from "../../common/infinitiScroll/EndMessage";
import InfinitiScrollLoader from "../../common/infinitiScroll/InfinitiScrollLoader";
import HorizontalLoader from "../../common/loader/HorizontalLoader";
import CommonBanner from "../CommonBanner";
import PhotoGalleryMaping from "./PhotoGalleryMaping";
import BannerImage from './../../assets/Image/Banner/photogallery.jpg'
import PageTitle from "../../common/page_title/PageTitle";

const PhotoGallery = () => {
    const [loading, setLoading] = useState(false);
    const [galleryData, setGalleryData] = useState([])
    const [pageNumber, setPageNumber] = useState(1);
    const [total, setTotal] = useState(0)


    const getData = (page = 1) => {

        makeRequest({
            url: `/api/gallery-img?page=${page}`,
            method: 'get',
        })
            .then(({ data }) => {
                setGalleryData([...galleryData, ...data.data])
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
            getData(pageNumber)
        }

    }, [pageNumber])

    return (
        <>
         <PageTitle title="Photo Gallery" />
            <CommonBanner image={BannerImage} base="Media" title={"Photo Gallery"} />
            {loading ? <HorizontalLoader /> : ''}
            <section className="blog-area  pb-90 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>

            

                <InfiniteScroll
                    dataLength={galleryData.length}
                    next={() => { setPageNumber(pageNumber + 1) }}
                    hasMore={galleryData.length < total}
                    loader={<InfinitiScrollLoader />}
                    endMessage={galleryData.length > 0 ? <EndMessage /> : ''}
                    scrollThreshold={0.3}
                >
                    <div className="container pt-5">
                        <div className="row">
                            {
                                galleryData.length != 0 ? (galleryData.map((d, index) => (
                                    <PhotoGalleryMaping key={index} galleryData={d} />

                                ))) :''
                            }

                        </div>

                    </div>
                </InfiniteScroll>

            </section>

        </>
    );
};

export default PhotoGallery;