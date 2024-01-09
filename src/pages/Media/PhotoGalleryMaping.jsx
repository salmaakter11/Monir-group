import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, NavLink } from "react-router-dom";

const PhotoGalleryMaping = (props) => {
    const { id: gallery_id, thumb, name, created_at } = props.galleryData || {};
    const dateObject = new Date(created_at);
    return (
        <>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ">
                <article className="blog mb-30 rounded shadow gallary_container ">
                    <div className="blog__thumb ">
                        <a >
                            <LazyLoadImage alt={'Image'} className="gallary_img" src={thumb[0]} placeholder={<h2>Loading...</h2>} />
                            </a>
                        <div className="gallary_middle">
                            <div className="gallary_text"><Link to={`${gallery_id}`}> See Gallery</Link></div>
                        </div>
                        <div className="blog__content text-center">
                            <div className="blog-meta">
                                <span> <a >{name != null && name.length > 25 ? name.slice(0, 25) + '...' : name}</a> </span>
                            </div>

                            <div className="py-1">
                                <small className="text-secondary">{dateObject.getDate()} {dateObject.toLocaleString('default', { month: 'long' }) + 1} {dateObject.getFullYear()} 
                                </small>
                            </div>

                        </div>
                    </div>

                </article>
            </div>
        </>
    );
};

export default PhotoGalleryMaping;