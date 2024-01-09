import PageTitle from "../../common/page_title/PageTitle";
import CommonBanner from "../CommonBanner";

const Companies = () => {
  return (
    <>
      <div>
      <PageTitle title="Companies" />
        {/* page title area start */}
        <CommonBanner title={"Companies"} />
        {/* page title area end */}
        {/* services featurs start */}
        <div className="services-featurs pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="services-fimg">
                  <img src="assets/img/services/services-1.jpg" alt='' />
                </div>
                <div className="section_title_wrapper pt-40">
                  <span className="subtitle">
                    Featured Services
                  </span>
                  <h2 className="section-title">
                    WWe Give Our Best Until You Get Satisfied.
                  </h2>
                  <p className="pt-30 pb-25 mr-25">For the last 11 years, We have helped many client with their aviation problem, visa problem, IT problem soluciton also with domain &amp; hosting service. We belive with our service can satisfied every customer.</p>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-items services-itm-color mb-30">
                      <h4 className="services-items__title">
                        Air Ticket <br />
                        Booking
                      </h4>
                      <p>We got all the necessary permissions, documents and logistics for flight ticketing.</p>
                      <a className="aborder1" ><i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-items services-itm-color2 mb-30">
                      <h4 className="services-items__title">
                        Rent a Car <br />
                        Service
                      </h4>
                      <p>We got many car with many professional and well skilled driver.</p>
                      <a className="aborder2"><i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-items services-itm-color3 mb-30">
                      <h4 className="services-items__title">
                        Agro Farm <br />
                        Project
                      </h4>
                      <p>To give pure and handpicked food to people we build Monir Organic Agro Farm.</p>
                      <a className="aborder3"><i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-items services-itm-color4 mb-30">
                      <h4 className="services-items__title">
                        News Site <br />
                        Portal
                      </h4>
                      <p>To give relaibale and truth news to people we build Capital News 24.</p>
                      <a className="aborder4" ><i className="fal fa-long-arrow-right" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* services featurs end */}
        {/* featurs area start here */}
        <section className="featurs-services pt-90 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="features">
                  <div className="features__thumb">
                    <a ><img src="assets/img/featurs/featurs-1.jpg" alt='' /></a>
                  </div>
                  <div className="features__content">
                    <h3 className="features__content-title"> <a >Business Visa</a> </h3>
                    <p>We helped with other family based employment based and investment based Immigration.</p>
                    <a >Read More <i className="fal fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="features">
                  <div className="features__thumb">
                    <a ><img src="assets/img/featurs/featurs-2.jpg" alt='' /></a>
                  </div>
                  <div className="features__content">
                    <h3 className="features__content-title"> <a >Students Visa </a> </h3>
                    <p>We helped with other family based employment based and investment based Immigration.</p>
                    <a >Read More <i className="fal fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="features">
                  <div className="features__thumb">
                    <a ><img src="assets/img/featurs/featurs-3.jpg" alt='' /></a>
                  </div>
                  <div className="features__content">
                    <h3 className="features__content-title"> <a >Work &amp; Job Visa</a> </h3>
                    <p>We helped with other family based employment based and investment based Immigration.</p>
                    <a >Read More <i className="fal fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                <div className="features">
                  <div className="features__thumb">
                    <a href="services.html"> <img src="assets/img/featurs/featurs-4.jpg" alt='' /></a>
                  </div>
                  <div className="features__content">
                    <h3 className="features__content-title"> <a >Tourist &amp; Visitor Visa</a> </h3>
                    <p>We helped with other family based employment based and investment based Immigration.</p>
                    <a >Read More <i className="fal fa-long-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* featurs area end here */}
        {/* Ab-fact-area start */}
        <div className="abfact-area services-vrly pt-85 pb-285" style={{ backgroundImage: 'url(assets/img/services/services-bg.jpg)' }}>
          <div className="container">
            <div className="row mb-20">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="fact fact-2 abfact-items text-center">
                  <h1 className="counter-count"><span className="">12</span>k+</h1>
                  <span>Happy Clients</span>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30 ">
                <div className="fact fact-2 abfact-items text-center ">
                  <h1 className="-count"><span className="">80</span>+</h1>
                  <span>Employment Create</span>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="fact fact-2 abfact-items text-center ">
                  <h1 className="">13</h1>
                  <span>Sister Conscern Company</span>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 mb-30">
                <div className="fact fact-2 abfact-items text-center ">
                  <h1 className="-count"><span className="">9</span>k+</h1>
                  <span>Visa Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ab-fact-area end */}
        {/* intro-area start */}
        <section className="intro-area mb-5">
          <div className="container">
            <div className="row service-intro-top g-0">
              <div className="col-xxl-6 col-xl-6 col-lg-6 d-flex align-items-center">
                <div className="section_title_wrapper pl-50 pr-70">
                  <span className="subtitle">
                    Our Service
                  </span>
                  <h2 className="section-title">
                    We Journey The Global Business to Ensuring The Guarantee
                  </h2>
                  <p className="pt-30 pb-25 ">Explore business opportunities through strategic business units of the Group and flourish and prosper in the concerned sectors by harnessing people’s power and potential as well as making best use of resources giving due importance to national priorities.</p>
                  <div className="check-use mb-40">
                    <a href="register.html"><i className="far fa-check-square" /> Visa Requests</a>
                    <a href="register.html"><i className="far fa-check-square" /> Visa Apply</a>
                    <a href="contact.html"><i className="far fa-check-square" /> Visa Service</a>
                  </div>
                  <div className="abinfro-btn d-flex align-items-center">
                    <a href="services.html" className="theme-btn">Contact us</a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6">
                <div className="intro-right">
                  <img src="assets/img/about-us/ab-m.jpg" alt='' />
                  <div className="intro-btn">
                    <a className="play-btn popup-video" href="https://www.youtube.com/watch?v=uGuDbJaTZNY"><i className="flaticon-play-button" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* intro-area end */}
      </div>

    </>
  );
};

export default Companies;