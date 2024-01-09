import { Link } from "react-router-dom";

const CompanyServices = ({ company, services }) => {
    return (
        <>
            <section className="team__details">

                <div className="card">
                    <div className="card-body shadow" >
                        <div className="row  px-3">
                            <div className="col-xl-12 ">
                                <div className="team__details-info  ">
                                    <Link to={company?.web_link} target="_blank"><h4 className="wow fadeInUp text-secondary mb-1 btn btn-link" data-wow-delay=".4s">{company?.company_name}</h4></Link>
                                    <p className="wow fadeInUp px-5 mx-2" data-wow-delay=".6s">  {company?.description} </p>
                                </div>

                            </div>
                        </div>


                        {services?.length > 0 ?
                            <div className="row px-5 mx-1">
                                <div className="col-md-12 ">
                                    <h4 className="text-warning">Our Services</h4>
                                    <div className="ps-3">

                                        {
                                            services?.length > 0 ?
                                                services.map((d, i) => (
                                                    <h6 key={i} className="text-secondary"> {i + 1}. <Link className="btn btn-link text-dark" to={'/service-details/' + d.id}> {d.service_name}</Link></h6>
                                                ))
                                                : ''
                                        }

                                    </div>
                                </div>
                            </div>

                            : ''}
                    </div>
                </div>




            </section>
        </>
    );
};

export default CompanyServices;