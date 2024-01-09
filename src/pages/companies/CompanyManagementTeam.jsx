
const CompanyManagementTeam = ({management}) => {
    return (
        <>
        {management?.length >0 ?
       
            <section className="team-area grey-soft-bg pt-110 pb-80">
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        <div className="col-xxl-10">
                            <div className="section_title_wrapper text-center mb-50">
                                <h4 className="section-title text-info">
                                    Management Team
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                        {
                            management.map((d, i) => (
                                <div key={i} className="col-xxl-3 col-md-3">
                                <div className="section_title_wrapper text-center mb-50">
                                    <div className="team text-center mb-30">
                                        <div className="team__thumb team__thumb-2 mb-25 shadow rounded">
    
                                            <img src={d?.image_lg} alt='' />
    
                                            <div className="team__thumb-info">
                                                <div className="team-social">
                                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                                    <a href="#"><i className="fab fa-twitter" /></a>
                                                    <a href="#"><i className="fab fa-instagram" /></a>
                                                    <a href="#"><i className="fab fa-youtube" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team__text">
                                            <h3 className="team__text-title">
                                                <a href="team-details.html">{d?.name}</a>
                                            </h3>
                                            <span>{d?.designation_data}, {d?.company_name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        
                    </div>
                </div>
            </section>

            : ''}
        </>
    );
};

export default CompanyManagementTeam;