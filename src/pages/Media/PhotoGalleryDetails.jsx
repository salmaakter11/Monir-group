import CommonBanner from "../CommonBanner";
import { BiShowAlt } from "react-icons/bi";
import ImageModal from "../../common/ImageModal";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import makeRequest from "../../../AxiosClient";
import InfinitiScrollLoader from "../../common/infinitiScroll/InfinitiScrollLoader";
import DateFormate from "../../common/DateFormate";
import BannerImg from '../../assets/Image/Banner/photogallery.jpg'
import PageTitle from "../../common/page_title/PageTitle";
import { LazyLoadImage } from "react-lazy-load-image-component";


const PhotoGalleryDetails = () => {

    const navigate = useNavigate()

    const { id: gallery_id } = useParams()
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [photo, setPhoto] = useState('')
    const [galleryData, setGalleryData] = useState([])


    const openModal = (p) => {
        setShowModal(true)
        setPhoto(p)
    }


    useEffect(() => {
        setLoading(true)
        makeRequest({
            url: `/api/gallery-img/${gallery_id}`,
            method: 'get',
        })
            .then(({ data }) => {
                setLoading(false)
                setGalleryData(data.data)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
                navigate('/404')
            })
    }, [])

    return (
        <>
         <PageTitle title="Photo Gallery" />
            <CommonBanner image={BannerImg}  title={"Gallery Details"} />
            {loading ? <InfinitiScrollLoader /> :
                <section className="blog-area  pb-90 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                    <div className="container pt-5">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="team__details-info mb-40">
                                <h4 className="wow fadeInUp text-center text-secondary pb-0 mb-0" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>{galleryData.name}</h4>
                                <p className="text-center pt-0"> <small className="text-dark">{DateFormate(galleryData.created_at)}</small></p>
                                <p className="wow fadeInUp text-center" data-wow-delay=".6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>{galleryData.description} </p>
                            </div>
                        </div>


                        <div className="row">

                            {
                                galleryData?.image_lg?.length > 0 ? (galleryData.image_lg.map((d, index) => (

                                    <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                        <article className="blog mb-30 rounded shadow gallary_container">
                                            <div className="blog__thumb">
                                              {/* <img className="gallary_img h-100" src={d} alt='' /> */}

                                              <LazyLoadImage alt={'Image'} src={d} className={"gallary_img"} width={"100%"}  height={"100%"} placeholder={<h2>Loading...</h2>} />

                                                <div className="gallary_middle">
                                                    <BiShowAlt className="text-dark p-1 fs-1 bg-warning rounded btn" onClick={() => { openModal(d) }}></BiShowAlt>
                                                </div>
                                            </div>
                                        </article>
                                    </div>

                                ))) : ''
                            }

                        </div>

                    </div>
                </section>

            }
            <ImageModal size='modal-lg' modalData={{ showModal, setShowModal }} title="Preview">
                <img className="img-fluid  w-100" src={photo} alt="" />

            </ImageModal>
        </>
    );
};

export default PhotoGalleryDetails;