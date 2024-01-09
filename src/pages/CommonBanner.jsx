
const CommonBanner = ({ base='',title='',image='' }) => {
    return (
        <>
            <div className="page-title__area pt-110" style={{ backgroundImage: `url(${image!='' ? image :"/assets/img/about-us/ab-us.jpg"})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="page__title-wrapper text-center">
                                <h3 className="pb-100">{title ? title : ''}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="breadccrumb-bg">
                    <ul className="breadcrumb justify-content-center pt-20 pb-20">
                        <li className="bd-items"><a >{base ? base : "Home"}</a></li>
                        <li className="bd-items bdritems">|</li>
                        <li className="bd-items"> <a>{title ? title : ''}</a></li>
                    </ul>
                </nav>
            </div>

        </>
    );
};

export default CommonBanner;